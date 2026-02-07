export interface BloodTest {
  id: string;
  name: string;
  description: string;
  benefits?: {
    en: string;
    hi: string;
    ta: string;
    te: string;
    kn: string;
    mr: string;
    bn: string;
    gu: string;
  };
  price: number;
  originalPrice?: number;
  duration: string;
  parameters?: number;
  category: string;
  popular?: boolean;
}

export interface TestCategory {
  id: string;
  name: string;
  icon: string;
}

export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: string;
  showTests?: BloodTest[];
  showQuickReplies?: string[];
}

export type ConversationStep =
  | 'language'
  | 'welcome'
  | 'category'
  | 'tests'
  | 'appointment'
  | 'location'
  | 'mobile'
  | 'confirmation';
