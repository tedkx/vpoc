const path = require('path'),
    webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            'ag-grid-root': __dirname + '/node_modules/ag-grid'
        }
    },
    stats: {
        colors: true,
        timings: true
    },
    entry: {
        'vendor': [
            path.resolve(path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css')),
            path.resolve(path.join(__dirname, 'node_modules/font-awesome/css/font-awesome.css')),
            path.resolve(path.join(__dirname, 'node_modules/simple-line-icons/css/simple-line-icons.css')),
            path.resolve(path.join(__dirname, 'node_modules/ag-grid/dist/styles/ag-grid.css'))
        ],
        'app': [
            './src/index',
            './src/static/css/theme.components.min.css',
            './src/static/css/theme.layout.min.css',
            './src/static/css/theme.darkblue.min.css',
            './src/static/css/ag-grid-theme.css',
            './src/static/css/app.css',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
        ]
    },

    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/dist/',
        sourceMapFilename: '[name].js.map',
        filename: '[name].js'
    },
    
    devtool: 'source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module: {
        loaders: [
            { 
                test: /\.js$/,
                include: /src/,
                //exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: [ 'react', 'es2015'] }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg|gif|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
        ]
    }
};