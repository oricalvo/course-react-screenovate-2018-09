const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const cssLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
    }
};

const tsLoader = {
    loader: "awesome-typescript-loader",
    options: {
        configFileName: "tsconfig.prod.json"
    }
}

module.exports = {
    mode: "production",
    entry: './app/main.tsx',
    resolve: {
        extensions: [".tsx", ".ts", '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    tsLoader
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
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({
            extractComments: true
        })]
    }
};
