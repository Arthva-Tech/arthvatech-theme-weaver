import { apiClient } from '@/lib/api/config';
import { ApiResponse, PaginatedResponse, Team } from '@/types/api';

export const teamService = {
  // Get all team members
  getTeams: async (): Promise<Team[]> => {
    const response = await apiClient.get<ApiResponse<Team[]>>('/teams');
    return response.data.data;
  },

  // Get team member by ID
  getTeamById: async (id: string): Promise<Team> => {
    const response = await apiClient.get<ApiResponse<Team>>(`/teams/${id}`);
    return response.data.data;
  },

  // Create new team member (admin only)
  createTeam: async (team: Omit<Team, 'id' | 'createdAt' | 'updatedAt'>): Promise<Team> => {
    const response = await apiClient.post<ApiResponse<Team>>('/teams', team);
    return response.data.data;
  },

  // Update team member (admin only)
  updateTeam: async (id: string, team: Partial<Team>): Promise<Team> => {
    const response = await apiClient.put<ApiResponse<Team>>(`/teams/${id}`, team);
    return response.data.data;
  },

  // Delete team member (admin only)
  deleteTeam: async (id: string): Promise<void> => {
    await apiClient.delete(`/teams/${id}`);
  },
};