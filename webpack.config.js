const path = require('path');

module.exports = {
	mode: 'production',
	entry: './script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle-[contenthash].js',
	},
};