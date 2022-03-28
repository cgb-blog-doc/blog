<template>
  <div id="com"></div>
</template>

<script>
// 留言板，借助valine实现
// 需要先在leancloud上注册并实名认证
const Valine = require("valine");
export default {
  name: "my-comment",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      new Valine({
        el: "#com",
        // appId: "3GiiCyXCrGbOIH3EelCfJ6yw-gzGzoHsz",
        // appKey: "iuneD4hXPQImdHQSRE0aOcRF",
        appId: "Uycc9kGTrdbEATzhKnxlkWmo-gzGzoHsz",
        appKey: "aHINxMHuhAb4vQxJCuSYzLFe",
        placeholder: "给我留言",
        avatar: "robohash",
        recordIP: true,
        visitor: true,
        // lang: "en"  "zh-cn",
      });
    },
  },
};
</script>

<style>
#com {
  margin-top: 20px;
}
</style>