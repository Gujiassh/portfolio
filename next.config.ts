import type { NextConfig } from "next";
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig: NextConfig = withNextIntl({
  eslint: {
    // 关闭构建时的 eslint 检查
    ignoreDuringBuilds: true,
  },

  typescript: {
    // 关闭构建时的类型检查
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:6000/:path*'
        }
      ]
    } else {
      return [
        {
          source: '/api/:path*',
          destination: 'https://my-blog-back-vemj.onrender.com/:path*'
        }
      ]
    }
  },

});

export default nextConfig;
