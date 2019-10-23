const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

//const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // плагин минимизации
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
   // context: __dirname + '/app',
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts',
   //   'vendor': ['angular']
      },
   output:{
       path: path.resolve(__dirname, 'dist'),     // путь к каталогу выходных файлов - папка public
       publicPath: '',
       filename: '[name].[hash].js'
   },
   devServer: {
    historyApiFallback: true,
  },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
       rules:[   //загрузчик для ts
           {
               test: /\.ts$/, // определяем тип файлов
               use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                  } ,
                   'angular2-template-loader'
               ]
            }, {
              test: /\.html$/,
              loader: 'html-loader'
            },{
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[hash].[ext]'
          }, {
            test: /\.css$/,
           use: ['to-string-loader', 'css-loader'],
          },{
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: [
                'file-loader',
            ],
          
          },
       ]
   },
   
   plugins: [
     new CopyPlugin ([
       {from: "src/assets", to: "assets"}
     ]),
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'), // каталог с исходными файлами
      {} // карта маршрутов
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    //new UglifyJSPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
}