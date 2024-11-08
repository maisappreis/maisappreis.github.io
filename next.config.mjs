/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  }


// module.exports = nextConfig
export default nextConfig;


// const nextConfig = {};
// export default nextConfig;



