import type { CategoryInfo, Category } from "~/types/types";

export const CATEGORIES: Record<Category, CategoryInfo> = {
  general: {
    id: 'general',
    name: 'General',
    description: 'Ask anything you want to know',
    color: 'bg-gray-500',
    icon: '❓'
  },
  'real-estate': {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Property, investments, and market insights',
    color: 'bg-green-500',
    icon: '🏠'
  },
  finance: {
    id: 'finance',
    name: 'Finance',
    description: 'Money management, investing, and financial planning',
    color: 'bg-blue-500',
    icon: '💰'
  },
  'career-advice': {
    id: 'career-advice',
    name: 'Career Advice',
    description: 'Professional development and job guidance',
    color: 'bg-purple-500',
    icon: '💼'
  },
  technology: {
    id: 'technology',
    name: 'Technology',
    description: 'Tech trends, programming, and digital solutions',
    color: 'bg-indigo-500',
    icon: '💻'
  },
  health: {
    id: 'health',
    name: 'Health',
    description: 'Wellness, fitness, and health information',
    color: 'bg-red-500',
    icon: '🏥'
  }
};

export const APP_CONFIG = {
  name: 'Smart Q&A',
  description: 'Get intelligent answers powered by AI',
  maxQuestionLength: 500,
  apiTimeout: 30000, // 30 seconds
};