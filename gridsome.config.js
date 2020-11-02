// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ibn_abubakre\'s blog',
  siteDescription: 'ibn_abubakres personal blog and tidbits covering frontend tools and languages including html, css, javacript, vuejs and more',
  siteUrl: process.env.DEPLOY_URL || 'ibn_abubakre.dev',
  metadata: {
    twitter: {
      site: '@ibn_abubakre',
      creator: '@ibn_abubakre'
    }
  },
  titleTemplate: '%s | ibn_abubakre.dev',
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
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: false } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  templates: {
    Post: '/blog/:path',
    Tag: '/tag/:id'
  }
};
