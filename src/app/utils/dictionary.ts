// 词典条目类型
export interface DictionaryEntry {
  word: string;
  translation: string;
}

interface DictionaryMetaEntry {
  translation: string;
  collins: number;
  oxford: string;
}

const dictionaryUrl = new URL('./ecdict.csv', import.meta.url).toString();
let dictionaryEntries: DictionaryEntry[] | null = null;
let dictionaryMap: Map<string, string> | null = null;
let dictionaryMetaMap: Map<string, DictionaryMetaEntry> | null = null;
let loadPromise: Promise<void> | null = null;

function simplifyTranslation(
  rawTranslation: string,
  collinsRank: number,
  oxford: string,
): string {
  const cleaned = rawTranslation
    .replace(/\[[^\]]*]/g, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\\n/g, '；')
    .trim();

  const parts = cleaned
    .split(/[；;\/|、，,]/)
    .map(part => part.trim())
    .map(part => part.replace(/^[a-zA-Z]+\.\s*/, '').trim())
    .filter(part => part.length > 0);

  if (parts.length === 0) {
    return cleaned;
  }

  const maxItems = 2;
  const preferHead = collinsRank >= 3 || oxford.length > 0;
  const picked = preferHead
    ? parts.slice(0, maxItems)
    : [...parts].sort((a, b) => a.length - b.length).slice(0, maxItems);

  return picked.join('；');
}

function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      const nextChar = line[i + 1];
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      fields.push(current);
      current = '';
      continue;
    }

    current += char;
  }

  fields.push(current);
  return fields;
}

function cleanField(value: string): string {
  const trimmed = value.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return trimmed.slice(1, -1).replace(/""/g, '"').trim();
  }
  return trimmed;
}

async function loadDictionary(): Promise<void> {
  const response = await fetch(dictionaryUrl);
  const text = await response.text();
  const lines = text.split(/\r?\n/);

  const entries: DictionaryEntry[] = [];
  const map = new Map<string, string>();
  const metaMap = new Map<string, DictionaryMetaEntry>();

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    const fields = parseCsvLine(line);
    if (fields.length < 4) continue;

    const word = cleanField(fields[0]);
    const translation = cleanField(fields[3]);
    const collins = Number(cleanField(fields[5] || '0')) || 0;
    const oxford = cleanField(fields[6] || '');
    if (!word || !translation) continue;

    entries.push({ word, translation });
    map.set(word.toLowerCase(), translation);
    metaMap.set(word.toLowerCase(), { translation, collins, oxford });
  }

  dictionaryEntries = entries;
  dictionaryMap = map;
  dictionaryMetaMap = metaMap;
}

async function ensureDictionaryLoaded(): Promise<void> {
  if (dictionaryEntries && dictionaryMap && dictionaryMetaMap) return;
  if (!loadPromise) {
    loadPromise = loadDictionary().catch((error) => {
      console.error('Failed to load dictionary:', error);
      dictionaryEntries = [];
      dictionaryMap = new Map();
      dictionaryMetaMap = new Map();
    });
  }
  await loadPromise;
}

// 根据输入查找匹配的单词
export async function searchDictionary(
  input: string,
  maxResults: number = 20,
): Promise<DictionaryEntry[]> {
  if (!input || input.trim().length === 0) {
    return [];
  }

  await ensureDictionaryLoaded();
  const searchTerm = input.toLowerCase().trim();
  
  // 过滤匹配的单词（以输入开头）
  const matches = (dictionaryEntries || []).filter(entry =>
    entry.word.toLowerCase().startsWith(searchTerm),
  );

  // 返回最多maxResults个结果
  return matches.slice(0, maxResults);
}

// 翻译句子或短语（根据词典中的单词）
export async function translateSentence(input: string): Promise<string> {
  if (!input || input.trim().length === 0) {
    return '';
  }

  await ensureDictionaryLoaded();
  const normalized = input.trim();
  const isSentence = /\s/.test(normalized) || /[.,!?;:]/.test(normalized);

  if (!isSentence) {
    const exact = dictionaryMap?.get(normalized.toLowerCase());
    return exact || normalized;
  }

  // 分割成单词数组
  const words = normalized.split(/\s+/);
  
  // 翻译每个单词
  const translations = words.map(word => {
    const cleanWord = word.toLowerCase().replace(/[.,!?;:]/, '');
    const entry = dictionaryMetaMap?.get(cleanWord);
    
    if (entry) {
      // 提取主要翻译（去除词性标注）
      const mainTranslation = simplifyTranslation(entry.translation, entry.collins, entry.oxford)
        .replace(/^[a-z]+\.\s*/, '')
        .split('；')[0];
      return mainTranslation;
    }
    
    // 如果找不到翻译，返回原词
    return word;
  });

  // 组合翻译结果
  return translations.join('；');
}
