var config = require("./webpack.config.js");

config.entry = "./index.ghp.tsx";

config.output = {
    filename: "bundle.js"
};

module.exports = config;
