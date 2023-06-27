const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "static/index.html",
        filename: '../dist/index.html'
    })],
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    resolve: {
        fallback: {"os": require.resolve("os-browserify/browser"), "path": require.resolve("path-browserify")},
        extensions: ['.ts', '.js', '.json', ".tsx"]
    },

}
