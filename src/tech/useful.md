# 实用技术

::: tip 前言
工欲善其事，必先利其器
:::

## 免费搭建自己的网站

::: warning 警告
由于**Gitee 网站**审核力度非常变态，普通的博客也很有可能无法正常部署，提示有违禁内容
:::
::: tip 建议
建议将自己的网站放到**GitHub 仓库**里，并开启 Pages 服务，具体流程差不多
:::

1. 打开 [gitee.com](https://gitee.com) 并注册一个账号，登录绑定自己的邮箱和手机号
2. 在 gitee 上**新建一个代码仓库**，仓库名称根据个人喜好来定，比如 myrepo
3. 复制代码仓库地址
   ![地址](/blog/tech/t1.png)

4. 下载并安装代码版本管理工具 [git](https://git-scm.com/downloads)
5. 在本地打开一个文件夹，要在这个文件夹下面放置刚才新建的代码仓库
6. 在打开的文件夹中空白处，右击鼠标，选择 **Git Bash Here**，打开 git 命令行窗口
7. 拉取代码仓库：在 git bash 窗口里输入

```bash
git clone https://你的代码仓库地址.git
```

8. 上一步好像需要输入 gitee 的用户名和密码
9. 进入到你的代码仓库

```bash
cd myrepo
```

10. 将包含了 index.html 的相关文件复制进来
    ::: tip
    根目录下必须有 index.html 文件<br>
    文件中不能有二维码图片
    :::
11. 提交代码到远程仓库

```bash
git add .
git commit -m '提交代码'
git push
```

12. 返回 gitee 上的代码仓库页面，选择 **服务 > Pages**
    ![地址](/blog/tech/t2.png)
13. 开启 Pages 服务前，需要先实名认证
14. 认证通过后，就可以开启服务了，开启后会自动生成**网站地址**
    ![地址](/blog/tech/t3.png)
15. 以后改完代码后，执行步骤 11 和步骤 14 即可
