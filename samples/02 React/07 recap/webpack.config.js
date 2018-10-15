const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {HotModuleReplacementPlugin} = require("webpack");

const cssLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[name]_[local]--[hash:base64:5]',
        camelCase: true,
    }
};

module.exports = {
    mode: "development",
    entry: './app/main.tsx',
    resolve: {
        extensions: [".tsx", ".ts", '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', //must be set, else, historyApiFallback does not work for nested route
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    "awesome-typescript-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    cssLoader,
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    cssLoader,
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        // new HotModuleReplacementPlugin(),
    ],
    devServer: {
        // hot: true,
        historyApiFallback: true,
    }
};
