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
