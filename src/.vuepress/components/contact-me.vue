<template>
  <div class="wrap">
    <div class="item">
      <div class="left">
        <img src="/blog/contact/wechat.png" alt />
      </div>
      <div class="right">
        <h2>Wechat</h2>
        <p>1105843831</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="/blog/contact/email.png" alt />
      </div>
      <div class="right">
        <h2>Email</h2>
        <p>
          <a href="mailto:byygkcg@163.com">byygkcg@163.com</a>
        </p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="/blog/contact/address.png" alt />
      </div>
      <div class="right">
        <h2>Address</h2>
        <p>
          <a href="https://j.map.baidu.com/a1/ptGJ" target="_blank">Chaoyang District, Beijing</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact-me",
};
</script>
<style>
.wrap {
  margin: 50px 0;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.left {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  margin-right: 20px;
}
.item:nth-of-type(1) .left {
  background: #dbfbd9;
}
.item:nth-of-type(2) .left {
  background: #ece8fd;
}
.item:nth-of-type(3) .left {
  background: #fedfd7;
}
.left img {
  width: 30px;
  height: 30px;
  display: block;
  margin: auto;
}
.right {
  flex-grow: 1;
}
h2 {
  margin-top: 15px;
  margin-bottom: 0;
  border: none;
}
p {
  margin-top: 5px;
}
p a:hover {
  cursor: pointer;
}

p::selection {
  color: #fff;
  background: #46bd87;
}
</style>