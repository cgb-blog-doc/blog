<template>
  <div class="wrap">
    <!-- 阅读量，class为固定值 -->
    <div class="statistic" v-show="readingNum">
      <span :id="articlePath" class="leancloud_visitors" data-flag-title="联系我">
        <em class="post-meta-item-text">阅读量：</em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <!-- 留言板容器 -->
    <div id="com"></div>
  </div>
</template>

<script>
// 使用示例：<bai-comment :readingNum="true"/>
export default {
  name: "bai-comment",
  props: {
    // 是否统计阅读量
    readingNum: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      articlePath: "",
    };
  },
  mounted() {
    // 请确保只在 beforeMount 或者 mounted 访问浏览器 / DOM 的 API
    this.articlePath = window.location.pathname;
    this.init();
  },
  methods: {
    init() {
      const Valine = require("valine");
      new Valine({
        el: "#com", // 容器ID
        appId: "Uycc9kGTrdbEATzhKnxlkWmo-gzGzoHsz", // "3GiiCyXCrGbOIH3EelCfJ6yw-gzGzoHsz" 官网示例
        appKey: "aHINxMHuhAb4vQxJCuSYzLFe", // "iuneD4hXPQImdHQSRE0aOcRF" 官网示例
        placeholder: "给我留言",
        avatar: "robohash", // 默认头像
        path: this.articlePath, // 文章的路径
        visitor: this.readingNum, // 支持阅读量统计
        recordIP: true, // 记录评论者IP
        lang: "zh-cn", // 或 en
        requiredFields: ["nick"], // 必填项
        // meta: ["nick", "mail", "link"],
      });
    },
  },
};
</script>

<style>
.statistic {
  text-align: right;
}
#com {
  margin-top: 20px;
}
/* 加深留言板边框颜色 */
.v[data-class="v"] .vwrap,
.v[data-class="v"] .vbtn,
.v[data-class="v"] .vwrap .vheader .vinput,
.v[data-class="v"] .vcards .vcard .vquote,
.v[data-class="v"] .vcards .vcard .vh {
  border-color: #e0e0e0 !important;
}
.v[data-class="v"] .vwrap .vheader .vinput {
  border-color: #d0d0d0 !important;
}
</style>