var config = require("./webpack.config.js");

config.externals = {
    "react": {
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
        root: "React"
    },
    "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "react-dom",
        root: "ReactDOM"
    }
};

config.entry = "./index.ts";

config.output = {
    filename: "index.js",
    libraryTarget: "umd"
};

module.exports = config;
