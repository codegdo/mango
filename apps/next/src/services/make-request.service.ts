import { RequestOptions, http } from '@/helpers';
import { getSessionId } from '@/utils';

// Function to make HTTP request
export async function makeRequest<T>(url: string, options: RequestOptions) {

  // Get session ID from cookies
  const sid = await getSessionId();

  // Prepare headers
  const headers = sid
    ? {
      ...(options.headers || {}),
      Cookie: `${sid.name}=${sid.value}`,
    }
    : options.headers;

  // Make HTTP request
  return http.request<T>(url, { ...options, headers });
}