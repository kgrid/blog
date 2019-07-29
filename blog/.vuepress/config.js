module.exports = {
  base: '/',
  title: "KGrid Blog",
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/', },
      // { text: 'Tags', link: '/tag/', },
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
          text: '©2019 KGrid.org',
          link: 'http://kgrid.org'
      }]
    },
    modifyBlogPluginOptions(blogPlugnOptions) {
      const writingDirectoryClassifier = {
        id: 'writing',
        dirname: '_writings',
        path: '/writings/',
        // layout: 'IndexWriting',
        itemLayout: 'Post',
        itemPermalink: '/writings/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 3,
        },
      }

      blogPlugnOptions.directories.push(writingDirectoryClassifier)
      return blogPlugnOptions
    },
  }
}
