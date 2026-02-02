import { describe, expect, it } from 'vitest';
import { getMonthlyStats } from '../reviewStats';
import type { WordData } from '../memorySystem';

describe('reviewStats sorting and dedupe', () => {
  it('dedupes by latest createdAtMs for same word', () => {
    const words: WordData[] = [
      {
        id: 'old',
        word: 'repeat',
        translation: '重复',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 1000,
        reviewCount: 0,
      },
      {
        id: 'new',
        word: 'repeat',
        translation: '重复',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 2000,
        reviewCount: 0,
      },
    ];

    const stats = getMonthlyStats(words, 2026, 2);
    expect(stats.newWordsCount).toBe(1);
    expect(stats.newWords[0].createdAtMs).toBe(2000);
  });

  it('sorts newWords by createdAtMs desc', () => {
    const words: WordData[] = [
      {
        id: '1',
        word: 'a',
        translation: '甲',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 1000,
        reviewCount: 0,
      },
      {
        id: '2',
        word: 'b',
        translation: '乙',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 3000,
        reviewCount: 0,
      },
      {
        id: '3',
        word: 'c',
        translation: '丙',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 2000,
        reviewCount: 0,
      },
    ];

    const stats = getMonthlyStats(words, 2026, 2);
    expect(stats.newWords.map((word) => word.createdAtMs)).toEqual([3000, 2000, 1000]);
  });

  it('counts review2/review3/review4 thresholds correctly', () => {
    const words: WordData[] = [
      {
        id: '1',
        word: 'alpha',
        translation: '阿尔法',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 1000,
        reviewCount: 1,
      },
      {
        id: '2',
        word: 'beta',
        translation: '贝塔',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 2000,
        reviewCount: 2,
      },
      {
        id: '3',
        word: 'gamma',
        translation: '伽马',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 3000,
        reviewCount: 3,
      },
      {
        id: '4',
        word: 'delta',
        translation: '德尔塔',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 4000,
        reviewCount: 4,
      },
    ];

    const stats = getMonthlyStats(words, 2026, 2);
    expect(stats.review2Count).toBe(3);
    expect(stats.review3Count).toBe(2);
    expect(stats.review4Count).toBe(1);
  });

  it('uses deduped latest word for review counts', () => {
    const words: WordData[] = [
      {
        id: 'old',
        word: 'repeat',
        translation: '重复',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 1000,
        reviewCount: 1,
      },
      {
        id: 'new',
        word: 'repeat',
        translation: '重复',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        createdAtMs: 2000,
        reviewCount: 4,
      },
    ];

    const stats = getMonthlyStats(words, 2026, 2);
    expect(stats.newWordsCount).toBe(1);
    expect(stats.review2Count).toBe(1);
    expect(stats.review3Count).toBe(1);
    expect(stats.review4Count).toBe(1);
  });
});
