import { apiClient } from '@/lib/api/config';
import { ApiResponse, ContactForm, ContactSubmission } from '@/types/api';

export const contactService = {
  // Submit contact form
  submitContact: async (contactData: ContactForm): Promise<ContactSubmission> => {
    const response = await apiClient.post<ApiResponse<ContactSubmission>>('/contact', contactData);
    return response.data.data;
  },

  // Get all contact submissions (admin only)
  getContactSubmissions: async (): Promise<ContactSubmission[]> => {
    const response = await apiClient.get<ApiResponse<ContactSubmission[]>>('/contact');
    return response.data.data;
  },

  // Get contact submission by ID (admin only)
  getContactSubmissionById: async (id: string): Promise<ContactSubmission> => {
    const response = await apiClient.get<ApiResponse<ContactSubmission>>(`/contact/${id}`);
    return response.data.data;
  },

  // Update contact submission status (admin only)
  updateContactStatus: async (id: string, status: 'pending' | 'read' | 'replied'): Promise<ContactSubmission> => {
    const response = await apiClient.patch<ApiResponse<ContactSubmission>>(`/contact/${id}/status`, { status });
    return response.data.data;
  },

  // Delete contact submission (admin only)
  deleteContactSubmission: async (id: string): Promise<void> => {
    await apiClient.delete(`/contact/${id}`);
  },
};