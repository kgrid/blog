module.exports = {
  base: '/blog/',
  title: "KGrid Blog",
  // theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/', },
      // { text: 'Tags', link: '/tags/', },
      { text: 'KGrid.org', link: 'https://kgrid.org' },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/kgrid',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/kgrid',
        },
      ],
      copyright: [{
          text: '(C)2019 KGrid.org',
          link: 'http://kgrid.org'
      }]
    },
    modifyBlogPluginOptions(blogPlugnOptions) {
      const draftDirectoryClassifier = {
        id: 'draft',
        dirname: '_drafts',
        path: '/drafts/',
        itemLayout: 'Post',
        itemPermalink: '/drafts/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 3,
        },
      }

      blogPlugnOptions.directories.push(draftDirectoryClassifier)
      return blogPlugnOptions
    },
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-133554011-1' // UA-00000000-0
      }
    ]
  ]
}
