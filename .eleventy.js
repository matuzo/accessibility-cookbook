const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("media");
	eleventyConfig.addPassthroughCopy("base");
	eleventyConfig.addPassthroughCopy("reset");
	eleventyConfig.addPassthroughCopy("olivia.css");

  eleventyConfig.addPassthroughCopy(
    { 
      images: "images",
      'css/base': "assets/css/base",
      'favicon.ico': "favicon.ico",
      'robots.txt': "robots.txt",
      'css/reset': "assets/css/reset",
      'css/olivia.css': "assets/css/olivia.css",
      'css/philippa.css': "assets/css/philippa.css",
      'css/cookbook.css': "assets/css/cookbook.css",
      'css/prism.css': "assets/css/prism.css",
      'css/RedditSans-Variable.woff2': "assets/css/RedditSans-Variable.woff2",
      'data/records.json': "assets/data/records.json"
    }
  );

  
};