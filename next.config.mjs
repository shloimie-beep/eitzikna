/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/eitzikna',
  assetPrefix: '/eitzikna/',
};

export default nextConfig;
