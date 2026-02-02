import { ReviewPage } from '@/app/components/ReviewPage';
import { WordData } from '@/app/utils/memorySystem';

interface ReviewPageContainerProps {
  words: WordData[];
  onDeleteWords: (wordIds: string[]) => void;
}

export function ReviewPageContainer({ words, onDeleteWords }: ReviewPageContainerProps) {
  return <ReviewPage words={words} onDeleteWords={onDeleteWords} />;
}
