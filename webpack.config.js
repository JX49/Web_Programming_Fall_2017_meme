const path = require('path');


module.exports = {
    entry: './jquery_mockup/src/nav.js',
    output: {
        filemname: 'bundle.js',
        path: path.resolve(_dirname, 'jquery_mockup/dist')
    },
        
        module: {
            rules: [{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }]
        }
    
};