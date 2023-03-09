const { withBlitz } = require("@blitzjs/next")
/**
* @type {import('@blitzjs/next').BlitzConfig}
**/
module.exports = withBlitz(function(...args) {

  const finalConfig = {
    images: {
      domains: ['cdn.sanity.io'],
      loader: 'custom'
    },
    eslint: {
      dirs: ['app', 'config', 'db', 'lib', 'public', 'utils', 'src'],
    },
  };

  return withBlitz(finalConfig);
});
