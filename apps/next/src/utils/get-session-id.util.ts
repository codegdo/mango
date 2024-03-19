'use server'
import { cookies } from 'next/headers';

// Function to get session ID from cookies
export async function getSessionId(cookieName?: string) {
  return cookies().get(cookieName || process.env.COOKIE_NAME || '');
}