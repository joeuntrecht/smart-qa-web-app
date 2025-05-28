import type { Answer, Category } from "~/types/types";

// Mock responses for different categories
const MOCK_RESPONSES: Record<Category, string[]> = {
    'general': [
      "That's a great question! Based on current knowledge, here's what I can tell you...",
      "Let me break this down for you in a clear and helpful way...",
      "This is an interesting topic that many people ask about. Here's my perspective..."
    ],
    'real-estate': [
      "In the real estate market, several factors come into play. Location, market conditions, and timing are crucial...",
      "Real estate investment requires careful consideration of market trends, property values, and long-term potential...",
      "When it comes to property decisions, it's important to analyze both current market data and future projections..."
    ],
    'finance': [
      "From a financial perspective, this involves understanding risk management, diversification, and your investment timeline...",
      "Financial planning requires balancing growth potential with risk tolerance. Here's what you should consider...",
      "Smart money management involves creating a strategy that aligns with your goals and risk profile..."
    ],
    'career-advice': [
      "Career development is a journey that requires strategic thinking. Consider your long-term goals and skill development...",
      "In today's job market, adaptability and continuous learning are key. Here's my advice for your situation...",
      "Building a successful career involves networking, skill development, and strategic decision-making..."
    ],
    'technology': [
      "Technology is rapidly evolving, and staying current is important. Here's what you need to know about this topic...",
      "In the tech landscape, understanding both current trends and emerging technologies is crucial...",
      "This technology question touches on important concepts that are shaping our digital future..."
    ],
    'health': [
      "Health and wellness involve multiple factors including lifestyle, diet, exercise, and mental well-being...",
      "When it comes to health topics, it's always best to consult with healthcare professionals, but here's some general information...",
      "Maintaining good health requires a holistic approach considering various aspects of wellness..."
    ]
  };
  
  // Simulate API delay
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  
  export async function getAIAnswer(
    question: string, 
    category: Category
  ): Promise<Answer> {
    // Simulate API call delay
    await delay(2000 + Math.random() * 2000); // 2-4 seconds
    
    // Get random response for category
    const responses = MOCK_RESPONSES[category];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // Create a more detailed response based on the question
    const detailedResponse = `${randomResponse}
  
Regarding your specific question about "${question.slice(0, 50)}${question.length > 50 ? '...' : ''}", here are some key points to consider:
  
  • Understanding the context is important for making informed decisions
  • Consider multiple perspectives and available options
  • Research from reliable sources can provide additional insights
  • Professional advice may be beneficial for complex situations
  
This is a mock response for development purposes. In the production version, this would be powered by Claude or Perplexity AI to provide real, intelligent answers to your questions.`;
  
    return {
      id: crypto.randomUUID(),
      questionId: crypto.randomUUID(),
      text: detailedResponse,
      timestamp: new Date(),
      source: 'claude' // Mock source
    };
  }
  
  // Future: Real AI service integration
  export async function getClaudeAnswer(question: string, category: Category): Promise<Answer> {
    // TODO: Implement Claude API integration
    // This would use the Claude API to get real answers
    throw new Error('Claude API integration not yet implemented');
  }
  
  export async function getPerplexityAnswer(question: string, category: Category): Promise<Answer> {
    // TODO: Implement Perplexity API integration  
    // This would use the Perplexity API to get real answers
    throw new Error('Perplexity API integration not yet implemented');
  }