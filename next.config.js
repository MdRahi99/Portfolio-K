/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        target: 'serverless', 
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['surl.li', 'i.ibb.co']
    }
}

module.exports = nextConfig
