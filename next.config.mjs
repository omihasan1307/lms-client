/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/images/tours/**",
      },
      {
        protocol: "https",
        hostname: "**", // Allows all HTTPS sources
      },
    ],
  },
};

export default nextConfig;
