import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"],
  },
  // matcher: ["/admin/dashboard/:path*"],
};

export default nextConfig;
