// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
module.exports = {
  pages: {
    index: {
      entry: "examples/main.ts", // 入口
      template: "public/index.html", // 模板
      filename: "index.html", // 输出文件
    },
  },
  configureWebpack: (config) => {
    config.devServer = {
      disableHostCheck: true,
      port: 3000,
    };
  },
  // 扩展 webpack 配置
  // chainWebpack: (config) => {
  //   // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
  //   config.module
  //     .rule("js")
  //     .include.add(/packages/)
  //     .end()
  //     .include.add(/examples/)
  //     .end()
  //     .use("babel")
  //     .loader("babel-loader")
  //     .tap((options) => {
  //       // 修改它的选项...
  //       return options;
  //     });
  // },
};
