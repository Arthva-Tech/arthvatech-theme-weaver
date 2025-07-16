import { apiClient } from '@/lib/api/config';
import { ApiResponse, Service } from '@/types/api';

export const serviceService = {
  // Get all services
  getServices: async (): Promise<Service[]> => {
    const response = await apiClient.get<ApiResponse<Service[]>>('/services');
    return response.data.data;
  },

  // Get service by ID
  getServiceById: async (id: string): Promise<Service> => {
    const response = await apiClient.get<ApiResponse<Service>>(`/services/${id}`);
    return response.data.data;
  },

  // Get active services only
  getActiveServices: async (): Promise<Service[]> => {
    const response = await apiClient.get<ApiResponse<Service[]>>('/services/active');
    return response.data.data;
  },

  // Create new service (admin only)
  createService: async (service: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>): Promise<Service> => {
    const response = await apiClient.post<ApiResponse<Service>>('/services', service);
    return response.data.data;
  },

  // Update service (admin only)
  updateService: async (id: string, service: Partial<Service>): Promise<Service> => {
    const response = await apiClient.put<ApiResponse<Service>>(`/services/${id}`, service);
    return response.data.data;
  },

  // Delete service (admin only)
  deleteService: async (id: string): Promise<void> => {
    await apiClient.delete(`/services/${id}`);
  },
};