module.exports = {
  base:'/easy-wheels/',
  title: 'easy-wheels',
  description: '一个简易的 UI 框架',
  themeConfig: {
    nav: [
      { text: '主题', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
        '/install/',
        '/get-started/',
        ],
      },
      {
        title: '组件',
        children: [ '/components/button' ],
      },
    ]
  }
}