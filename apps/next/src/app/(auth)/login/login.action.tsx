'use server';
import { RequestOptions, http, utils } from '@/helpers';
import { cookies } from 'next/headers';

export async function signupAction<T>(options: RequestOptions = {}) {
  const sid = cookies().get(`${process.env.COOKIE_NAME}`);
  console.log('ACTION CALL', options, sid);

  const fullUrl = utils.stringifyUrl(
    `${process.env.API_URL}/auth/signup`,
    options?.params
  );

  // Add the cookie to the request headers if available
  const headers = sid
    ? {
      ...options.headers,
      Cookie: `${sid.name}=${sid.value}`,
    }
    : options.headers;

  console.log(headers);

  return http.request<T>(fullUrl, { ...options, headers });
}
