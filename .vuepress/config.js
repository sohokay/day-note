module.exports = {
  themeConfig: {
    title: '标题',
    description: '随便说点什么',
    displayAllHeaders: true, // 默认值：false
    lastUpdated: '最后更新于', // string | boolean
    repo: 'https://github.com/sohokay/day-note',
    repoLabel: '查看源码',
    docsBranch: 'main',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',


    theme: '@vuepress/blog',
    themeConfig: {
      // 请参考文档来查看所有可用的选项。
    },


    nav: [ // 导航栏
      {text: 'Home', link: '/'},
      {text: 'Git', link: '/git/'},
      {text: 'Note', link: '/note/'},


    ],
    sidebar: 'auto',
  }
}
