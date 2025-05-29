import Anthropic from '@anthropic-ai/sdk';
import type { Answer, Category } from "~/types/types";

// Initialize Anthropic client
const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true // Required for client-side usage
  });
  
  // Category-specific system prompts for better responses
  const CATEGORY_PROMPTS: Record<Category, string> = {
    'general': 'You are a helpful AI assistant. Provide clear, accurate, and comprehensive answers to general questions.',
    'real-estate': 'You are a knowledgeable real estate expert. Provide insights on property markets, investment strategies, buying/selling tips, and market trends. Always remind users to consult with licensed professionals for specific transactions.',
    'finance': 'You are a financial advisor AI. Provide guidance on personal finance, investing, budgeting, and financial planning. Always include disclaimers about consulting with licensed financial professionals for personalized advice.',
    'career-advice': 'You are a career counselor and professional development expert. Provide guidance on job searching, career transitions, skill development, workplace issues, and professional growth strategies.',
    'technology': 'You are a technology expert. Provide information about current tech trends, programming concepts, software recommendations, and digital solutions. Keep explanations accessible to different technical skill levels.',
    'health': 'You are a health information assistant. Provide general wellness information, but always emphasize that your advice should not replace professional medical consultation. Include disclaimers about seeking professional medical help for health concerns.'
  };
  
  // Real Claude API integration
  export async function getAIAnswer(
    question: string, 
    category: Category
  ): Promise<Answer> {
    // Check if API key is available
    if (!import.meta.env.VITE_ANTHROPIC_API_KEY) {
      console.warn('No API key found, falling back to mock response');
      return getMockAnswer(question, category);
    }
  
    try {
      const systemPrompt = CATEGORY_PROMPTS[category];
      
      const response = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022', // Updated to latest model
        max_tokens: 1000,
        temperature: 0.7,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: question
          }
        ]
      });
  
      // Properly type-guard and extract text from Claude's response
      const answerText = response.content
        .filter((block): block is Anthropic.TextBlock => block.type === 'text')
        .map(block => block.text)
        .join('\n');
  
      return {
        id: crypto.randomUUID(),
        questionId: crypto.randomUUID(),
        text: answerText,
        timestamp: new Date(),
        source: 'claude'
      };
  
    } catch (error) {
      console.error('Claude API error:', error);
      
      // Fallback to mock response on error
      console.warn('Falling back to mock response due to API error');
      return getMockAnswer(question, category);
    }
  }
  
  // Keep mock responses as fallback
  async function getMockAnswer(question: string, category: Category): Promise<Answer> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockResponses = {
      'general': "This is a mock response. To get real AI answers, add your Claude API key to the .env file.",
      'real-estate': "Mock real estate advice. Add your Claude API key to get expert real estate insights.",
      'finance': "Mock financial guidance. Add your Claude API key to get personalized financial advice.",
      'career-advice': "Mock career advice. Add your Claude API key to get professional career guidance.",
      'technology': "Mock tech information. Add your Claude API key to get current technology insights.",
      'health': "Mock health information. Add your Claude API key to get comprehensive health guidance."
    };
  
    return {
      id: crypto.randomUUID(),
      questionId: crypto.randomUUID(),
      text: `${mockResponses[category]}\n\nYour question: "${question}"\n\nTo enable real Claude AI responses:\n1. Get an API key from https://console.anthropic.com/\n2. Add VITE_ANTHROPIC_API_KEY=your_key to your .env file\n3. Restart your development server`,
      timestamp: new Date(),
      source: 'claude'
    };
  }
  
  // Alternative: Direct Claude API call (for future use)
  export async function getClaudeAnswer(question: string, category: Category): Promise<Answer> {
    if (!import.meta.env.VITE_ANTHROPIC_API_KEY) {
      throw new Error('Claude API key not configured');
    }
  
    const systemPrompt = CATEGORY_PROMPTS[category];
    
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022', // Updated to latest model
      max_tokens: 1000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: question
        }
      ]
    });
  
    // Properly type-guard and extract text from Claude's response
    const answerText = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map(block => block.text)
      .join('\n');
  
    return {
      id: crypto.randomUUID(),
      questionId: crypto.randomUUID(),
      text: answerText,
      timestamp: new Date(),
      source: 'claude'
    };
  }
  
  export async function getPerplexityAnswer(question: string, category: Category): Promise<Answer> {
    // TODO: Implement Perplexity API integration  
    // This would use the Perplexity API to get real answers
    throw new Error('Perplexity API integration not yet implemented');
  }