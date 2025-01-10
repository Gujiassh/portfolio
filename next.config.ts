import type { NextConfig } from "next";
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig: NextConfig = withNextIntl({
  /* config options here */


});

export default nextConfig;
