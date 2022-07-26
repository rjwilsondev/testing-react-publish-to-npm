const path = require("path");

//https://webpack.js.org/configuration/
module.exports = (distRoot, optimize) => ({
  mode: "production",
  optimization: {
    minimize: !!optimize,
  },
  entry: {
    index: "./src/index.ts",
  },
  output: {
    path: distRoot,
    filename: optimize ? "sharprank-test.min.js" : "sharprank-test.js",
    library: {
        name: 'SharpRankTest',
        type: 'umd',
        umdNamedDefine: true,
      },
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            envName: `dist-${optimize ? "prod" : "dev"}`,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  externals: { 
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
  },
});
