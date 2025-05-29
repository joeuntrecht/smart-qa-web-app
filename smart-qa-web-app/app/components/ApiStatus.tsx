export default function ApiStatus() {
    const hasApiKey = !!import.meta.env.VITE_ANTHROPIC_API_KEY;
  
    if (hasApiKey) {
      return (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                ✅ Claude AI is connected and ready!
              </p>
              <p className="text-xs text-green-600 mt-1">
                You'll receive real AI-powered responses from Claude.
              </p>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-yellow-800">
              🔧 Using mock responses (Demo mode)
            </p>
            <p className="text-xs text-yellow-600 mt-1">
              To enable real Claude AI responses:
            </p>
            <ol className="text-xs text-yellow-600 mt-2 ml-4 list-decimal">
              <li>Get an API key from <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" className="underline">console.anthropic.com</a></li>
              <li>Add <code className="bg-yellow-100 px-1 rounded">VITE_ANTHROPIC_API_KEY=your_key</code> to your .env file</li>
              <li>Restart your development server</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }