module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy("./src/styles.css")
	return {
		dir: {
			input: "src",
			output: "public"
		}
	}
}
