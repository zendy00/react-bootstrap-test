var webpack = require('webpack');

var sbAdminBowerPath = __dirname + '/node_modules/startbootstrap-sb-admin-2/bower_components/';
var bootstrapLessPath = __dirname + '/node_modules/startbootstrap-sb-admin-2/bower_components/bootstrap/less';
var sbAdminLessPath = __dirname + '/node_modules/startbootstrap-sb-admin-2/less';
var timeLineCssPath = __dirname + '/node_modules/startbootstrap-sb-admin-2/dist/css';
var fontAwesomeLessPath = __dirname + '/node_modules/font-awesome/less';

module.exports = {
  debug: true,
  devtool: "#eval-source-map",
  entry : "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loaders: ["file-loader"] },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      }
    ]
  },
  // Automatically transform files with these extensions
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules', bootstrapLessPath, sbAdminLessPath, fontAwesomeLessPath, timeLineCssPath, sbAdminBowerPath]
  },

}
