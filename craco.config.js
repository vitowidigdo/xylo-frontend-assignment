const webpack = require("webpack");

module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss")("./src/tailwind.config.js"),
        require("autoprefixer"),
      ],
    },
  },
  webpack: {
    plugins: {
      add: [
        new webpack.DefinePlugin({
          process: { env: {} },
        }),
      ],
    },
  },
};
