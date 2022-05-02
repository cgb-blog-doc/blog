(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{446:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"网站部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站部署"}},[t._v("#")]),t._v(" 网站部署")]),t._v(" "),a("h2",{attrs:{id:"使用-shell-脚本部署网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-shell-脚本部署网站"}},[t._v("#")]),t._v(" 使用 shell 脚本部署网站")]),t._v(" "),a("p",[t._v("我们可以在本地通过 shell 脚本进行项目打包、代码提交、部署到服务器等操作。")]),t._v(" "),a("ol",[a("li",[t._v("在项目根目录新建一个"),a("code",[t._v("deploy.sh")]),t._v("文件")]),t._v(" "),a("li",[t._v("在 package.json 中添加 npm scripts")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sh deploy.sh"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("编辑 deploy.sh，添加部署脚本")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误，遇到错误退出")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Deploying website on xxx.xxx.xx.xxx ..."')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将打包后的文件上传至目标服务器对应路径下")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -r ./dist/* root@xxx.xxx.xx.xxx:/home/project\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("部署网站")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run deploy\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" deploy\n")])])]),a("h2",{attrs:{id:"在-gitee-上部署自己的网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-gitee-上部署自己的网站"}},[t._v("#")]),t._v(" 在 Gitee 上部署自己的网站")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("由于"),a("strong",[t._v("Gitee 网站")]),t._v("审核力度非常变态，普通的博客也很有可能无法正常部署，提示有违禁内容")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开 "),a("a",{attrs:{href:"https://gitee.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee.com"),a("OutboundLink")],1),t._v(" 并注册一个账号，登录绑定自己的邮箱和手机号")])]),t._v(" "),a("li",[a("p",[t._v("在 gitee 上"),a("strong",[t._v("新建一个代码仓库")]),t._v("，仓库名称根据个人喜好来定，比如 myRepo")])]),t._v(" "),a("li",[a("p",[t._v("复制代码仓库地址\n"),a("img",{attrs:{src:"/blog/tech/t1.png",alt:"图片"}})])]),t._v(" "),a("li",[a("p",[t._v("下载并安装代码版本管理工具 "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("在本地打开一个文件夹，要在这个文件夹下面放置刚才新建的代码仓库")])]),t._v(" "),a("li",[a("p",[t._v("在打开的文件夹空白处，右击鼠标，选择 "),a("strong",[t._v("Git Bash Here")]),t._v("，打开 Git 命令行窗口")])]),t._v(" "),a("li",[a("p",[t._v("拉取代码仓库：在 git bash 窗口里输入")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 你的代码仓库地址(https开头的，步骤3)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/lubanseven/myRepo.git\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("上一步好像需要输入 Gitee 的用户名和密码")]),t._v(" "),a("li",[t._v("进入到你的代码仓库")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" myRepo\n")])])]),a("ol",{attrs:{start:"10"}},[a("li",[t._v("将包含了 index.html 的相关文件复制进来"),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("根目录下需要有 index.html 文件"),a("br"),t._v("\n文件中不能有二维码图片")])])]),t._v(" "),a("li",[t._v("提交代码到远程仓库")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加到暂存区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交到本地仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'备注信息'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到Gitee上面的仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("ol",{attrs:{start:"12"}},[a("li",[t._v("返回 Gitee 上的代码仓库页面，选择 "),a("strong",[t._v("服务 > Pages")]),t._v(" "),a("img",{attrs:{src:"/blog/tech/t2.png",alt:"图片"}})]),t._v(" "),a("li",[t._v("首次开启 Pages 服务，需要先实名认证（1 个工作日）")]),t._v(" "),a("li",[t._v("认证通过后，就可以开启服务了（点击：更新 按钮），开启后会自动生成"),a("strong",[t._v("网站地址")]),t._v(" "),a("img",{attrs:{src:"/blog/tech/t3.png",alt:"图片"}})]),t._v(" "),a("li",[t._v("后续更改文件后，执行步"),a("strong",[t._v("骤 11")]),t._v(" 和"),a("strong",[t._v("步骤 14")]),t._v(" 即可")])]),t._v(" "),a("h2",{attrs:{id:"在-github-上部署自己的网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-github-上部署自己的网站"}},[t._v("#")]),t._v(" 在 GitHub 上部署自己的网站")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("由于众所周知的原因，GitHub 在国内似墙非墙，打开或者提交代码需要尝试多次，看运气")])]),t._v(" "),a("ol",[a("li",[t._v("打开 "),a("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com"),a("OutboundLink")],1),t._v("，注册一个账号并登录")]),t._v(" "),a("li",[t._v("在 github 上"),a("strong",[t._v("新建一个代码仓库")]),t._v("，仓库名称根据个人喜好来定，比如 myRepo")]),t._v(" "),a("li",[t._v("复制代码仓库地址")]),t._v(" "),a("li",[t._v("下载并安装代码版本管理工具 "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("在本地打开一个文件夹，要在这个文件夹下面放置刚才新建的代码仓库")]),t._v(" "),a("li",[t._v("在打开的文件夹空白处，右击鼠标，选择 "),a("strong",[t._v("Git Bash Here")]),t._v("，打开 Git 命令行窗口")]),t._v(" "),a("li",[t._v("拉取代码仓库：在 git bash 窗口里输入")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 你的代码仓库地址(https开头的，步骤3)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/JasonBai007/myRepo.git\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("上一步好像需要输入 github 的用户名和密码")]),t._v(" "),a("li",[t._v("进入到你的代码仓库")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" myRepo\n")])])]),a("ol",{attrs:{start:"10"}},[a("li",[t._v("将包含了 index.html 的相关文件复制进去")]),t._v(" "),a("li",[t._v("提交代码到远程仓库")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加到暂存区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交到本地仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'备注信息'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到Github上面的仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("ol",{attrs:{start:"12"}},[a("li",[t._v("返回代码仓库页面，选择 "),a("strong",[t._v("Settings > Pages > Save")]),t._v("，即可开启 Pages 服务\n"),a("img",{attrs:{src:"/blog/tech/t4.png",alt:"图片"}})]),t._v(" "),a("li",[t._v("后续每次更新文件后，执行"),a("strong",[t._v("步骤 11")]),t._v("，过几分钟刷新页面，网站就自己更新了")])])])}),[],!1,null,null,null);s.default=n.exports}}]);