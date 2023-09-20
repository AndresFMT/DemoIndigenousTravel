/**
 * @type {import('next').NextConfig}
**/
module.exports = {
  basePath: '',
  images: {
    domains: ['cdn.sanity.io'],
    deviceSizes: [640, 1080, 1920, 2048, 3840],
    loader: 'custom',
    loaderFile: './integrations/sanity.image.ts',
  },
  eslint: {
    dirs: ['app', 'config', 'db', 'lib', 'public', 'utils', 'src'],
  },
};
