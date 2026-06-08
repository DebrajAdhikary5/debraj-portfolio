export interface Skill {
  name: string;
  category: 'Programming' | 'Analytics & Visualization' | 'Other Tools';
  level: 'Advanced' | 'Intermediate' | 'Beginner';
  yearsOfExp?: string;
  iconName: string; // Name of Lucide icon to render dynamically
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tools: string[];
  keyInsights: string[];
  githubUrl: string;
  liveUrl?: string;
  imageSrc: string;
  featured: boolean;
}

export interface Dashboard {
  id: string;
  title: string;
  platform: 'Power BI' | 'Tableau';
  description: string;
  comingSoon: boolean;
  imageSrc: string;
  kpis?: string[];
  embedUrl?: string; // Optional actual embed URL or dashboard details link
  toolsUsed: string[];
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  credentialUrl?: string;
  previewUrl?: string;
  isUpcoming: boolean;
  imageSrc: string;
}
