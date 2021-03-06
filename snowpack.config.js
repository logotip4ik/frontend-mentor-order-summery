// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    src: '/',
    dist: '/',
  },
  plugins: ['@snowpack/plugin-sass'],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    baseUrl: 'frontend-mentor-order-summery',
  },
};
