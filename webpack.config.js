const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin/dist/clean-webpack-plugin');

const __DEV__ = process.env.NODE_ENV === 'development';
const filename = __DEV__ ? 'hbh.js' : 'hbh.min.js';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'components/index.ts'),
  output: {
    filename,
    path: path.resolve(__dirname, 'dist'),
    library: 'hbh',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist'],
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: 'hbh.map',
    }),
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
};
