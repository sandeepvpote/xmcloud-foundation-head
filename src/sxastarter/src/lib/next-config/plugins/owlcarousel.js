/**
 * @param {import('next').NextConfig} nextConfig
 */
const owlcarouselPlugin = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.plugins.push(
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
     }));

      return config;
    },
  });
};

module.exports = owlcarouselPlugin;
