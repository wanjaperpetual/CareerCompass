import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    allowedDevOrigins: [
      'https://*.google.com',
      'https://*.cloud.google.com',
      'https://*.firebase.google.com',
      'https://*.cloud.goog',
      'https://*.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
