/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.tvmaze.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;

// static.tvmaze.com
