(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{449:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"后端技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端技术"}},[t._v("#")]),t._v(" 后端技术")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),a("p",[t._v("工欲善其事，必先利其器")])]),t._v(" "),a("h2",{attrs:{id:"服务器免密登录三步曲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器免密登录三步曲"}},[t._v("#")]),t._v(" 服务器免密登录三步曲")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在~/.ssh/目录下生成：公钥id_rsa.pub 和 私钥id_rsa")]),t._v("\nssh-keygen\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将生成的公钥 id_rsa.pub 发送至目标服务器，期间需要输入登录密码")]),t._v("\nssh-copy-id root@xxx.xxx.xx.xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 尝试免密登录目标服务器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" root@xxx.xxx.xx.xxx\n")])])]),a("h2",{attrs:{id:"nginx-常用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用配置"}},[t._v("#")]),t._v(" Nginx 常用配置")]),t._v(" "),a("h3",{attrs:{id:"_1-反向代理-支持前端路由-history-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-反向代理-支持前端路由-history-模式"}},[t._v("#")]),t._v(" 1. 反向代理&支持前端路由 history 模式")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先匹配ajax请求，带api的先被拦截")]),t._v("\nlocation /api "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代理到同一个服务器的9000端口")]),t._v("\n    proxy_pass http://localhost:9000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者代理到另外一个服务器的9000端口")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_pass http://xxx.xxx.xxx.xxx:9000;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其余的就不走反向代理了")]),t._v("\nlocation / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 支持前端路由history模式")]),t._v("\n    try_files "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-启用-gzip-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启用-gzip-压缩"}},[t._v("#")]),t._v(" 2. 启用 Gzip 压缩")]),t._v(" "),a("p",[t._v("可以放在 "),a("code",[t._v("http. server. location")]),t._v(" 里")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启gzip")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用前端构建出来的gz文件")]),t._v("\ngzip_static on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 超过10kb的压缩")]),t._v("\ngzip_min_length 10k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对特定的MIME类型生效")]),t._v("\ngzip_types text/javascript application/javascript text/css application/json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Nginx作为反向代理的时候启用")]),t._v("\ngzip_proxied any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngzip_vary on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 压缩级别5级，范围1-9,越大压缩的越多，越费时间")]),t._v("\ngzip_comp_level "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngzip_buffers "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" 8k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngzip_http_version "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-重定向"}},[t._v("#")]),t._v(" 3. 重定向")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 301永久重定向")]),t._v("\nrewrite ^/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" http://xxx.xxx.xxx.xxx permanent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 302临时重定向")]),t._v("\nrewrite ^/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" http://xxx.xxx.xxx.xxx redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-添加虚拟主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加虚拟主机"}},[t._v("#")]),t._v(" 4. 添加虚拟主机")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置端口号")]),t._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8090")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("::"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":8090"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目目录")]),t._v("\n    root /home/my-website"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    index index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置反向代理，解决跨域问题")]),t._v("\n    location /api "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_pass http://localhost:9000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 支持前端路由history模式")]),t._v("\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        try_files "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-资源缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-资源缓存"}},[t._v("#")]),t._v(" 5. 资源缓存")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# index.html不缓存，每次都来服务器检查是否最新。")]),t._v("\n  location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /index.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     add_header Cache-Control no-cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 静态资源缓存时间30天")]),t._v("\n  location ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      expires 30d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      add_header Cache-Control public"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_6-负载均衡-前端很少用到"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-负载均衡-前端很少用到"}},[t._v("#")]),t._v(" 6. 负载均衡（前端很少用到）")]),t._v(" "),a("p",[t._v("有很多策略，参考这篇文章："),a("a",{attrs:{href:"https://juejin.im/post/5cae9de95188251ae2324ec3#heading-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5cae9de95188251ae2324ec3#heading-7"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("http "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 轮询（默认），请求过来后，Nginx 随机分配流量到任一服务器")]),t._v("\n    upstream backend "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:3000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:3001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_7-websocket-超过-1-分钟中断问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-websocket-超过-1-分钟中断问题"}},[t._v("#")]),t._v(" 7. Websocket 超过 1 分钟中断问题")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配 ws 链接")]),t._v("\n    location /ws "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_connect_timeout 75s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最长75秒")]),t._v("\n        proxy_read_timeout 600s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果后端数据超过10分钟，再中断，默认60s")]),t._v("\n        proxy_send_timeout 600s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 前端超过10分钟才发送数据，就会中断，默认60s")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_8-允许跨域访问某类请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-允许跨域访问某类请求"}},[t._v("#")]),t._v(" 8. 允许跨域访问某类请求")]),t._v(" "),a("p",[t._v("参考："),a("a",{attrs:{href:"https://segmentfault.com/a/1190000012550346",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000012550346"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        add_header Access-Control-Allow-Origin *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        add_header Access-Control-Allow-Methods "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET, POST, OPTIONS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        add_header Access-Control-Allow-Headers "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_method")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPTIONS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);