module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/img");

    return {
        dir: {
            input: "src",
            includes: "_includes",  // relative to `input`
            layouts: "_layouts",    // relative to `input`
            output: "dist",         // relative to project root
        },

        templateFormats: ["html", "njk", "md", "11ty.js"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk"

    }
};
