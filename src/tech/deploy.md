# 网站部署

::: warning 警告
由于**Gitee 网站**审核力度非常变态，普通的博客也很有可能无法正常部署，提示有违禁内容
:::
::: tip 建议
建议将自己的网站放到**GitHub 仓库**里，并开启 Pages 服务，具体流程差不多
:::

## 在 Gitee 上部署自己的网站

1. 打开 [gitee.com](https://gitee.com) 并注册一个账号，登录绑定自己的邮箱和手机号
2. 在 gitee 上**新建一个代码仓库**，仓库名称根据个人喜好来定，比如 myRepo
3. 复制代码仓库地址
   ![图片](/blog/tech/t1.png)

4. 下载并安装代码版本管理工具 [Git](https://git-scm.com/downloads)
5. 在本地打开一个文件夹，要在这个文件夹下面放置刚才新建的代码仓库
6. 在打开的文件夹空白处，右击鼠标，选择 **Git Bash Here**，打开 Git 命令行窗口
7. 拉取代码仓库：在 git bash 窗口里输入

```bash
# 你的代码仓库地址(https开头的，步骤3)
git clone https://gitee.com/lubanseven/myRepo.git
```

8. 上一步好像需要输入 Gitee 的用户名和密码
9. 进入到你的代码仓库

```bash
cd myRepo
```

10. 将包含了 index.html 的相关文件复制进来
    ::: tip
    根目录下需要有 index.html 文件<br>
    文件中不能有二维码图片
    :::
11. 提交代码到远程仓库

```bash
# 添加到暂存区
git add .

# 提交到本地仓库
git commit -m '备注信息'

# 推送到Gitee上面的仓库
git push
```

12. 返回 Gitee 上的代码仓库页面，选择 **服务 > Pages**
    ![图片](/blog/tech/t2.png)
13. 首次开启 Pages 服务，需要先实名认证（1 个工作日）
14. 认证通过后，就可以开启服务了（点击：更新 按钮），开启后会自动生成**网站地址**
    ![图片](/blog/tech/t3.png)
15. 后续更改文件后，执行步**骤 11** 和**步骤 14** 即可

## 在 GitHub 上部署自己的网站

::: warning 警告
由于众所周知的原因，GitHub 在国内似墙非墙，打开或者提交代码需要尝试多次，看运气
:::

1. 打开 [github.com](https://github.com)，注册一个账号并登录
2. 在 github 上**新建一个代码仓库**，仓库名称根据个人喜好来定，比如 myRepo
3. 复制代码仓库地址
4. 下载并安装代码版本管理工具 [Git](https://git-scm.com/downloads)
5. 在本地打开一个文件夹，要在这个文件夹下面放置刚才新建的代码仓库
6. 在打开的文件夹空白处，右击鼠标，选择 **Git Bash Here**，打开 Git 命令行窗口
7. 拉取代码仓库：在 git bash 窗口里输入

```bash
# 你的代码仓库地址(https开头的，步骤3)
git clone https://github.com/JasonBai007/myRepo.git
```

8. 上一步好像需要输入 github 的用户名和密码
9. 进入到你的代码仓库

```bash
cd myRepo
```

10. 将包含了 index.html 的相关文件复制进去
11. 提交代码到远程仓库

```bash
# 添加到暂存区
git add .

# 提交到本地仓库
git commit -m '备注信息'

# 推送到Github上面的仓库
git push
```

12. 返回代码仓库页面，选择 **Settings > Pages > Save**，即可开启 Pages 服务
    ![图片](/blog/tech/t4.png)
13. 后续每次更新文件后，执行**步骤 11**，过几分钟刷新页面，网站就自己更新了
