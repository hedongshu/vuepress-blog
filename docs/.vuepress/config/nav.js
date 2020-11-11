module.exports = [
    { text: '首页', link: '/' },
    {
        text: '前端',
        link: '/web/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            {
                text: '前端', items: [
                    { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' }, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
                    { text: 'Vue', link: '/pages/802a1ca6f7b71c59/' },
                    { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
                    { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
                ]
            },
        ]
    },
    {
        text: '笔记',
        link: '/notes/',
        items: [
            { text: '《Python》笔记', link: '/note/python/' },
            { text: '《Vue》笔记', link: '/note/vue/' },
            { text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/' },
            { text: '小程序笔记', link: '/note/wx-miniprogram/' },
        ]
    },
    {
        text: '其他内容',
        link: '/technology/',
        items: [
            {
                text: '杂的文',
                link: '/more/',
            },
        ]
    },

    {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        items: [
            { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
            { text: '资源', link: '/pages/eee83a9211a70f9d/' },
            { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
        ]
    },
    { text: '关于', link: '/about/' },
    {
        text: '归档',
        link: '/archives/',
    }
]
