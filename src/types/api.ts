// Common API response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
}

// Error types
export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  statusCode: number;
}

// Team related types
export interface Team {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  position: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  createdAt: string;
  updatedAt: string;
}

// Service related types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Portfolio/Project related types
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

// Contact related types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSubmission extends ContactForm {
  id: string;
  status: 'pending' | 'read' | 'replied';
  createdAt: string;
}