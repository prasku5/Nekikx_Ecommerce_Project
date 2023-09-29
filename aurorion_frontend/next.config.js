/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  routes: [
    {
      path: '/signup',
      path: '/login',
    }
  ] // added comma here
};

module.exports = nextConfig;
