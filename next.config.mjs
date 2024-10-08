/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'seikowatchesbucket.s3.ap-southeast-2.amazonaws.com',
      'seikoshopbucket.s3.ap-southeast-2.amazonaws.com'
    ],
  },
};

export default nextConfig;