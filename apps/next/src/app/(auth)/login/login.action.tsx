import { unstable_noStore } from 'next/cache';
import { RequestOptions, http, utils } from '@/helpers';
import { cookies } from 'next/headers';

// Function to get session ID from cookies
function getSessionId() {
  return cookies().get(process.env.COOKIE_NAME || '');
}

// Function to make HTTP request
async function makeRequest<T>(url: string, options: RequestOptions) {
  // Ensure no store is used
  unstable_noStore();

  // Get session ID from cookies
  const sid = getSessionId();

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

// Function to perform signup action
export async function signupAction<T>(options: RequestOptions = {}) {
  // Construct the full URL
  const apiUrl = process.env.API_URL || '';
  const fullUrl = utils.stringifyUrl(`${apiUrl}/auth/signup`, options?.params);

  // Make HTTP request
  return makeRequest<T>(fullUrl, options);
}
