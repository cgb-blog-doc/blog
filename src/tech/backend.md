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
