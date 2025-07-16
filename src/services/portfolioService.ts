import { apiClient } from '@/lib/api/config';
import { ApiResponse, PaginatedResponse, Project } from '@/types/api';

export const portfolioService = {
  // Get all projects with pagination
  getProjects: async (page: number = 1, pageSize: number = 10, category?: string): Promise<PaginatedResponse<Project>> => {
    const params = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
    
    if (category) {
      params.append('category', category);
    }

    const response = await apiClient.get<ApiResponse<PaginatedResponse<Project>>>(`/projects?${params}`);
    return response.data.data;
  },

  // Get featured projects
  getFeaturedProjects: async (): Promise<Project[]> => {
    const response = await apiClient.get<ApiResponse<Project[]>>('/projects/featured');
    return response.data.data;
  },

  // Get project by ID
  getProjectById: async (id: string): Promise<Project> => {
    const response = await apiClient.get<ApiResponse<Project>>(`/projects/${id}`);
    return response.data.data;
  },

  // Get projects by category
  getProjectsByCategory: async (category: string): Promise<Project[]> => {
    const response = await apiClient.get<ApiResponse<Project[]>>(`/projects/category/${category}`);
    return response.data.data;
  },

  // Create new project (admin only)
  createProject: async (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project> => {
    const response = await apiClient.post<ApiResponse<Project>>('/projects', project);
    return response.data.data;
  },

  // Update project (admin only)
  updateProject: async (id: string, project: Partial<Project>): Promise<Project> => {
    const response = await apiClient.put<ApiResponse<Project>>(`/projects/${id}`, project);
    return response.data.data;
  },

  // Delete project (admin only)
  deleteProject: async (id: string): Promise<void> => {
    await apiClient.delete(`/projects/${id}`);
  },
};