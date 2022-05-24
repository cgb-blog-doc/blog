# 前端技术

::: tip 前言
工欲善其事，必先利其器
:::

## 生成随机字符串

```javascript
Date.now().toString(36);
```

## 获取数组最后一个值

```javascript
// IE浏览器和安卓的Opera不支持！但是Edge浏览器支持
array.at(-1);

// 传统方法
array.slice(-1)[0];
```

## reduce 方法使用示例

```javascript
// array.reduce(累加函数，初始值)
[1, 2, 3].reduce((pre, cur) => pre + cur, 0); // 6

// 1个元素
[1].reduce((pre, cur) => pre + cur, 0); // 1

// 0个元素时，必须传入初始值
[].reduce((pre, cur) => pre + cur, 0); // 0

// 复杂示例：pre不加.val，cur加
[
  { name: "a", val: 3 },
  { name: "b", val: 4 },
].reduce((pre, cur) => pre + cur.val, 0); // 7
```

## 在 vue 中使用防抖技术

```javascript
// 方式一：
// <el-button @click="handleClick">防抖</el-button>
// 直接引入工具函数对象
import utils from "@/utils/index.js";
export default {
  methods: {
    handleClick: utils.debounce(() => {
      console.log("防抖");
    }, 2000),
  },
};
```

```javascript
// 方式二：
// <el-button @click="handleClick">防抖</el-button>
created() {
  // 使用全局的工具函数对象
  this.handleClick = this.$utils.debounce(() => {
    console.log("防抖");
  }, 2000);
}
```

## 控制台获取上次执行结果

```javascript
1 + 1;
// 2

$_ * 10;
// 20
```

## Vue 中父子组件生命周期顺序

1. 父 beforeCreate -> 父 created -> 父 beforeMount ->
2. 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted ->
3. 父 mounted

4. 父 beforeUpdate->子 beforeUpdate->子 updated->父 updated

5. 父 beforeDestroy->子 beforeDestroy->子 destroyed->父 destroyed

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

## 让你的网页飘花瓣

```html
<!-- 直接引入 -->
<script src="https://cdn.jsdelivr.net/gh/yremp/yremp-js@1.5/sakura.js"></script>

<!-- 动态引入 -->
<script>
  let _js = document.createElement("script");
  _js.src = "https://cdn.jsdelivr.net/gh/yremp/yremp-js@1.5/sakura.js";
  document.head.appendChild(_js);
</script>
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
