var webpack = require("webpack"),
    path = require("path"),
    fileSystem = require("fs"),
    env = require("./utils/env"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    WriteFilePlugin = require("write-file-webpack-plugin");

// load the secrets
var alias = {};

var secretsPath = path.join(__dirname, ("secrets." + env.NODE_ENV + ".js"));

if (fileSystem.existsSync(secretsPath)) {
    alias["secrets"] = secretsPath;
}

module.exports = {
    entry: {
        popup: path.join(__dirname, "src", "js", "popup.js"),
        options: path.join(__dirname, "src", "js", "options.js"),
        test: path.join(__dirname, "src", "test.js"),
        background: path.join(__dirname, "src", "js", "background.js")
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.vue/, loader: "vue-loader" },
            { test: /\.js$/, loader: "babel-loader", query:{ compact: false } },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    resolve: {
        alias: alias
    },
    plugins: [
        // expose and write the allowed env vars on the compiled bundle
        new webpack.DefinePlugin({ "process.env": JSON.stringify(env) }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "popup.html"),
            filename: "popup.html",
            chunks: ["popup"]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "options.html"),
            filename: "options.html",
            chunks: ["options"]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "background.html"),
            filename: "background.html",
            chunks: ["background"]
        }),
        new WriteFilePlugin()
    ]
};