// app/types/index.ts

export interface Question {
    id: string;
    text: string;
    category: string;
    timestamp: Date;
  }
  
  export interface Answer {
    id: string;
    questionId: string;
    text: string;
    timestamp: Date;
    source: 'claude' | 'perplexity';
  }
  
  export interface QASession {
    id: string;
    question: Question;
    answer: Answer | null;
    isLoading: boolean;
  }
  
  export type Category = 
    | 'general'
    | 'real-estate'
    | 'finance'
    | 'career-advice'
    | 'technology'
    | 'health';
  
  export interface CategoryInfo {
    id: Category;
    name: string;
    description: string;
    color: string;
    icon: string;
  }