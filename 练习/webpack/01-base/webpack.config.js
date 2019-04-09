const path = require('path');
module.exports = {
	//指定打包环境
	mode:'development',
	// mode:'production',
	//指定入口
	//单入口写法一
	entry:{
		//chunk名称：文件路径
		main:'./src/index.js',
		about:'./src/about.js',
		contact:'./src/contact.js'
	},
	//单入口写法二
	//entry:'./src/index',
	//指定出口
	output:{
		//出口的文件名
		filename:'[name].[chunkhash].bundle.js',
		//出口的文件所在目录
		path:path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
			{
				//处理css文件
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			//处理图片
			{
				test:/\.(png|jpg|gif|jpeg)$/i,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:100000000
						}
					}
				]
			}
		]
	}
}