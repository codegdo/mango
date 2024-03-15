'use server';
import { RequestOptions, http, utils } from '@/helpers';

export async function signupAction<T>(url: string, options: RequestOptions = {}) {
  console.log('ACTION CALL', options);

  const baseUrl = options?.baseUrl || process.env.API_URL;
  const path = url;

  if (!baseUrl || !path) {
    throw new Error('baseUrl and path must be provided and cannot be null, undefined, or an empty string.');
  }

  const fullUrl = utils.stringifyUrl(`${baseUrl}${path}`, options?.params);

  return http.request<T>(fullUrl, options);
}
