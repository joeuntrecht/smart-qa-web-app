# Smart Q&A Web App 🤖

An intelligent question-and-answer web application built with React Router, TypeScript, and Tailwind CSS. Get AI-powered answers across multiple categories with a clean, modern interface.

## Features

- **Multi-Category Support**: Ask questions across 6 specialized categories
- **AI Integration**: Connected to Claude and Perplexity APIs for intelligent answers
- **Real-time Status**: API connection status monitoring
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Question Input**: Validated question submission with character limits
- **Answer Display**: Clean, formatted AI response presentation
- **Responsive Design**: Beautiful, mobile-first interface with Tailwind CSS
- **TypeScript**: Full type safety and enhanced developer experience
- **Modern React**: Built with React Router 7 and modern React patterns
- **Docker Support**: Containerized deployment ready

## Categories

- 🏠 **Real Estate** - Property, investments, and market insights
- 💰 **Finance** - Money management, investing, and financial planning
- 💼 **Career Advice** - Professional development and job guidance
- 💻 **Technology** - Tech trends, programming, and digital solutions
- 🏥 **Health** - Wellness, fitness, and health information
- ❓ **General** - Ask anything you want to know

## Tech Stack

- **Framework**: React Router 7
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (from Google Fonts)
- **Build Tool**: Vite
- **Package Manager**: npm/yarn/pnpm

## Project Structure

```
smart-qa-web-app/
├── app/
│   ├── components/
│   │   ├── AnswerDisplay.tsx       # AI answer display component
│   │   ├── ApiStatus.tsx           # API connection status indicator
│   │   ├── CategorySelector.tsx    # Category selection component
│   │   ├── ErrorBoundary.tsx       # Error handling wrapper
│   │   ├── Layout.tsx              # Main layout wrapper
│   │   ├── QAApp.tsx               # Main Q&A application component
│   │   └── QuestionInput.tsx       # Question input form
│   ├── lib/
│   │   ├── aiService.ts           # AI API integration service
│   │   └── constants.ts           # App configuration and categories
│   ├── routes/
│   │   └── home.tsx              # Main home page route
│   ├── types/
│   │   └── types.ts              # TypeScript type definitions
│   ├── welcome/
│   │   ├── logo-dark.svg         # Dark theme logo
│   │   ├── logo-light.svg        # Light theme logo
│   │   └── welcome.tsx           # Welcome page component
│   ├── app.css                   # Global styles and Tailwind imports
│   ├── root.tsx                  # Root component with providers
│   └── routes.ts                 # Route configuration
├── .dockerignore
├── .env                          # Environment variables
├── .gitignore
├── Dockerfile                    # Docker configuration
├── package-lock.json
├── package.json
├── react-router.config.ts        # React Router configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd smart-qa-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.


## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Key Components

#### QAApp
Main application component that orchestrates the question-answer flow:
- Manages application state
- Coordinates between input, processing, and display
- Handles AI service integration

#### QuestionInput
Interactive question input form with:
- Character count validation
- Category-aware submission
- Loading states during processing
- Error handling and user feedback

#### AnswerDisplay
Sophisticated answer presentation featuring:
- Formatted AI responses
- Source attribution (Claude/Perplexity)
- Timestamp information
- Copy-to-clipboard functionality

#### ApiStatus
Real-time API connection monitoring:
- Service availability indicators
- Connection health checks
- Visual status feedback

#### CategorySelector
Interactive category selection with visual feedback and hover effects. Each category has:
- Unique color scheme
- Descriptive icon
- Hover animations
- Selected state styling

#### ErrorBoundary
Comprehensive error handling wrapper:
- Catches and displays React errors gracefully
- Provides fallback UI for broken components
- Helps maintain app stability

#### Layout
Responsive layout wrapper providing:
- Header with app branding
- Main content area with proper spacing
- Footer with technology credits
- Gradient background styling

### Configuration

App settings can be modified in `app/lib/constants.ts`:

```typescript
export const APP_CONFIG = {
  name: 'Smart Q&A',
  description: 'Get intelligent answers powered by AI',
  maxQuestionLength: 500,
  apiTimeout: 30000, // 30 seconds
};
```

**Environment Variables:**
Create a `.env` file in the root directory:
```env
CLAUDE_API_KEY=your_claude_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
```

### AI Service Configuration

The `aiService.ts` handles API integrations. Configure your preferred AI providers and manage:
- API endpoints and authentication
- Request/response formatting
- Error handling and retries
- Rate limiting and timeouts

### Adding New Categories

To add a new category:

1. Update the `Category` type in `app/types/types.ts`
2. Add the new category to `CATEGORIES` in `app/lib/constants.ts`
3. Include appropriate icon, color, and description

## Styling

The app uses Tailwind CSS with a custom theme:

- **Font**: Inter font family
- **Color Scheme**: Supports both light and dark modes
- **Background**: Gradient from blue to indigo
- **Components**: Consistent spacing and modern design patterns

## Future Enhancements

### Planned Features
- [ ] Question history and favorites
- [ ] Advanced answer formatting and citations
- [ ] Multi-language support
- [ ] Answer comparison between AI providers
- [ ] User preferences and customization
- [ ] Question templates and suggestions
- [ ] Export functionality (PDF, markdown)
- [ ] Real-time collaboration features
- [ ] Answer rating and feedback system
- [ ] Dark/light mode toggle
- [ ] User authentication and profiles
- [ ] Question sharing functionality

### Technical Improvements
- [ ] Comprehensive test coverage (unit, integration, e2e)
- [ ] Performance monitoring and analytics
- [ ] Advanced caching strategies
- [ ] Offline functionality with service workers
- [ ] Set up CI/CD pipeline
- [ ] Bundle size optimization
- [ ] Progressive Web App features
- [ ] Enhanced error reporting and logging


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React Router](https://reactrouter.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and design inspiration from modern web design trends
- Inter font by [Google Fonts](https://fonts.google.com/)

---

**Built using React Router, Tailwind CSS, and AI APIs**