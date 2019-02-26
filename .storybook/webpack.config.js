const path = require('path');
// const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../stories')],
		options: {
			configFileName: path.resolve(__dirname, '../tsconfig.json'),
		},
	});
	// config.plugins.push(new TSDocgenPlugin()); // optional
	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
