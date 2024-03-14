'use server';

export async function getBaseUrl() {
  return process.env.BASE_URL;
}

export async function getApiUrl() {
  return process.env.API_URL;
}
