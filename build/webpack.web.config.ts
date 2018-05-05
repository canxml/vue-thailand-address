import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import createConfig from './createConfig';

const webConfig: webpack.Configuration = {
	entry: {
		db: path.resolve(__dirname, '../src/data/db.json')
	},
	output: {
		library: 'VueThailandAddress'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'db'
		})
	],
	externals: {
		vue: 'Vue'
	}
};

const configs: webpack.Configuration[] = [
	merge(createConfig(), webConfig, {
		output: {
			filename: '[name].js'
		},
		plugins: [
			new ExtractTextPlugin('vue-thailand-address.css')
		]
	}),
	merge(createConfig(true), webConfig, {
		output: {
			filename: '[name].min.js'
		},
		plugins: [
			new ExtractTextPlugin('vue-thailand-address.min.css')
		]
	})
];

export default configs;
