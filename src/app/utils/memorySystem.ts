import { wordLibrary } from '@/app/data/wordLibrary';

export interface WordData {
  id: string;
  word: string;
  translation: string;
  type: 'word' | 'sentence';
  level: number; // 0-4 对应记忆等级
  nextReviewDate: string; // ISO日期字符串
  lastReviewDate: string; // ISO日期字符串
  createdDate: string; // 本地日期字符串 YYYY-MM-DD
  createdAtMs: number; // 创建时间戳（本地时间）
  reviewCount: number; // 累计回顾次数
}

// 21天记忆法间隔（天数）
const REVIEW_INTERVALS = [1, 3, 7, 15, 21];

/**
 * 将本地日期格式化为 YYYY-MM-DD
 */
export function formatLocalDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 获取今天的日期（不包含时间）
 */
export function getTodayDate(): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return formatLocalDate(today);
}

/**
 * 计算下次复习日期
 */
export function calculateNextReviewDate(level: number): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (level >= REVIEW_INTERVALS.length) {
    // 如果完成了所有等级，设置为很久以后（表示已完成）
    today.setDate(today.getDate() + 365);
  } else {
    today.setDate(today.getDate() + REVIEW_INTERVALS[level]);
  }
  
  return formatLocalDate(today);
}

/**
 * 检查单词是否应该今天复习
 */
export function shouldReviewToday(word: WordData): boolean {
  const today = getTodayDate();
  return word.nextReviewDate <= today;
}

/**
 * 初始化默认单词列表
 * 从单词库中选择前9个单词作为初始单词
 * 这些单词会被视为"旧单词"，创建日期设置为本月第一天
 */
export function getDefaultWords(): WordData[] {
  const today = getTodayDate();
  
  // 获取本月第一天作为初始单词的创建日期
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  firstDayOfMonth.setHours(0, 0, 0, 0);
  const firstDay = formatLocalDate(firstDayOfMonth);
  const firstDayMs = firstDayOfMonth.getTime();
  
  // 从单词库中选择前9个单词作为初始单词
  const selectedWords = wordLibrary.slice(0, 9);
  
  return selectedWords.map((item, index) => ({
    id: String(index + 1),
    word: item.word,
    translation: item.translation,
    type: item.type,
    level: 0,
    nextReviewDate: today,
    lastReviewDate: '',
    createdDate: firstDay, // 使用本月第一天作为创建日期
    createdAtMs: firstDayMs,
    reviewCount: 0,
  }));
}

/**
 * 从localStorage加载单词数据
 */
export function loadWords(): WordData[] {
  try {
    const stored = localStorage.getItem('memoryWords');
    if (stored) {
      const parsed = JSON.parse(stored) as WordData[];
      let didUpgrade = false;
      const upgraded = parsed.map((word) => {
        if (typeof word.createdAtMs === 'number') {
          return word;
        }
        const createdMs = word.createdDate
          ? new Date(`${word.createdDate}T00:00:00`).getTime()
          : Date.now();
        didUpgrade = true;
        return {
          ...word,
          createdAtMs: Number.isFinite(createdMs) ? createdMs : Date.now(),
        };
      });
      if (didUpgrade) {
        saveWords(upgraded);
      }
      return upgraded;
    }
  } catch (error) {
    console.error('Error loading words from localStorage:', error);
  }
  
  // 如果没有存储的数据，返回默认单词列表
  const defaultWords = getDefaultWords();
  saveWords(defaultWords);
  return defaultWords;
}

/**
 * 保存单词数据到localStorage
 */
export function saveWords(words: WordData[]): void {
  try {
    localStorage.setItem('memoryWords', JSON.stringify(words));
  } catch (error) {
    console.error('Error saving words to localStorage:', error);
  }
}

/**
 * 获取今天需要复习的单词
 */
export function getTodayWords(allWords: WordData[]): WordData[] {
  return allWords.filter(word => shouldReviewToday(word));
}

/**
 * 标记单词为"记住"
 */
export function markAsRemembered(word: WordData): WordData {
  const today = getTodayDate();
  const newLevel = word.level + 1;
  
  return {
    ...word,
    level: newLevel,
    lastReviewDate: today,
    nextReviewDate: calculateNextReviewDate(newLevel),
    reviewCount: (word.reviewCount || 0) + 1,
  };
}

/**
 * 标记单词为"忘记"（重置等级）
 */
export function markAsForgotten(word: WordData): WordData {
  const today = getTodayDate();
  
  return {
    ...word,
    level: 0,
    lastReviewDate: today,
    nextReviewDate: today, // 继续留在今天的复习队列中
  };
}
