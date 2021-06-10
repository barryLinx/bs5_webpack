const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// let mode = "development";
// if (process.env.NODE_ENV === "production") {
//   mode = "production";
// }

module.exports = {
  mode: process.env.NODE_ENV,
  //context:path.resolve(__dirname,'src'), // 可以省略 src
  entry: {
    app:'./src/app.js'
    //app:'./app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    // filename: 'js/[name].[hash:8].js',
    // filename: 'js/[name].[hash:16].js',
    // filename: 'js/[name].js?[hash:8]',
  },

  optimization:{
    splitChunks:{
      cacheGroups:{
        vendor:{
          test:/node_modules/,
          name:'vendor',
          chunks:'initial',
          enforce:true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          //MiniCssExtractPlugin.loader,
          {
          // inject CSS to page
          loader: 'style-loader'
            }
        , {
          // translates CSS into CommonJS modules
          loader: 'css-loader'
        }, {
          // Run postcss actions
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` is needed for postcss 8.x;
            // if you use postcss 7.x skip the key
            postcssOptions: {
              // postcss plugins, can be exported to postcss.config.js
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        }, {
          // compiles Sass to CSS
          loader: 'sass-loader'
        }]
      },
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options:{
      //         name:'[path][name].[ext]',
      //       }
      //     },
         
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //         },
      //         // optipng.enabled: false will disable optipng
      //         optipng: {
      //           enabled: false,
      //         },
      //         pngquant: {
      //           quality: [0.65, 0.90],
      //           speed: 4
      //         },
      //         gifsicle: {
      //           interlaced: false,
      //         },
              
      //       }
      //     },
      //   ],
      // }

    ],

  },
  plugins: [
    // new MiniCssExtractPlugin(
    //  //{ filename: '[name].css'}
    // ),
    new HtmlWebpackPlugin({
        title:'bootstrap_5 webpack_5',
        template: './src/index.html',
        filename: 'main.html',
        chunks:['vendor','app']
    }),
  ],
  devtool: "source-map",
  devServer: {
    compress:true,
    contentBase: "./dist",
    port:3030,
    // stats:{
    //   assets:true,
    //   cached:false,
    //   chunkModules:false,
    //   chunkOrigins:false,
    //   chunks:false,
    //   colors:true,
    //   hash:true,
    //   modules:false
    // },
  
    // proxy:{
    //   '/VsWeb/api':{
    //    target: 'https://www.vscinemas.com.tw',
    //    changeOrigin:true
    //   }

    // }
  }
}