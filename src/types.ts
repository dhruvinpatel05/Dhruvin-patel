/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MockupPresentation {
  type: 'packaging' | 'identity' | 'poster' | 'digital' | 'stationery' | 'app' | 'editorial';
  palette: string[]; // Hex codes or descriptive colors
  typography: string[]; // Font families used
  details: string[]; // Specific mockup components (e.g. "Matte finish bottle", "Embossed business cards")
}

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  category: string;
  year: string;
  image: string;
  creativeProcess: string[];
  mockupPresentation: MockupPresentation;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  year: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  palette: string[];
  typography: string[];
  mockups: {
    title: string;
    description: string;
    image: string;
    type: 'hero' | 'grid' | 'wide' | 'isometric';
  }[];
  process: {
    phase: string;
    title: string;
    description: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string; // Lucide icon name
  accentColor: 'purple' | 'blue' | 'pink';
}

export interface Skill {
  name: string;
  category: 'Software' | 'Core' | 'Creative';
  level: number; // Percentage (0-100)
  iconName?: string;
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}
