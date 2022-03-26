# 前端技术

::: tip 前言
工欲善其事，必先利其器
:::

## 获取数组最后一个值

```javascript
array.at(-1);
```

## 移动端调试

1. 手机与电脑连接同一个 wifi，表示在同一局域网下
2. 通过 ipconfig 查看电脑本机 ipv4 地址 （xxx.xxx.xx.xxx）
3. 设置开发环境的 host 为 4 个 0，表示访问你电脑上的任何一个 Ip，都能访问的到你的前端服务
4. 在手机上访问 xxx.xxx.xx.xxx:port，直接访问正在开发的页面

```javascript
devServer: {
  host: "0.0.0.0"; // 表示前端服务在所有本机IP上监听
}
```

## Npm 不常用操作

### 清空 npm 缓存

```sh
npm cache clean -f
```

### 更改 npm 镜像源

```bash
# 改成淘宝镜像源
npm config set registry https://registry.npm.taobao.org
# 改回官方镜像源
npm config set registry https://registry.npm.org
```

### 查看模块版本列表

```bash
# 查看版本列表
npm view vue versions
# 查看某个模块的信息
npm view vue
```

### 安装 node-sass 模块

```bash
# 因为 node-sass 模块被墙掉了
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
# 再安装别的依赖
npm i
```

### 设置 electron 镜像源

```bash
# npm
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
# yarn
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/
```

## Git 不常用操作

### 撤销（反做）以前的某次提交记录

```bash
# 撤销以前的某次提交<HashA>，反做某次提交<HashA>
git revert <HashA>
# 提交
git push
```

### 版本回退到某次提交记录

```bash
# 版本回退到某次提交<HashA>
git reset --hard <HashA>
# 强制提交，远程仓库的<HashA>之后的几次提交记录就消失了
git push -f
```

### 挑选别的分支中的某次提交到当前分支

```bash
# 首先，切换到master分支
git checkout master

# 挑选dev分支上的<HashA>，到master分支上
git cherry-pick <HashA>

# 挑选多个提交到master
git cherry-pick <HashA> <HashB>
```
