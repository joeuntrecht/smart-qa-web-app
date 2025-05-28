// app/components/QuestionInput.tsx

import React, { useState } from 'react';
import { APP_CONFIG } from "~/lib/constants";

interface QuestionInputProps {
    onSubmit: (question: string) => void;
    isLoading: boolean;
    categoryName: string;
  }
  
  export default function QuestionInput({ 
    onSubmit, 
    isLoading, 
    categoryName 
  }: QuestionInputProps) {
    const [question, setQuestion] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (question.trim() && !isLoading) {
        onSubmit(question.trim());
        setQuestion('');
      }
    };
  
    const remainingChars = APP_CONFIG.maxQuestionLength - question.length;
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
              htmlFor="question" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Ask your {categoryName.toLowerCase()} question:
            </label>
            <textarea
              id="question"
              name="question"
              value={question}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                console.log('Input changed:', e.target.value); // Debug log
                setQuestion(e.target.value);
              }}
              placeholder={`What would you like to know about ${categoryName.toLowerCase()}?`}
              maxLength={APP_CONFIG.maxQuestionLength}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       resize-none transition-colors bg-white text-gray-900"
              disabled={isLoading}
              style={{ 
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#111827',
                backgroundColor: '#ffffff'
              }}
            />
            <div className="flex justify-between items-center mt-2">
              <span className={`text-sm ${
                remainingChars < 50 ? 'text-red-500' : 'text-gray-500'
              }`}>
                {remainingChars} characters remaining
              </span>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={!question.trim() || isLoading}
            className={`
              w-full py-3 px-4 rounded-md font-medium transition-all duration-200
              ${!question.trim() || isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              }
            `}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Getting your answer...
              </div>
            ) : (
              'Ask Question'
            )}
          </button>
        </form>
      </div>
    );
  }