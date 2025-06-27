import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  entry: "./public/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist"),
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // Ekstrak CSS ke file terpisah
          "css-loader", // Ubah CSS menjadi modul JS
          "postcss-loader", // Optimasi dengan PostCSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Copy dan minify HTML
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
  ],
};
