
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

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: string;
  duration: string;
  tools: string[];
  results: string[];
  overview: string;
  gallery: string[];
}
