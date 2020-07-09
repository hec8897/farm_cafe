module.exports = {
    devServer: {
    	proxy: {
        	'/': {
            	target: 'http://www.wssw.kr:3000',
                changeOrigin: true
            }
        }
	},
    publicPath: "./",
    outputDir: "../server/public"
}