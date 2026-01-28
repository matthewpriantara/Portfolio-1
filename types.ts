
export type ViewMode = 'terminal' | 'visual';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type?: 'text' | 'list' | 'info';
  timestamp: Date;
}

export interface PortfolioData {
  personalInfo: string;
  education: string[];
  skills: { title: string; description: string }[];
  organizationalExperience: { title: string; period: string; description: string }[];
  workExperience: { title: string; period: string; description: string }[];
  projectHighlights: { title: string; description: string; role: string; achievement?: string }[];
}
