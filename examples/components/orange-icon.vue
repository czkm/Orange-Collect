<template>
  <div class="content-box">
    <h2 class="demo-title">orange 图标</h2>
    <p class="demo-introduction">语义化的矢量图形。</p>

    <orange-anchor>
      <orange-anchor-link href="orange-simple" title="使用方法" />
      <orange-anchor-link href="orange-ofen-list" title="常用图标" />
    </orange-anchor>

    <div class="demo-tip">
      <p>该项目使用 iconfont 图标库</p>
      <p>
        <a
          href="https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1915698"
          target="_blank"
        >https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1915698</a>
      </p>
    </div>

    <orange-backtop :visibilityHeight="300" />

    <div class="orange-orange" id="orange-simple">
      <!-- 使用方法DEMO -->
      <orange-demo-block
        :height="294"
        :introduction="'直接通过设置类名为 iconfont，org-icon- 来使用即可。例如：'"
        :title="'使用方法'"
      >
        <template v-slot:demo>
          <i class="iconfont org-icon-guge" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-huohu" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-if_edge_" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-steam" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-vue" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-react" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-angular" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-jq" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-node1" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-huaban88" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-dota" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-zhihu" style="margin: 0 20px;"></i>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(simple.code.html)}}</code>
        </template>
      </orange-demo-block>

      <!-- 常用图标 -->
      <div id="orange-ofen-list">
        <h3 class="demo-table-title">常用图标</h3>
        <ul class="orange-list">
          <li
            :class="{'rigth_block':index % 5 ===4}"
            :key="item"
            v-for="(item,index) in ofen_icon_list"
          >
            <div>
              <i :class="item" class="iconfont"></i>
              <p class="shn-name">{{item}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "orange-icon",
  data() {
    return {
      //基础用法DEMO
      simple: {
        code: {
          html: `<i class="iconfont org-icon-guge" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-huohu" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-if_edge_" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-steam" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-vue" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-react" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-angular" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-jq" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-node1" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-huaban88" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-dota" style="margin: 0 20px;"></i>
          <i class="iconfont org-icon-zhihu" style="margin: 0 20px;"></i>`
        }
      },
      ofen_icon_list: [
        "org-icon-js",
        "org-icon-arrow-up",
        "org-icon-leftarrow",
        "org-icon-Rightarrow",
        "org-icon-arrow-down",
        "org-icon-kehuishouwu-niunaihe",
        "org-icon-svgmoban14",
        "org-icon-node",
        "org-icon-icon_add",
        "org-icon-icon_addmessage",
        "org-icon-icon_addresslist",
        "org-icon-icon_addperson",
        "org-icon-icon_boss",
        "org-icon-icon_alipay_line",
        "org-icon-icon_at",
        "org-icon-icon_exchange",
        "org-icon-icon_dingtalk_line",
        "org-icon-icon_qq",
        "org-icon-icon_medal",
        "org-icon-icon_QRcode",
        "org-icon-icon_refresh",
        "org-icon-icon_search",
        "org-icon-icon_sketch",
        "org-icon-icon_wechat",
        "org-icon-icon_shield"
        // "org-icon-icon_task_done",
        // "org-icon-caishichang-",
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.orange-orange {
  i {
    font-size: 28px;
  }
  .orange-list {
    width: 100%;
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    .rigth_block {
      border-right: 0 !important;
    }
    li {
      float: left;
      width: 20%;
      text-align: center;
      height: 166px;
      color: #666;
      font-size: 13px;
      // border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.15s ease-in-out;
      &:hover {
        background: #409eff;
        div {
          color: #fff;
        }
        i {
          color: #fff;
          font-size: 40px;
        }
      }
      div {
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
          Microsoft YaHei, SimSun, sans-serif;
        color: #99a9bf;
        transition: all 0.15s ease-in-out;
        i {
          font-size: 32px;
          color: #606266;
          transition: all 0.15s ease-in-out;
        }
        .shn-name {
          padding: 20px 0;
          height: 1em;
        }
      }
    }
  }
}
</style>