const path = require("path");

module.exports = {
    entry: "./src/Carousel.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        libraryTarget: 'umd',
        libraryExport: 'default'
    }
};