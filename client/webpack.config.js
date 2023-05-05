const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // 指定入口文件
    // 这里我们在src文件夹下创建一个index.ts
    entry: "./src/index.ts",
    // 指定输出文件名
    output: {
        filename: "main.js"
    },
    resolve: {
        // 自动解析一下拓展，当我们要引入src/index.ts的时候，只需要写src/index即可
        extensions: [".tsx",".ts",".js"]
    },
    module: {
        // 配置以.ts/.tsx结尾的文件都用ts-loader解析
        // 这里我们需要用到ts-loader,所以要安装一下
        rules: [
            {
                test: /\.tsx?$/,
                use:"ts-loader",
                exclude: /nodemodules/
            }
        ]
    },
    // 指定编译后是否生成source-map，这里判断如果是生产打包环境则不生产source-map
    devtool: process.env.NODEENV === "production" ? false : "inline-source-map",
    // 这里使用webpack-dev-server,进行本地开发调试
    devServer: {
        static:"./dist",
        compress: false,
        host:"localhost",
        port: 8099
    },
    // 这里用到两个插件
    plugins: [
        // 这里在编译之前先删除dist文件夹
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["./dist"]
        }),
        // 这里我们指定编译需要模板，模板文件是./src/template/index.html
        new HtmlWebpackPlugin({
            template: "./src/template/index.html"
        })
    ]
};