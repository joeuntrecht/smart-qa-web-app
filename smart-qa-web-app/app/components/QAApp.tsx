import { useState } from 'react';
import type { Category, QASession } from '~/types/types';
import { CATEGORIES } from '../lib/constants';
import { getAIAnswer } from '../lib/aiService';
import Layout from './Layout';
import CategorySelector from './CategorySelector';
import QuestionInput from './QuestionInput';
import AnswerDisplay from './AnswerDisplay';

export default function QAApp() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('general');
  const [sessions, setSessions] = useState<QASession[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionSubmit = async (questionText: string) => {
    const questionId = crypto.randomUUID();
    const newSession: QASession = {
      id: crypto.randomUUID(),
      question: {
        id: questionId,
        text: questionText,
        category: selectedCategory,
        timestamp: new Date()
      },
      answer: null,
      isLoading: true
    };

    // Add new session and set loading state
    setSessions(prev => [newSession, ...prev]);
    setIsLoading(true);

    try {
      // Get AI answer
      const answer = await getAIAnswer(questionText, selectedCategory);
      
      // Update session with answer
      setSessions(prev => 
        prev.map(session => 
          session.id === newSession.id 
            ? { ...session, answer, isLoading: false }
            : session
        )
      );
    } catch (error) {
      console.error('Failed to get AI answer:', error);
      
      // Update session with error state
      setSessions(prev => 
        prev.map(session => 
          session.id === newSession.id 
            ? { ...session, answer: null, isLoading: false }
            : session
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  const clearHistory = () => {
    setSessions([]);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Category Selection */}
        <CategorySelector 
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Question Input */}
        <QuestionInput
          onSubmit={handleQuestionSubmit}
          isLoading={isLoading}
          categoryName={CATEGORIES[selectedCategory].name}
        />

        {/* Sessions History */}
        {sessions.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Q&A History
              </h2>
              <button
                onClick={clearHistory}
                className="text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear History
              </button>
            </div>
          </div>
        )}

        {/* Display Sessions */}
        <div className="space-y-6">
          {sessions.map((session) => (
            <AnswerDisplay 
              key={session.id} 
              session={session} 
            />
          ))}
        </div>

        {/* Empty State */}
        {sessions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ready to Answer Your Questions
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Select a category above and ask your first question. 
              I'll provide intelligent, helpful answers powered by AI.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}