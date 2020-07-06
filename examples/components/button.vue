<template>
  <div class="content-box">
    <h2 class="demo-title">Button 按钮</h2>
    <p class="demo-introduction">常用按钮介绍</p>

    <orange-anchor>
      <orange-anchor-link href="button-Simple" title="普通按钮" />
      <orange-anchor-link href="button-Black" title="暗色按钮" />
      <orange-anchor-link href="button-Line" title="线性按钮" />
      <orange-anchor-link href="button-disabled" title="禁用" />
      <orange-anchor-link href="button-Size" title="按钮尺寸" />
      <orange-anchor-link href="api" title="API" />
    </orange-anchor>

    <h3 class="demo-table-title" id="button-simple">基础用法</h3>
    <!-- 基础用法DEMO -->
    <orange-demo-block :height="630" :title="'普通按钮'" id="button-Simple">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-button>Default</orange-button>
          <orange-button type="success">Success</orange-button>
          <orange-button type="primary">Primary</orange-button>
          <orange-button type="danger">Danger</orange-button>
          <orange-button type="warning">Warning</orange-button>
          <orange-button type="info">info</orange-button>
          <orange-button icon="org-icon-icon_search" type="primary">Search</orange-button>
        </div>
        <div class="codepadding">
          <orange-button plain>Default</orange-button>
          <orange-button plain type="success">Success</orange-button>
          <orange-button plain type="primary">Primary</orange-button>
          <orange-button plain type="danger">Danger</orange-button>
          <orange-button plain type="warning">Warning</orange-button>
          <orange-button plain type="info">info</orange-button>

          <orange-button plain icon="org-icon-icon_search" type="primary">Search</orange-button>
        </div>
        <div class="codepadding">
          <orange-button round>Default</orange-button>
          <orange-button round type="success">Success</orange-button>
          <orange-button round type="primary">Primary</orange-button>
          <orange-button round type="danger">Danger</orange-button>
          <orange-button round type="warning">Warning</orange-button>
          <orange-button round type="info">info</orange-button>

          <orange-button round icon="org-icon-icon_search" type="primary">Search</orange-button>
        </div>
        <div class="codepadding">
          <orange-button circle icon="org-icon-react"></orange-button>
          <orange-button circle icon="org-icon-vue" type="primary"></orange-button>
          <orange-button circle icon="org-icon-js" type="success"></orange-button>
          <orange-button circle icon="org-icon-angular" type="danger"></orange-button>
          <orange-button circle icon="org-icon-caishichang-" type="warning"></orange-button>
          <orange-button circle icon="org-icon-icon_QRcode" type="info"></orange-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
      </template>
    </orange-demo-block>
    <orange-demo-block :height="150" :title="'暗色按钮'" id="button-Black">
      <template v-slot:demo>
        <div class="codepadding" style="background:#000;">
          <orange-button isblack>Default</orange-button>
          <orange-button isblack type="danger">Danger</orange-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(black.code.html)}}</code>
      </template>
    </orange-demo-block>
    <!-- 线性按钮 -->
    <orange-demo-block :height="168" :title="'线性按钮'" id="button-Line">
      <template v-slot:demo>
        <orange-line-button disabled>Default</orange-line-button>
        <orange-line-button disabled type="success">Success</orange-line-button>
        <orange-line-button disabled type="danger">Danger</orange-line-button>
        <orange-line-button disabled type="warn">warn</orange-line-button>
        <orange-line-button disabled type="info">info</orange-line-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(line.code.html)}}</code>
      </template>
    </orange-demo-block>
    <!-- 禁用DEMO -->
    <orange-demo-block :height="168" :title="'禁用'" id="button-disabled">
      <template v-slot:demo>
        <orange-button disabled>Default</orange-button>
        <orange-button disabled type="success">Success</orange-button>
        <orange-button disabled type="primary">Primary</orange-button>
        <orange-button disabled type="danger">Danger</orange-button>
        <orange-button disabled icon="org-icon-icon_search" type="primary">Search</orange-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(disabled.code.html)}}</code>
      </template>
    </orange-demo-block>

    <!-- 按钮尺寸 -->
    <orange-demo-block
      :height="250"
      :title="'按钮尺寸'"
      id="button-Size"
      introduction="自定义修改颜色，其type必须设置为customize"
    >
      <template v-slot:demo>
        <div style="Padding:10p">
          <orange-button size="medium">medium</orange-button>
          <orange-button size="small">small</orange-button>
          <orange-button size="mini">mini</orange-button>
        </div>

        <div style="margin-top:10px;padding:10p">
          <orange-line-button size="medium">medium</orange-line-button>
          <orange-line-button size="small">small</orange-line-button>
          <orange-line-button size="mini">mini</orange-line-button>
        </div>
        <div style="margin-top:10px;padding:10px;background:#000">
          <orange-button isblack size="medium">medium</orange-button>
          <orange-button isblack size="small">small</orange-button>
          <orange-button isblack size="mini">mini</orange-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(size.code.html)}}</code>
      </template>
    </orange-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <orange-table-simple :data="api" :thead="thead" />
    </div>
  </div>
