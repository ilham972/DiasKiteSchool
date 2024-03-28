/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ajmrbhqvrlvegajrmqvy.supabase.co",
        // Optionally, you can also specify a pathname to match specific patterns on the domain
        // pathname: '/path/to/images/*',
      },
    ],
  },
  // any other configurations you might have
};

export default nextConfig;
