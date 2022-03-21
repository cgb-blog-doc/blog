# 后端技术

::: tip 前言
工欲善其事，必先利其器
:::

## 服务器免密登录三步曲

```sh {5}
# 在~/.ssh/目录下生成：公钥id_rsa.pub 和 私钥id_rsa
ssh-keygen

# 将生成的公钥 id_rsa.pub 发送至目标服务器，期间需要输入登录密码
ssh-copy-id root@xxx.xxx.xx.xxx

# 尝试免密登录目标服务器
ssh root@xxx.xxx.xx.xxx
```

## 清空 npm 缓存

```sh
npm cache clean -f
```

## 更改 npm 镜像源

```bash
# 改成淘宝镜像源
npm config set registry https://registry.npm.taobao.org
# 改回官方镜像源
npm config set registry https://registry.npm.org
```

## 查看模块版本列表

```bash
# 查看版本列表
npm view vue versions
# 查看某个模块的信息
npm view vue
```

## 安装 node-sass 模块

```bash
# 因为 node-sass 模块被墙掉了
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
# 再安装别的依赖
npm i
```

## 设置 electron 镜像源

```bash
# npm
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
# yarn
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/
```
