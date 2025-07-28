/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "img.icons8.com", "images.pexels.com"],
    // Add the domain or IP address of the image source
  },
  eslint: {
    // Disables ESLint during build
    ignoreDuringBuilds: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
