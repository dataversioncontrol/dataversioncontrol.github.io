exports.modifyWebpackConfig = ({ config, stage }) => {
	const timestamp = Date.now()
	switch (stage) {
		case 'build-javascript':
			config.merge({
				output: {
					filename: `[name]-${timestamp}-[chunkhash].js`,
					chunkFilename: `[name]-${timestamp}-[chunkhash].js`
				}
			})

			break
	}
	return config
}
