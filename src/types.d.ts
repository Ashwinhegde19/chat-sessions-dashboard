// src/types.d.ts
interface Message {
    id: number;
    action: 'USER' | 'AI';
    content: string;
    timestamp: string;
  }
  
  interface ChatSession {
    id: number;
    name: string;
    messages: Message[];
    message_count: number;
  }
  