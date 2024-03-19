'use server'
import { RequestOptions, utils } from '@/helpers';
import { makeRequest } from '@/services';
import { unstable_noStore } from 'next/cache';

// Function to perform signup action
export async function signupAction<T>(options: RequestOptions = {}) {
  // Ensure no store is used
  unstable_noStore();

  // Construct the full URL
  const apiUrl = process.env.API_URL || '';
  const fullUrl = utils.stringifyUrl(`${apiUrl}/auth/signup`, options?.params);

  // Make HTTP request
  return makeRequest<T>(fullUrl, options);
}
