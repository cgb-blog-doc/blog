module.exports = {
    title: '小白的博客',
    description: '小白的个人博客',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    base: '/blog/',
    dest: 'docs',
    plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '生活',
                items: [
                    { text: '金融理财', link: '/life/financing' },
                    { text: '职场法律', link: '/life/law' },
                    { text: '医学健康', link: '/life/health' },
                    { text: '诗词收藏', link: '/life/poems' },
                ]
            },
            {
                text: '技术', items: [
                    { text: '实用技术', link: '/tech/useful' },
                ]
            },
            { text: '摄影', link: '/shot/' },
            {
                text: '实用网址',
                items: [
                    { text: '影视资源', link: 'https://www.nunuyy1.top/' },
                    { text: '科学上网', link: 'https://github.com/freefq/free' },
                    { text: '博客主题', link: 'https://vuepress.vuejs.org/zh/theme/default-theme-config.html' },
                    { text: '编辑工具', link: 'https://pandao.github.io/editor.md' },
                ]
            },
            { text: 'GitHub', link: 'https://github.com/JasonBai007' },
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
    },

}