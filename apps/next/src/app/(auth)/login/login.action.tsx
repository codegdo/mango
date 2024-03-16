'use server';
import { RequestOptions, http, utils } from '@/helpers';
import { cookies } from 'next/headers';

export async function signupAction<T>(options: RequestOptions = {}) {
  const sid = cookies().get('mango.sid');
  console.log('ACTION CALL', options, sid);

  const fullUrl = utils.stringifyUrl(
    `${process.env.API_URL}/auth/signup`,
    options?.params
  );

  // Add the cookie to the request headers if available
  const headers = sid
    ? { ...options.headers, Cookie: `mango.sid=${sid}` }
    : options.headers;

  return http.request<T>(fullUrl, { ...options, headers });
}
