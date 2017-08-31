let path=require('path');
let htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve('build'),
        filename:'build.js',
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
            },
            {
            test:/\.css$/,
            loaders:["style-loader","css-loader"]
            },
            {
                test:/\.less$/,
                loaders:["style-loader","css-loader","less-loader"]
            },
           {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader'
            }

        ]
    },
    devtool:"source-map",
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};
