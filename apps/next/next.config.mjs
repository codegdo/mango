/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    API_URL: 'http://localhost:5000/api/v1',
    COOKIE_NAME: 'mango.sid',
    TOKEN_NAME: 'mango.access_token',
  },
  async rewrites() {
    return [
      // {
      //   source: '/api/:path*',
      //   destination: 'http://127.0.0.1:8000/api/:path*',
      // },
    ];
  },
};

export default nextConfig;
