const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode:"development",
    entry : "./src/index.tsx",
    output: {
        path : path.resolve(__dirname,'dist'),
        filename: "[name].[hash].js"
    },
    plugins:[
        new HTMLWebpackPlugin({template:'./src/index.html'}),
        new MiniCssExtractPlugin({ filename: 'style.css'}),
        new CleanWebpackPlugin(),
        
    ],
    module:{
        rules:[
            {
                test:/\.tsx$/,
                exclude:/node_modules/,
                use:['babel-loader','ts-loader']
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
     resolve: {
        extensions: [".tsx", ".ts", ".js"],
      }
}

