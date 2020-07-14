<template>
  <div class="content-box">
    <h2 class="demo-title">基础组件</h2>
    <p class="demo-introduction">这里是一些基础组件的展示</p>

    <orange-anchor>
      <orange-anchor-link href="card" title="card阴影" />
      <orange-anchor-link href="anchor" title="Rocket按钮" />
      <orange-anchor-link href="input" title="输入框" />
      <orange-anchor-link href="api" title="API" />
    </orange-anchor>

    <!-- <h3 class="demo-table-title" id="button-simple">基础用法</h3> -->
    <!-- 基础用法DEMO -->
    <orange-demo-block :height="180" :title="'card信息展示组件'" id="card">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-card>
            <template #header>
              <h1>头部插槽</h1>
            </template>
            内部内容
          </orange-card>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(card.code.html)}}</code>
      </template>
    </orange-demo-block>
    <orange-demo-block :height="220" :title="'锚点'" id="anchor" introduction="通过点击按钮或侧边栏跳转">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-anchor customize>
            <orange-anchor-link href="api" title="API">
              <orange-button icon="org-icon-arrow-down" type="primary">前往API</orange-button>
            </orange-anchor-link>
          </orange-anchor>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(anchor.code.html)}}</code>
      </template>
    </orange-demo-block>
    <!-- 线性按钮 -->
    <orange-demo-block
      :height="80"
      :title="'输入框'"
      id="input"
    >
      <template v-slot:demo>
          <orange-input placeholder="请输入" v-model="inputvalue" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(input.code.html)}}</code>
      </template>
    </orange-demo-block>
    <!-- 禁用DEMO -->
    

    <!-- 按钮尺寸 -->
    <!-- <orange-demo-block
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
    </orange-demo-block>-->

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
      inputvalue: "",
      thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
      // a: document.getElementById("router_view_box"),
      card: {
        code: {
          html: `
        <orange-card >
            <template #header>
              <h1>头部插槽</h1>
            </template>
            内部内容
        </orange-card>
          `
        }
      },
      anchor: {
        code: {
          html: `
         <div class="codepadding">
          <orange-anchor customize>
            <orange-anchor-link href="api" title="API">
              <orange-button icon="org-icon-arrow-down" type="primary">前往API</orange-button>
            </orange-anchor-link>
          </orange-anchor>
        </div>
          `
        }
      },
      input: {
        code: {
          html: `
          <orange-input placeholder="请输入" v-model="inputvalue" />
          `
        }
      },


      api: [
        {
          parameter: "position",
          description: "导航栏位置",
          dataTypes: "String",
          optional: "left / right",
          default: "right",
          support: "Anchor"
        },

        {
          parameter: "customize",
          description: "开启自定义",
          dataTypes: "Boolean",
          optional: "true / false",
          default: "false",
          support: "Anchor"
        },
        {
          parameter: "placeholder",
          description: "用来输入提示信息",
          dataTypes: "String",
          optional: "",
          default: "",
          support: "Input"
        },
          {
          parameter: "title",
          description: "导航文字内容",
          dataTypes: "String",
          optional: "",
          default: "Title",
          support: "AnchorLink"
        },
         {
          parameter: "header",
          description: "头部插槽",
          dataTypes: "String",
          optional: "header",
          default: "",
          support: "card信息展示组件"
        },
        
      ]
    };
  },

  methods: {
    test() {
      console.log("点击");
      // console.log(this.isactive);
    },

   
  }
};
</script>
<style lang="scss" scoped>
.codepadding {
  padding: 7px;
}
</style>

