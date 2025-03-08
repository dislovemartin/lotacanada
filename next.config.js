/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    // Enable static exports for better performance on Vercel
    output: 'standalone',
}

module.exports = nextConfig 