// @ts-nocheck
module.exports = function(...args) {

 const finalConfig = {
    images: {
      domains: ['cdn.sanity.io'],
      loader: 'custom'
    }
  };
  const target = { target: 'experimental-serverless-trace' };

  Object.assign(finalConfig, target);

  return finalConfig;
}
