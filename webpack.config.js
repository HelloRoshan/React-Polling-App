const path = require('path');

module.exports = {
    entry: './app-client.js',
    // file created after pre processing
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules | app-server.js)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            }
        ]
    }
}