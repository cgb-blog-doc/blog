# Blog
A personal blog created by VuePress.

<img src="https://github.com/JasonBai007/blog/raw/master/qr.png" width="200">

## How to USE
```
yarn dev
yarn build
yarn deploy
```

## Features
- 支持热更新 
- 支持返回顶部
- 支持外链资源
- 支持一键部署
- 支持图片放映

## Directory Structure
```
├── docs (打包后目录)
├── src  (博客文档源文件)
│   ├── .vuepress 
│   │   ├── components (Optional)
│   │   ├── theme (Optional)
│   │   │   └── Layout.vue
│   │   ├── public (图片资源)
│   │   ├── styles (Optional)
│   │   │   ├── index.styl
│   │   │   └── palette.styl  
│   │   ├── config.js (博客导航配置文件)
│   │   └── enhanceApp.js (Optional)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```
## Notes
1. VuePress默认docs作为基准目录，但是为了使用GitHub的Pages服务，改为src了
2. 打包后的目录从dist改为了docs
3. .temp是临时文件夹，无需提交到远程
4. .vuepress文件夹是项目的配置文件夹
5. 由于Gitee审查不透明，经常无法部署，所以只能选择GitHub的Pages服务
6. 由于国内封锁,GitHub只能偶尔push代码成功，需要反复多次尝试
7. Github提交代码后，等待一两分钟，刷新页面，博客会更新
8. Gitee提交代码后，需要手动更新Pages
9. 可以使用草料二维码生成自己的博客地址二维码
