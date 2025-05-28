import type { QASession } from "~/types/types";

interface AnswerDisplayProps {
    session: QASession;
  }
  
  export default function AnswerDisplay({ session }: AnswerDisplayProps) {
    if (!session.question) return null;
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {/* Question */}
        <div className="mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">Q</span>
              </div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-gray-900 font-medium mb-1">Your Question:</p>
              <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                {session.question.text}
              </p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <span className="capitalize bg-gray-100 px-2 py-1 rounded">
                  {session.question.category.replace('-', ' ')}
                </span>
                <span className="ml-2">
                  {session.question.timestamp.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Answer */}
        <div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                {session.isLoading ? (
                  <svg className="animate-spin h-4 w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <span className="text-green-600 font-semibold text-sm">A</span>
                )}
              </div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-gray-900 font-medium mb-1">AI Answer:</p>
              {session.isLoading ? (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    🤖 Thinking and generating your answer...
                  </p>
                </div>
              ) : session.answer ? (
                <div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-gray-800 whitespace-pre-wrap">
                      {session.answer.text}
                    </p>
                  </div>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span className="bg-green-100 px-2 py-1 rounded">
                      Powered by {session.answer.source}
                    </span>
                    <span className="ml-2">
                      {session.answer.timestamp.toLocaleString()}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-800">
                    Sorry, I couldn't generate an answer. Please try again.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }