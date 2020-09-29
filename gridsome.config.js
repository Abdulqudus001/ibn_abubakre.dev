// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ibn_abubakre',
  titleTemplate: '%s | <sitename>',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/blog/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          }
        }
      }
    },
  ],
  transformers: {
    remark: {}
  },
  templates: {
    Post: '/blog/:path',
    Tag: '/tag/:id'
  }
};
