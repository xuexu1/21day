import { WordData, formatLocalDate } from './memorySystem';

function getCreatedAtMs(word: WordData): number {
  if (typeof word.createdAtMs === 'number' && Number.isFinite(word.createdAtMs)) {
    return word.createdAtMs;
  }
  if (word.createdDate) {
    const ms = new Date(`${word.createdDate}T00:00:00`).getTime();
    if (Number.isFinite(ms)) return ms;
  }
  return 0;
}

/**
 * 获取指定时间范围内的统计数据
 */
export interface ReviewStats {
  newWordsCount: number; // 新增单词数量
  review2Count: number; // 回顾2次的单词数量
  review3Count: number; // 回顾3次的单词数量
  review4Count: number; // 回顾4次及以上的单词数量
  newWords: WordData[]; // 新增单词列表
}

/**
 * 获取指定月份的统计数据
 */
export function getMonthlyStats(words: WordData[], year: number, month: number): ReviewStats {
  const monthStart = new Date(year, month - 1, 1);
  const monthEnd = new Date(year, month, 0, 23, 59, 59);
  
  const monthStartStr = formatLocalDate(monthStart);
  const monthEndStr = formatLocalDate(monthEnd);
  
  // 筛选本月新增的单词
  const filteredWords = words.filter(word => {
    if (!word.createdDate) return false;
    const createdDate = word.createdDate;
    return createdDate >= monthStartStr && createdDate <= monthEndStr;
  });
  
  // 去重：基于单词内容去重，保留创建时间最新的记录
  const wordMap = new Map<string, WordData>();
  filteredWords.forEach(word => {
    const key = word.word.toLowerCase().trim();
    const existing = wordMap.get(key);
    if (!existing || getCreatedAtMs(word) > getCreatedAtMs(existing)) {
      wordMap.set(key, word);
    }
  });
  const newWords = Array.from(wordMap.values());
  
  // 统计不同回顾次数的单词
  const review2Count = newWords.filter(w => w.reviewCount >= 2).length;
  const review3Count = newWords.filter(w => w.reviewCount >= 3).length;
  const review4Count = newWords.filter(w => w.reviewCount >= 4).length;
  
  return {
    newWordsCount: newWords.length,
    review2Count,
    review3Count,
    review4Count,
    newWords: newWords.sort((a, b) => {
      const createdCompare = getCreatedAtMs(b) - getCreatedAtMs(a);
      if (createdCompare !== 0) return createdCompare;
      return b.createdDate.localeCompare(a.createdDate);
    }),
  };
}

/**
 * 获取当前月份
 */
export function getCurrentYearMonth(): { year: number; month: number } {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  };
}

/**
 * 获取半年的统计数据
 */
export function getHalfYearStats(words: WordData[]): ReviewStats {
  const now = new Date();
  const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 6, 1);
  
  const startStr = formatLocalDate(sixMonthsAgo);
  const endStr = formatLocalDate(now);
  
  const filteredWords = words.filter(word => {
    if (!word.createdDate) return false;
    const createdDate = word.createdDate;
    return createdDate >= startStr && createdDate <= endStr;
  });
  
  // 去重：基于单词内容去重，保留创建时间最新的记录
  const wordMap = new Map<string, WordData>();
  filteredWords.forEach(word => {
    const key = word.word.toLowerCase().trim();
    const existing = wordMap.get(key);
    if (!existing || getCreatedAtMs(word) > getCreatedAtMs(existing)) {
      wordMap.set(key, word);
    }
  });
  const newWords = Array.from(wordMap.values());
  
  const review2Count = newWords.filter(w => w.reviewCount >= 2).length;
  const review3Count = newWords.filter(w => w.reviewCount >= 3).length;
  const review4Count = newWords.filter(w => w.reviewCount >= 4).length;
  
  return {
    newWordsCount: newWords.length,
    review2Count,
    review3Count,
    review4Count,
    newWords: newWords.sort((a, b) => {
      const createdCompare = getCreatedAtMs(b) - getCreatedAtMs(a);
      if (createdCompare !== 0) return createdCompare;
      return b.createdDate.localeCompare(a.createdDate);
    }),
  };
}

/**
 * 获取一年的统计数据
 */
export function getYearStats(words: WordData[]): ReviewStats {
  const now = new Date();
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  
  const startStr = formatLocalDate(oneYearAgo);
  const endStr = formatLocalDate(now);
  
  const filteredWords = words.filter(word => {
    if (!word.createdDate) return false;
    const createdDate = word.createdDate;
    return createdDate >= startStr && createdDate <= endStr;
  });
  
  // 去重：基于单词内容去重，保留创建时间最新的记录
  const wordMap = new Map<string, WordData>();
  filteredWords.forEach(word => {
    const key = word.word.toLowerCase().trim();
    const existing = wordMap.get(key);
    if (!existing || getCreatedAtMs(word) > getCreatedAtMs(existing)) {
      wordMap.set(key, word);
    }
  });
  const newWords = Array.from(wordMap.values());
  
  const review2Count = newWords.filter(w => w.reviewCount >= 2).length;
  const review3Count = newWords.filter(w => w.reviewCount >= 3).length;
  const review4Count = newWords.filter(w => w.reviewCount >= 4).length;
  
  return {
    newWordsCount: newWords.length,
    review2Count,
    review3Count,
    review4Count,
    newWords: newWords.sort((a, b) => {
      const createdCompare = getCreatedAtMs(b) - getCreatedAtMs(a);
      if (createdCompare !== 0) return createdCompare;
      return b.createdDate.localeCompare(a.createdDate);
    }),
  };
}
