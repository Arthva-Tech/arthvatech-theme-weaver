// Export all services for easy importing
export * from './teamService';
export * from './serviceService';
export * from './portfolioService';
export * from './contactService';

// Re-export API config and types
export { apiClient, API_BASE_URL } from '@/lib/api/config';
export type * from '@/types/api';
export { handleApiError } from '@/lib/api/errorHandler';
export { useApi, useMutation } from '@/hooks/useApi';