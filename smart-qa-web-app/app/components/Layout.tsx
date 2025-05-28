import { APP_CONFIG } from "~/lib/constants";

interface LayoutProps {
    children: React.ReactNode;
  }
  
  export default function Layout({ children }: LayoutProps) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-gray-900">
                    🤖 {APP_CONFIG.name}
                  </h1>
                </div>
              </div>
              <div className="hidden md:block">
                <p className="text-sm text-gray-600">
                  {APP_CONFIG.description}
                </p>
              </div>
            </div>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
  
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-sm text-gray-500">
              Built with React Router, Tailwind CSS, and AI APIs
            </p>
          </div>
        </footer>
      </div>
    );
  }