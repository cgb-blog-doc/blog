module.exports = {
    title: "行云流水",
    description: '小白的个人博客',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]  // favicon
    ],
    host: 'localhost',
    base: '/blog/',  // 同代码仓库名称
    dest: 'docs',   // 因为GitHub的Pages服务仅支持docs目录
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
        ['vuepress-plugin-nuggets-style-copy', { copyText: '复制代码' }],
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ['blackCat'],
                clean: true
            }
        ]
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '爱生活',
                items: [
                    {
                        text: '日常', items: [
                            { text: '价值信条', link: '/life/values' },
                            { text: '日常记录', link: '/life/daily' },
                            { text: '影视分享', link: '/life/movie' },
                            // { text: '希望你是', link: '/life/you' },
                        ]
                    },
                    {
                        text: '专业', items: [
                            { text: '金融理财', link: '/life/financing' },
                            { text: '职场法律', link: '/life/law' },
                            // { text: '医学健康', link: '/life/health' },
                            { text: '诗词收藏', link: '/life/poems' },
                        ]
                    },
                ]
            },
            {
                text: '玩技术', items: [
                    {
                        text: '文档', items: [
                            { text: '日常办公', link: '/tech/office' },
                            { text: '样式技巧', link: '/tech/styles' },
                            { text: '前端技术', link: '/tech/frontend' },
                            { text: '后端技术', link: '/tech/backend' },
                            { text: '网站部署', link: '/tech/deploy' },
                        ]
                    },
                    {
                        text: '资源', items: [
                            { text: '实用网站', link: '/tech/recommend' },
                            { text: '开源项目', link: '/tech/projects' },
                        ]
                    },
                ]
            },
            {
                text: '摄影集', items: [
                    {
                        text: '人物', items: [
                            { text: '日常随拍', link: '/album/free' },
                        ]
                    },
                    {
                        text: '风景', items: [
                            { text: '都市街景', link: '/album/streetscape' },
                            { text: '自然风光', link: '/album/nature' },
                        ]
                    },
                ]
            },
            {
                text: '超链接',
                items: [
                    { text: '影视资源', link: 'https://www.nunuyy.org' },
                    { text: '科学上网', link: 'https://github.com/freefq/free' },
                    { text: '博客主题', link: 'https://vuepress.vuejs.org/zh/theme/default-theme-config.html' },
                    { text: '编辑工具', link: 'https://pandao.github.io/editor.md' },
                ]
            },
            { text: '联系我', link: '/contact/' },
            { text: 'GitHub', link: 'https://github.com/JasonBai007' },
        ],
        sidebar: 'auto',  // 侧栏根据页面标题自动生成导航
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
    },

}