</template>

<script>
export default {
  name: "shn-button-demo",
  data() {
    return {
      thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
      // a: document.getElementById("router_view_box"),
      simple: {
        code: {
          html: `
           <orange-button>Default</orange-button>
          <orange-button type="success">Success</orange-button>
          <orange-button type="primary">Primary</orange-button>
          <orange-button type="danger">Danger</orange-button>
          <orange-button type="warning">Warning</orange-button>
          <orange-button type="info">info</orange-button>
          <orange-button icon="org-icon-icon_search" type="primary">Search</orange-button>
          <orange-button plain>Default</orange-button>
          <orange-button plain type="success">Success</orange-button>
          <orange-button plain type="primary">Primary</orange-button>
          <orange-button plain type="danger">Danger</orange-button>
          <orange-button plain type="warning">Warning</orange-button>
          <orange-button plain type="info">info</orange-button>
          <orange-button plain icon="org-icon-icon_search" type="primary">Search</orange-button>
          <orange-button round>Default</orange-button>
          <orange-button round type="success">Success</orange-button>
          <orange-button round type="primary">Primary</orange-button>
          <orange-button round type="danger">Danger</orange-button>
          <orange-button round type="warning">Warning</orange-button>
          <orange-button round type="info">info</orange-button>
          <orange-button round icon="org-icon-icon_search" type="primary">Search</orange-button>
          <orange-button circle icon="org-icon-react"></orange-button>
          <orange-button circle icon="org-icon-vue" type="primary"></orange-button>
          <orange-button circle icon="org-icon-js" type="success"></orange-button>
          <orange-button circle icon="org-icon-angular" type="danger"></orange-button>
          <orange-button circle icon="org-icon-caishichang-" type="warning"></orange-button>
          <orange-button circle icon="org-icon-icon_QRcode" type="info"></orange-button>
          `
        }
      },
      black: {
        code: {
          html: `
         <div class="codepadding" style="background:#000;">
          <orange-button isblack>Default</orange-button>
          <orange-button isblack type="danger">Danger</orange-button>
        </div>
          `
        }
      },
      line: {
        code: {
          html: `
           <orange-line-button disabled>Default</orange-line-button>
        <orange-line-button disabled type="success">Success</orange-line-button>
        <orange-line-button disabled type="danger">Danger</orange-line-button>
        <orange-line-button disabled type="warn">warn</orange-line-button>
        <orange-line-button disabled type="info">info</orange-line-button>
          `
        }
      },
      disabled: {
        code: {
          html: `
          <orange-button disabled>Default</orange-button>
        <orange-button disabled type="success">Success</orange-button>
        <orange-button disabled type="primary">Primary</orange-button>
        <orange-button disabled type="danger">Danger</orange-button>
        <orange-button disabled icon="org-icon-icon_search" type="primary">Search</orange-button>
          `
        }
      },
      size: {
        code: {
          html: `
          <orange-button size="medium">medium</orange-button>
          <orange-button size="small">small</orange-button>
          <orange-button size="mini">mini</orange-button>
          <orange-line-button  size="medium">medium</orange-line-button>
          <orange-line-button  size="small">small</orange-line-button>
          <orange-line-button  size="mini">mini</orange-line-button>
          <orange-button isblack size="medium">medium</orange-button>
          <orange-button isblack size="small">small</orange-button>
          <orange-button isblack size="mini">mini</orange-button>
          `
        }
      },
      api: [
        {
          parameter: "type",
          description: "设置按钮类型",
          dataTypes: "String",
          optional: "default / primary / success  / danger / warn / info",
          default: "default",
          support: "all"
        },
        {
          parameter: "size",
          description: "设置按钮大小",
          dataTypes: "String",
          optional: "medium/small/mini",
          default: "medium",
          support: "all"
        },
        {
          parameter: "circle",
          description: "是否圆形按钮",
          dataTypes: "Boolean",
          optional: "true/false",
          default: "false",
          support: "all"
        },
        {
          parameter: "round",
          description: "是否椭圆按钮",
          dataTypes: "Boolean",
          optional: "true/false",
          default: "false",
          support: "all"
        },

        {
          parameter: "disabled",
          description: "是否禁用按钮",
          dataTypes: "Boolean",
          optional: "true/false",
          default: "false",
          support: "普通"
        },

        {
          parameter: "icon",
          description: "按钮图标类名",
          dataTypes: "String",
          optional: "",
          default: "",
          support: "普通"
        },
        {
          parameter: "isblack",
          description: "是否开启黑色按钮",
          dataTypes: "Boolean",
          optional: "true/false",
          default: "false",
          support: "普通"
        }
      ],
    };
  },
  
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.codepadding {
  padding: 7px;
}
</style>

