const path = require('path');

module.exports = {
    mode: 'development',

    // the entry file for the bundle
    entry: './client/src/app.jsx',

    // the bundle file we will get in the result
    output: {
        path: __dirname + '/client/dist/js',
        filename: 'app.js',        
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: ['/node_modules'],
                use: [{
                    loader: 'babel-loader',            
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    },
                }],
            }
        ]
    },

    // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
    watch: true
};