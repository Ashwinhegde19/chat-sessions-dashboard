// src/types.d.ts
interface Message {
  id: number;
  action: 'USER' | 'AI';
  content: string;
  timestamp: string;
}

interface ChatSession {
  id: number;  // Changed from string to number
  name: string;
  message_count: number;  // Added this line
  messages: Message[];
}