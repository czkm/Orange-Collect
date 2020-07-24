<template>
  <div class="content-box">
    <h2 class="demo-title">安装</h2>

    <!-- 致谢 -->
    <h3 class="demo-table-title">致谢</h3>
    <div class="demo-tip">
      <p>该项目使用Vue.js开发</p>
      <p>
        <a href="https://cn.vuejs.org/" target="_blank">https://cn.vuejs.org/</a>
      </p>
    </div>
    <div class="demo-tip">
      <p>
        该项目DEMO页面模仿
        <span style="color:#ff0000;margin:0 5px;">Element-ui</span>页面开发,旨在收集有意思的相关组件
      </p>
      <p>
        <a
          href="https://element.eleme.io/#/zh-CN/component/installation"
          target="_blank"
        >https://element.eleme.io/#/zh-CN/component/installation</a>
      </p>
    </div>
    <div class="demo-tip demo-success-tip">
      该项目配色由粥粥粥粥🥣🌈☁️提供
      <a
        href="https://www.zhihu.com/people/rather-be-6"
        target="https://www.zhihu.com/people/rather-be-6"
      >
        <i class="iconfont org-icon-zhihu" style="margin: 0 20px;font-size: 26px;"></i>
      </a>
    </div>

    <!-- 代码仓库 -->
    <h3 class="demo-table-title">
      代码仓库
      <i class="iconfont icon-github-fill" style="margin: 0 10px;"></i>
    </h3>
    <p class="demo-introduction">
      github代码仓库地址
      <a
        href="https://github.com/czkm/Orange-Collect"
        target="https://github.com/czkm/Orange-Collect"
      >
        <i class="iconfont org-icon-huaban88" style="margin: 0 20px;font-size: 26px;"></i>

        <!-- <img
          alt
          class="github-img"
          href="https://github.com/czkm/Orange-Collect"
          src="https://img.shields.io/github/stars/ShnHz/shn-ui.svg?style=social&label=Star&maxAge=2592000"
        />-->
      </a>
      <!-- 点个star支持一下吧~ -->
    </p>

    <!-- NPM安装 -->
    <h3 class="demo-table-title">NPM安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <!-- <p class="demo-introduction">
      <a
        href="https://www.npmjs.com/package/shn-vue-ui"
        target="_blank"
      >https://www.npmjs.com/package/shn-vue-ui</a>
    </p>-->
    <div class="demo-code-block">npm i OrangeCollect -S</div>

    <!-- 快速上手 -->
    <h3 class="demo-table-title">快速上手</h3>
    <p class="demo-introduction">你可以在 main.js 中引入整个 OrangeCollect。</p>
    <div class="demo-code-block">
      <p>import OrangeCollect from 'OrangeCollect'</p>
      <p style="margin-top:20px">Vue.use(OrangeCollect);</p>
    </div>

    <!-- 常用动效 -->
    <h3 class="demo-table-title">常用动效</h3>
    <div class="demo-code-block">
      <p>transition: all 0.2s linear;</p>
    </div>

    <!-- 开始使用 -->
    <h3 class="demo-table-title">开始使用</h3>
    <p class="demo-introduction">至此，一个基于 Vue 安装了 OrangeCollect插件 的开发环境已经搭建完毕。各个组件的使用方法请参阅它们各自的文档。</p>
  </div>
</template>

<script>
export default {
  name: "installation",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.github-img {
  cursor: pointer;
  position: relative;
  top: 5px;
  margin: 0 8px 0 5px;
}
</style>

