const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	devServer: {
		port: 3000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.pug'
		})
	],
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: ['pug-loader']
			},

			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader',
						options: { sourceMap: true }
					},

					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sourceMapContents: false
						}
					}
				]
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				// include: SRC,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1000,
							mimetype: 'application/font-woff'
						}
					}
				]
			},
			{
				test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				// include: SRC,
				loader: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.pug', '.scss']
	}
};
module.exports = config;
