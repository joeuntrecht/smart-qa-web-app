# Smart Q&A Web App 🤖

An intelligent question-and-answer web application built with React Router, TypeScript, and Tailwind CSS. Get AI-powered answers across multiple categories with a clean, modern interface.

## Features

- **Multi-Category Support**: Ask questions across 6 specialized categories
- **Responsive Design**: Beautiful, mobile-first interface with Tailwind CSS
- **TypeScript**: Full type safety and enhanced developer experience
- **Modern React**: Built with React Router 7 and modern React patterns
- **AI Integration Ready**: Prepared for integration with Claude and Perplexity APIs

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
│   │   ├── CategorySelector.tsx    # Category selection component
│   │   └── Layout.tsx              # Main layout wrapper
│   ├── lib/
│   │   └── constants.ts           # App configuration and categories
│   ├── routes/
│   │   └── home.tsx              # Main home page route
│   ├── types/
│   │   └── types.ts              # TypeScript type definitions
│   ├── welcome/
│   │   ├── logo-dark.svg         # Dark theme logo
│   │   ├── logo-light.svg        # Light theme logo
│   │   └── welcome.tsx           # Welcome page component
│   └── app.css                   # Global styles and Tailwind imports
├── package.json
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

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Key Components

#### CategorySelector
Interactive category selection with visual feedback and hover effects. Each category has:
- Unique color scheme
- Descriptive icon
- Hover animations
- Selected state styling

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
- [ ] Question input form with validation
- [ ] AI API integration (Claude/Perplexity)
- [ ] Question history and favorites
- [ ] Real-time typing indicators
- [ ] Answer rating and feedback system
- [ ] Dark/light mode toggle
- [ ] User authentication
- [ ] Question sharing functionality

### Technical Improvements
- [ ] Add comprehensive error handling
- [ ] Implement loading states
- [ ] Add unit and integration tests
- [ ] Set up CI/CD pipeline
- [ ] Optimize bundle size
- [ ] Add Progressive Web App features


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React Router](https://reactrouter.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and design inspiration from modern web design trends
- Inter font by [Google Fonts](https://fonts.google.com/)

---

**Built with React Router, Tailwind CSS, and AI APIs**