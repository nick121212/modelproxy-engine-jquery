var webpack = require('webpack');

module.exports = {
    context: __dirname + '/',
    cache: true,
    target: "node",
    entry: {
        'index': __dirname + '/src/index.ts'
    },
    // sourcemap: "none",
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    node: {
        "child_process": "empty"
    },
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        extensions: ['', '.ts'],
        root: __dirname + "/node_modules/",
        alias: {
            'modelproxy': 'modelproxy/dist/web.js'
        }
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    },
    externals: {
        "modelproxy": "modelProxy"
    },
    plugins: [
        new webpack.ProvidePlugin({
            modelProxy: "modelProxy"
        })
    ]
};