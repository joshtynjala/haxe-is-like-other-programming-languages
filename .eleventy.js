export default function(eleventyConfig) {
  // filters are used to modify the data used by a template
  eleventyConfig.addFilter("toJsonForTemplateString", function (data) {
    return JSON.stringify(data).replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("${", "\\${");
  });

  // copy these files to the output directory
  // if the directories contain any template extensions (such as.html or .md),
  // be sure to add the directory to .eleventyignore
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("css");
}