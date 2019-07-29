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
          link: 'https://twitter.com/vuejs/vuepress',
        },
      ],
    },
    modifyBlogPluginOptions(blogPlugnOptions) {
      const writingDirectoryClassifier = {
        id: 'writing',
        dirname: '_writings',
        path: '/writings/',
        layout: 'IndexWriting',
        itemLayout: 'Writing',
        itemPermalink: '/writings/:year/:month/:day/:slug',
        pagination: {
          perPagePosts: 5,
        },
      }

      blogPlugnOptions.directories.push(writingDirectoryClassifier)
      return blogPlugnOptions
    },
  }
}
