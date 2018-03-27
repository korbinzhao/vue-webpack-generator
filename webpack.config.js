const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
          options: {
            postcss: [
              require('autoprefixer')({
                browsers: ['last 2 versions']
              }),
              require('postcss-px2rem')({
                remUnit: 72
              }),
              require('postcss-cssnext')()
            ]

          }
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]

};

module.exports = config;
