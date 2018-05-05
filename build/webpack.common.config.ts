import webpack from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './webpack.esm.config';

const config: webpack.Configuration = merge(baseConfig, {
	output: {
		filename: '[name].common.js',
		libraryExport: 'default'
	}
});

export default config;
