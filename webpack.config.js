const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackDashboard = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

module.exports = {

    entry:{
        main: "./src/configurations/index.js"
    },

    output:{
        path: path.join(__dirname,"./dist"),
        publicPath: "",
        filename: "bundle.js"
    },

    devServer:{
        port:1818
    },

    module:{
        rules:[
            {test:/\.jsx?$/, exclude:/node_modules/, use:[{loader: "babel-loader", options:{presets:["env","react"]}}]},
            {test:/\.css$/, use:[{loader:"style-loader"}, {loader:"css-loader"}]},
            {test:/\.scss$/, use:[{loader:"style-loader"},{loader:"css-loader"},{loader:"sass-loader"}]},
            {test:/\.(png|jpg|gif|svg)$/, use:[{loader:"file-loader"}]}
        ]
    },

    plugins:[
        new webpackDashboard(),
        new BundleAnalyzerPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new DuplicatePackageCheckerPlugin(),
        new HtmlWebpackPlugin({filename: "index.html", template: "./src/assets/index.html"})
    ]
};