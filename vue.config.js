module.exports = {
	// 选项...
	css: {
		loaderOptions: {
			css: {},
			postcss: {
				plugins: [
					require('postcss-px2rem')({
						remUnit: 192
					})
				]
			}
		}
	}
}
