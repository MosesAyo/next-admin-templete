const path = require('path');
const webpack = require("webpack");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;



module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports ={ 
  webpack(config, options) {
  config.module.rules.push({
    test: /\.(eot|ttf|woff|woff2)$/,
    use: {
      loader: "url-loader",
    },
  });
  config.resolve.modules.push(path.resolve("./"));
  return config;
}};
