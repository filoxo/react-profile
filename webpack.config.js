module.exports = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	scripts:{
		start: 'webpack-dev-server'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};