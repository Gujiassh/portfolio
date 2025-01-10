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
});

export default nextConfig;
