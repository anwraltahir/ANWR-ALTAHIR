import { LucideIcon } from 'lucide-react';

export type UserType = 'individual' | 'company';

export interface InfoCardData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'fraud' | 'privacy' | 'network' | 'general';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}