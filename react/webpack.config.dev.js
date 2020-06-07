// 导入html-webpack-plugin 运行 public/index.html 并且里面导入打包好的js文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 这里面配置的都是webpack的核心概念
  // https://webpack.docschina.org/concepts/
  mode: "development", // 不压缩打包出来的js文件
  entry: "./src/index.js", // 指定webpack打包的入口文件
  // 开发阶段，不需要配置出口，因为开发阶段，我们会借助一个包 webpack-dev-server 开启一个web服务，localhost:8080
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/, // 排除第三方包的转换
        use: {
          loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-react"]
        //   }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff)$/,
        use: [
          { loader: "url-loader" }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  // 插件 https://webpack.docschina.org/concepts/#%E6%8F%92%E4%BB%B6-plugin-
  // 所有的插件，都是通过new出来的
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
}
