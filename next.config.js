/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true, // ✅ Disable Image Optimization
    },
    eslint: {
        ignoreDuringBuilds: true, // ✅ Disable ESLint during build
    },
};

module.exports = nextConfig;
