import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['zh-CN', 'en-US'],
    defaultLocale: 'zh-CN',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
};

export default nextConfig;
