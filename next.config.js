/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv");
const nextConfig = {
  reactStrictMode: true,
};

(module.exports = nextConfig),
  {
    webpack(config) {
      config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
      return config;
    },
  };
