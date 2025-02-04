const createMDX = require("@next/mdx")

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  transpilePackages: ['next-mdx-remote'],
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)

//export default withMDX(nextConfig);

