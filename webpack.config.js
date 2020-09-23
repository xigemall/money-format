const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'format.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.tsx','js']
    }
}
