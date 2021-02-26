// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ibn_abubakre\'s blog',
  siteDescription: 'ibn_abubakres personal blog and tidbits covering frontend tools and languages including html, css, javacript, vuejs and more',
  siteUrl: 'https://ibnabubakre.xyz',
  metadata: {
    twitter: {
      site: '@ibn_abubakre',
      creator: '@ibn_abubakre'
    }
  },
  titleTemplate: '%s | ibn-abubakre.xyz',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './posts',
        path: '**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-146393431-1'
      }
    },
  ],
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: false } ],
        [ '@noxify/gridsome-plugin-remark-embed', { 'enabledProviders' : ['Codepen'] } ]
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
