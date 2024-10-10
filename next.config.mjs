/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    unoptimized: true,
    remotePatterns:[
      {
        protocol: "https",
        hostname: "i.gyazo.com",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ]
  }
};

export default nextConfig;
