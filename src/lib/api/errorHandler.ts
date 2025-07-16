import { ApiError } from '@/types/api';
import { toast } from '@/hooks/use-toast';

export const handleApiError = (error: ApiError, showToast: boolean = true) => {
  let errorMessage = error.message;

  // Handle validation errors
  if (error.errors && Object.keys(error.errors).length > 0) {
    const validationErrors = Object.values(error.errors).flat();
    errorMessage = validationErrors.join(', ');
  }

  // Handle specific status codes
  switch (error.statusCode) {
    case 400:
      errorMessage = `Bad Request: ${errorMessage}`;
      break;
    case 401:
      errorMessage = 'Unauthorized. Please log in again.';
      break;
    case 403:
      errorMessage = 'You do not have permission to perform this action.';
      break;
    case 404:
      errorMessage = 'The requested resource was not found.';
      break;
    case 500:
      errorMessage = 'Internal server error. Please try again later.';
      break;
    case 503:
      errorMessage = 'Service unavailable. Please try again later.';
      break;
    default:
      errorMessage = errorMessage || 'An unexpected error occurred.';
  }

  if (showToast) {
    toast({
      title: "Error",
      description: errorMessage,
      variant: "destructive",
    });
  }

  console.error('API Error:', error);
  return errorMessage;
};