// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  env: {
    DEV_API: 'http://localhost:3000',
    PRODUCTION_API: 'http://your-production',
  },
  eslint: {
    dirs: ['app', 'config', 'db', 'lib', 'public', 'utils', 'src'],
  },
}

module.exports = withBlitz(config)
