'use server';
import { http } from '@/helpers';

export async function loginAction<T>(options: RequestInit = {}) {
  console.log('ACTION CALL', options);
  const baseUrl = process.env.BASE_URL;

  return http.request<T>(`${baseUrl}/todos/1`);
}
