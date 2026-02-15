
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Review {
  name: string;
  role: string;
  content: string;
  platform: string;
  rating: number;
}
