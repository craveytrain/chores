var webpack = require( 'webpack' );

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index'
    ],
    module: {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: [ 'react-hot', 'babel' ]
    } ]
    },
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    output: {
        path: __dirname + '/dest',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dest',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
  ]
};
