const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".jsx", ".js"],
    },
    plugins: [],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000,
        publicPath: "/",
        historyApiFallback: true,
    },
};
