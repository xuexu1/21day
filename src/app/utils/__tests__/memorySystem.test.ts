import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { loadWords, type WordData } from '../memorySystem';

describe('loadWords migration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('adds createdAtMs from createdDate and persists upgrade', () => {
    const stored: WordData[] = [
      {
        id: '1',
        word: 'alpha',
        translation: '阿尔法',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '2026-02-01',
        reviewCount: 0,
      },
    ];
    localStorage.setItem('memoryWords', JSON.stringify(stored));

    const words = loadWords();
    const expectedMs = new Date('2026-02-01T00:00:00').getTime();

    expect(words[0].createdAtMs).toBe(expectedMs);
    const saved = JSON.parse(localStorage.getItem('memoryWords') || '[]') as WordData[];
    expect(saved[0].createdAtMs).toBe(expectedMs);
  });

  it('falls back to Date.now when createdDate is missing', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-02-02T10:00:00'));

    const stored: WordData[] = [
      {
        id: '2',
        word: 'beta',
        translation: '贝塔',
        type: 'word',
        level: 0,
        nextReviewDate: '2026-02-02',
        lastReviewDate: '',
        createdDate: '',
        reviewCount: 0,
      },
    ];
    localStorage.setItem('memoryWords', JSON.stringify(stored));

    const words = loadWords();
    expect(words[0].createdAtMs).toBe(Date.now());
  });
});
