/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['assets.coingecko.com', 'free-images.com'],
    },
    i18n: {
        locales: ['pt', 'en'],
        defaultLocale: 'pt',
    },
    swcMinify: true,
};

module.exports = nextConfig;
