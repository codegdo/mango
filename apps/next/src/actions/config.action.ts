'use server';

export async function getBaseUrl() {
  return process.env.BASE_URL;
}

export async function envAPI() {
  return {
    apiUrl: process.env.API_URL,
    apiHost: process.env.API_HOST,
    apiVersion: process.env.API_VERSION,
    apiPrefix: process.env.API_PREFIX
  }
}
