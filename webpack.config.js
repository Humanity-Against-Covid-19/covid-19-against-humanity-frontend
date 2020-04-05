/* eslint-disable @typescript-eslint/no-var-requires */

const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = () => ({
    entry: ['whatwg-fetch', 'babel-polyfill', './src/index.tsx'],
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist`,
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.less'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                options: {
                    useBabel: true,
                    babelOptions: {
                        babelrc: false,
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                            ['@babel/preset-env', {
                                targets: '>0.2%, not dead, not ie <= 11, not op_mini all',
                                modules: false,
                            }],
                        ],
                    },
                    babelCore: '@babel/core',
                },
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    esModule: false,
                },
            },
        ],
    },

    optimization: {
        minimizer: devMode ? [] : [
            new TerserJSPlugin(),
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
    ],
});
