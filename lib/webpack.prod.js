const merge = require('webpack-merge');
const cssnano = require('cssnano');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  plugins: [
    new OptimizeCssAssetWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://cdn.bootcdn.net/ajax/libs/react/16.13.1/cjs/react.production.min.js',
          global: 'React',
        },
        {
          module: 'react-dom',
          entry: 'https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/cjs/react-dom.production.min.js',
          global: 'ReactDOM',
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      // chunks: 'async',
      minSize: 0,
      // maxSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      // 分离基础库
      // cacheGroups: {
      //   commons: {
      //     test: /(react|react-dom)/,
      //     name: 'vendors',
      //     chunks: 'all'
      //   },
      // },
      // 分离公共业务代码
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
        // vendors: {
        //     test: /(react|react-dom)/,
        //     name: 'vendors',
        //     chunks: 'all',
        // },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true
        // }
      },
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
