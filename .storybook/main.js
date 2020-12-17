const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
	stories: ['../stories/**/*.stories.tsx'],
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			loader: require.resolve('awesome-typescript-loader'),
			// loader: require.resolve('ts-loader'),
			include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../stories')],
			options: {
				configFileName: path.resolve(__dirname, '../tsconfig.json')
			}
		});
		// config.plugins.push(new TSDocgenPlugin()); // optional
		config.resolve.extensions.push('.ts', '.tsx');
		return config;
	}
};
