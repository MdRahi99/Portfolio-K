/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['surl.li']
    }
}

module.exports = nextConfig
