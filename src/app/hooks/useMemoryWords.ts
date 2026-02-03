import { useEffect, useState } from 'react';
import {
  loadWords,
  saveWords,
  getTodayWords,
  markAsRemembered,
  markAsForgotten,
  WordData,
  getTodayDate,
} from '@/app/utils/memorySystem';

export interface BatchImportResult {
  newWords: WordData[];
  duplicateCount: number;
  invalidCount: number;
}

export interface ImportCommitResult {
  insertIndex: number;
  updatedTodayWords: WordData[];
}

export function useMemoryWords() {
  const [allWords, setAllWords] = useState<WordData[]>([]);
  const [todayWords, setTodayWords] = useState<WordData[]>([]);
  const [todayWordsSnapshot, setTodayWordsSnapshot] = useState<WordData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [todayTotalCount, setTodayTotalCount] = useState(0);
  const [rememberedCount, setRememberedCount] = useState(0);
  const [isExtraReview, setIsExtraReview] = useState(false);
  const [extraReviewCount, setExtraReviewCount] = useState(0);

  // 初始化：加载单词数据
  useEffect(() => {
    console.info(`当前域名: ${window.location.origin}`);
    const words = loadWords();
    setAllWords(words);

    const today = getTodayWords(words);
    setTodayWords(today);
    setTodayWordsSnapshot(today);
    setTodayTotalCount(today.length);
    setRememberedCount(0);
    setIsExtraReview(false);
    setExtraReviewCount(0);

    console.log('初始化完成:', {
      allWordsCount: words.length,
      todayWordsCount: today.length,
      todayWords: today,
    });
  }, []);

  // 处理"记住"按钮点击
  const handleRemember = () => {
    if (currentIndex >= todayWords.length) return;

    if (isExtraReview) {
      if (currentIndex < todayWords.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setTodayWords([]);
        setCurrentIndex(0);
        setIsExtraReview(false);
      }
      return;
    }

    const currentWord = todayWords[currentIndex];
    const updatedWord = markAsRemembered(currentWord);

    // 更新所有单词列表
    const updatedAllWords = allWords.map(word =>
      word.id === currentWord.id ? updatedWord : word,
    );
    setAllWords(updatedAllWords);
    saveWords(updatedAllWords);

    // 增加已记住数量
    setRememberedCount(prev => prev + 1);

    // 从今日列表中移除
    const updatedTodayWords = todayWords.filter((_, index) => index !== currentIndex);
    setTodayWords(updatedTodayWords);

    // 如果当前索引超出范围，调整索引
    if (updatedTodayWords.length === 0) {
      setCurrentIndex(0); // 列表为空时重置为0
    } else if (currentIndex >= updatedTodayWords.length) {
      setCurrentIndex(updatedTodayWords.length - 1);
    }
  };

  // 处理"忘记"按钮点击
  const handleForgot = () => {
    if (currentIndex >= todayWords.length) return;

    if (isExtraReview) {
      if (currentIndex < todayWords.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setTodayWords([]);
        setCurrentIndex(0);
        setIsExtraReview(false);
      }
      return;
    }

    const currentWord = todayWords[currentIndex];
    const updatedWord = markAsForgotten(currentWord);

    // 更新所有单词列表
    const updatedAllWords = allWords.map(word =>
      word.id === currentWord.id ? updatedWord : word,
    );
    setAllWords(updatedAllWords);
    saveWords(updatedAllWords);

    // 更新今日列表（单词仍然保留在列表中）
    const updatedTodayWords = [...todayWords];
    updatedTodayWords[currentIndex] = updatedWord;
    setTodayWords(updatedTodayWords);

    // 移动到下一个单词（如果已经是最后一个，就回到第一个）
    if (currentIndex < todayWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // 处理添加新单词
  const handleAddWord = (word: string, translation: string): boolean => {
    // 检查是否已存在相同的单词（不区分大小写）
    const normalizedWord = word.toLowerCase().trim();
    const existingWord = allWords.find(w => w.word.toLowerCase().trim() === normalizedWord);

    if (existingWord) {
      return false; // 返回false表示单词已存在
    }

    const today = getTodayDate();
    const createdAtMs = Date.now();
    const newWord: WordData = {
      id: Date.now().toString(),
      word,
      translation,
      type: word.includes(' ') ? 'sentence' : 'word',
      level: 0,
      nextReviewDate: today,
      lastReviewDate: '',
      createdDate: today,
      createdAtMs,
      reviewCount: 0,
    };

    const updatedAllWords = [...allWords, newWord];
    setAllWords(updatedAllWords);
    saveWords(updatedAllWords);

    // 将新单词插入到当前位置，使其立即显示在卡片上
    const updatedTodayWords = [...todayWords];
    updatedTodayWords.splice(currentIndex, 0, newWord);
    setTodayWords(updatedTodayWords);
    setTodayTotalCount(updatedTodayWords.length);
    const updatedSnapshot = [...todayWordsSnapshot];
    updatedSnapshot.splice(currentIndex, 0, newWord);
    setTodayWordsSnapshot(updatedSnapshot);

    return true; // 返回true表示成功添加了单词
  };

  // 处理删除单词
  const handleDeleteWords = (wordIds: string[]) => {
    const updatedAllWords = allWords.filter(word => !wordIds.includes(word.id));
    setAllWords(updatedAllWords);
    saveWords(updatedAllWords);

    // 同时更新今日列表
    const updatedTodayWords = todayWords.filter(word => !wordIds.includes(word.id));
    setTodayWords(updatedTodayWords);
    const updatedSnapshot = todayWordsSnapshot.filter(word => !wordIds.includes(word.id));
    setTodayWordsSnapshot(updatedSnapshot);
    // 清空回顾单词时，同步清空记忆卡片
    if (wordIds.length > 0) {
      setTodayWords([]);
      setTodayWordsSnapshot([]);
      setTodayTotalCount(0);
      setCurrentIndex(0);
      setIsExtraReview(false);
    } else if (updatedSnapshot.length === 0) {
      setIsExtraReview(false);
    }

    // 如果当前索引超出范围，调整索引
    if (updatedTodayWords.length === 0) {
      setCurrentIndex(0); // 列表为空时重置为0
    } else if (currentIndex >= updatedTodayWords.length) {
      setCurrentIndex(updatedTodayWords.length - 1);
    }
  };

  const parseBatchImport = (text: string): BatchImportResult => {
    const normalizeLine = (line: string) => line.trim();
    const hasChinese = (line: string) => /[\u4e00-\u9fa5]/.test(line);
    const hasEnglish = (line: string) => /[a-zA-Z]/.test(line);
    const englishTokenCount = (line: string) => (line.match(/[A-Za-z]+/g) || []).length;
    const hasEnglishPunct = (line: string) => /[.,!?;:]/.test(line);
    const hasEntrySeparators = (line: string) =>
      /[。；｜|]/.test(line) || /\s+[\/／]\s+/.test(line);
    const isLikelySentence = (line: string) =>
      hasChinese(line) &&
      hasEnglish(line) &&
      (englishTokenCount(line) >= 3 ||
        hasEnglishPunct(line) ||
        line.length >= 40 ||
        hasEntrySeparators(line));

    const splitSentenceEntries = (line: string) => {
      let parts = [line];
      parts = parts.flatMap(part => part.split(/[。；｜|]/));
      parts = parts.flatMap(part => part.split(/\s+[\/／]\s+/));
      return parts.map(normalizeLine).filter(Boolean);
    };

    const splitWordEntries = (line: string) => {
      // 智能分割规则：在"中文词+空格+小写英文单词"之间插入换行
      const autoSplit = line.replace(/([\u4e00-\u9fa5，。、；：？！]+)\s+(?=[a-z])/g, '$1\n');
      return autoSplit.split('\n').map(normalizeLine).filter(Boolean);
    };

    const rawLines = text
      .split('\n')
      .map(normalizeLine)
      .filter(line => line.length > 0);

    const lines: string[] = [];
    rawLines.forEach(line => {
      if (isLikelySentence(line)) {
        lines.push(...splitSentenceEntries(line));
      } else {
        lines.push(...splitWordEntries(line));
      }
    });

    console.log('原始导入内容:', text);
    console.log('解析行结果:', lines);

    let duplicateCount = 0;
    let invalidCount = 0;
    const today = getTodayDate();
    const newWords: WordData[] = [];
    const baseCreatedAtMs = Date.now();

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let word = '';
      let translation = '';

      // 检查是否包含中文
      const lineHasChinese = /[\u4e00-\u9fa5]/.test(line);

      if (lineHasChinese) {
        // 同一行包含英文和中文：尝试分离单词/句子和翻译
        // 找到第一个中文字符的位置
        const firstChineseIndex = line.search(/[\u4e00-\u9fa5]/);

        if (firstChineseIndex > 0) {
          // 中文前面的部分是英文单词/句子
          const englishPart = line.substring(0, firstChineseIndex).trim();
          const chinesePart = line.substring(firstChineseIndex).trim();

          // 验证英文部分：至少要有一个英文字母
          if (/[a-zA-Z]/.test(englishPart) && chinesePart.length > 0) {
            word = englishPart;
            translation = chinesePart;
          } else {
            invalidCount++;
            continue;
          }
        } else {
          // 中文在最前面，格式错误
          invalidCount++;
          continue;
        }
      } else {
        // 纯英文行，检查下一行是否是翻译
        if (i + 1 < lines.length && /[\u4e00-\u9fa5]/.test(lines[i + 1])) {
          const nextLine = lines[i + 1];
          // 确保下一行不包含英文字母在中文前面（不是"单词 翻译"格式）
          const firstChineseIdx = nextLine.search(/[\u4e00-\u9fa5]/);
          const hasEnglishWord =
            firstChineseIdx > 0 && /[a-zA-Z]/.test(nextLine.substring(0, firstChineseIdx));

          if (!hasEnglishWord) {
            word = line;
            translation = nextLine;
            i++; // 跳过下一行
          } else {
            invalidCount++;
            continue;
          }
        } else {
          invalidCount++;
          continue;
        }
      }

      // 检查是否成功提取了单词和翻译
      if (word && translation) {
        const normalizedWord = word.toLowerCase().trim();
        const existingWord = allWords.find(w => w.word.toLowerCase().trim() === normalizedWord);

        if (existingWord) {
          duplicateCount++;
        } else {
          const trimmedWord = word.trim();
          const newWord: WordData = {
            id: `${baseCreatedAtMs}-${newWords.length}`,
            word: trimmedWord,
            translation: translation.trim(),
            type: trimmedWord.includes(' ') ? 'sentence' : 'word',
            level: 0,
            nextReviewDate: today,
            lastReviewDate: '',
            createdDate: today,
            createdAtMs: baseCreatedAtMs + newWords.length,
            reviewCount: 0,
          };

          console.log('解析成功:', {
            word: trimmedWord,
            translation: translation.trim(),
            type: newWord.type,
          });
          newWords.push(newWord);
        }
      }
    }

    return { newWords, duplicateCount, invalidCount };
  };

  const addImportedWords = (pendingWords: WordData[]): ImportCommitResult => {
    const updatedAllWords = [...allWords, ...pendingWords];
    setAllWords(updatedAllWords);
    saveWords(updatedAllWords);

    // 将新单词插入到当前位置，使其立即显示在卡片上
    const insertIndex = todayWords.length === 0 ? 0 : currentIndex;
    const updatedTodayWords = [...todayWords];
    updatedTodayWords.splice(insertIndex, 0, ...pendingWords);
    setTodayWords(updatedTodayWords);
    setTodayTotalCount(prevCount => prevCount + pendingWords.length);
    const updatedSnapshot = [...todayWordsSnapshot];
    updatedSnapshot.splice(insertIndex, 0, ...pendingWords);
    setTodayWordsSnapshot(updatedSnapshot);

    // 如果之前列表为空，确保currentIndex是0
    if (todayWords.length === 0) {
      setCurrentIndex(0);
    }

    return { insertIndex, updatedTodayWords };
  };

  const startExtraReview = () => {
    if (todayWordsSnapshot.length === 0) return;
    setIsExtraReview(true);
    setExtraReviewCount(prev => prev + 1);
    setTodayWords([...todayWordsSnapshot]);
    setCurrentIndex(0);
  };

  return {
    allWords,
    todayWords,
    currentIndex,
    todayTotalCount,
    rememberedCount,
    isExtraReview,
    extraReviewCount,
    handleRemember,
    handleForgot,
    handleAddWord,
    handleDeleteWords,
    parseBatchImport,
    addImportedWords,
    startExtraReview,
  };
}
