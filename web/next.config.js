const { withBlitz } = require("@blitzjs/next")
/**
* @type {import('@blitzjs/next').BlitzConfig}
* @type {import('next').NextConfig}
**/
module.exports = withBlitz(function(...args) {

  const finalConfig = {
    basePath: '',
    images: {
      remotePatterns: [
        { hostname: 'cdn.sanity.io' },
        { hostname: 'source.unsplash.com' },
      ],
      domains: ['cdn.sanity.io'],
      loader: 'custom',
      loaderFile: './integrations/sanity.loader.ts',
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    eslint: {
      dirs: ['app', 'config', 'db', 'lib', 'public', 'utils', 'src'],
    },

  };

  return withBlitz(finalConfig);
});
