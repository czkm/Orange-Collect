
<template >
  <!-- :style="{width: `${btn_width}px`,height:`${btn_hight}px`}" -->

  <button
    v-if="isblack"
    class="orange-button"
    :class="[
      type =='danger'? 'orange-button-danger'  : 'orange-button--default',
      buttonSize ? 'orange-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :disabled="buttonDisabled "
    @click="handleClick"
  >
    <!-- <span class="name">{{title}}</span> -->
    <i class="iconfont" :class="icon" v-if="icon && !loading"></i>
    <span class="name" v-if="$slots.default">
      <slot></slot>
    </span>
    <span class="lefttop"></span>
    <span class="rightbottom"></span>
  </button>
  <button
    v-else
    class="orange-button"
    @click="handleClick"
    :disabled="buttonDisabled "
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'orange-button--' + type : '',
      buttonSize ? 'orange-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <!-- <i class="iconfont org-icon-icon_refresh" v-if="loading"></i> -->
    <i class="iconfont" :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String,
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    isblack: {
      type: Boolean,
      default: false
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  name: "orange-button",
  data() {
    return {};
  },

  computed: {
    buttonSize() {
      return this.size;
    },
    buttonDisabled() {
      return this.disabled;
    }
    // btnStyle() {
    //   // console.log(this.btn_width)
    //   return {
    //     width: `${this.btn_width}px`,
    //     height: `${this.btn_hight}px`,
    //     "line-height": `${this.btn_hight}px`
    //   };
    // }
  },

  // watch:
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style lang="scss" scoped>
$primary: rgba(223, 245, 255, 1); /*1.这就是声明变量*/
$danger: rgba(192, 26, 129, 1); /*1.这就是声明变量*/

.orange-button + .orange-button {
  margin-left: 10px;
}

.orange-button {
  background-color: rgba(223, 245, 255, 0);

  // background: #000;
  // width: 120px;
  // height: 30px;

  text-align: center;
  margin: 0 30px 30px 0;
  font-size: 14px;
  border-radius: 4px;
  // line-height: 30px;
  box-sizing: border-box;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  display: inline-block;
  .name {
    // transition-delay: 0s;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
.orange-button:focus,
.orange-button:hover {
  //   color: #409eff;
  border-color: #c6e2ff;
  //   background-color: #ecf5ff;
}

.orange-button-danger:focus,
.orange-button-danger:hover {
  //   color: #409eff;
  border-color: $danger;
  //   background-color: #ecf5ff;
}
// .orange-button.on {
//   border: 1px solid $primary;
// }

// .orange-button-danger.on {
//   border: 1px solid $danger;
// }
.orange-button {
  opacity: 1 !important;
}
// .orange-button:nth-child(2n) {
//   margin-left: 8px;
// }

.orange-button {
  // opacity: 0 !important;
  transition: opacity 0.5s;
  border: 1px solid rgba(52, 64, 69, 1);
}
.orange-button-danger {
  // opacity: 0 !important;
  transition: opacity 0.5s;
  border: 1px solid rgba(192, 26, 129, 0.5); /*1.这就是声明变量*/
}
.orange-button .name {
  color: $primary;
}
.orange-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  //   background: #fff;
  color: $primary;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  //   margin-left: 8px;
  //   padding: 12px 20px;
  // float: left;
  position: relative;
  //   width: 146px;
  //   height: 36px;
  //   margin-top: 4px;
  //   margin-bottom: 4px;
  transition: all 0.6s ease-in-out; /*W3C标准*/
}

// .orange-button:after {
//   height: 38px;
//   width: 128px;
// }
.orange-button.on:after {
  opacity: 0.5;
}
.orange-button:after {
  border: 1px solid rgba(52, 64, 69, 1);
}
.orange-button:after {
  content: "";
  position: absolute;
  //   height: 44px;
  //   width: 154px;
  opacity: 0;
  top: -5px;
  left: -5px;
}
// .orange-button.on .lefttop:after,
// .orange-button.on .lefttop:before {
//   top: -6px;
//   left: -6px;
// }
// .orange-button.on .rightbottom:after,
// .orange-button.on .rightbottom:before {
//   bottom: -6px;
//   right: -6px;
// }

// .orange-button .lefttop:before {
//     top: -6px;
//     left: -6px;
//     background: rgba(255,255,255,1)
// }
// .orange-button .rightbottom:before {
//     bottom: -6px;
//     right: -6px;
//     background: rgba(255,255,255,1)
// }

.orange-button .lefttop:after,
.orange-button .lefttop:before {
  top: -1px;
  left: -1px;
}
.orange-button .rightbottom:after,
.orange-button .rightbottom:before {
  bottom: -1px;
  right: -1px;
}
.orange-button .lefttop:before,
.orange-button .lefttop:after,
.orange-button.on,
.orange-button .rightbottom:after,
.orange-button .rightbottom:before,
.orange-button--primary .rightbottom:after,
.orange-button--primary .rightbottom:before,
.orange-button--primary .lefttop:before,
.orange-button--primary .lefttop:after,
.orange-button--primary.on {
  background: $primary;
} //颜色
.orange-button-danger .rightbottom:after,
.orange-button-danger .rightbottom:before,
.orange-button-danger .lefttop:before,
.orange-button-danger .lefttop:after,
.orange-button-danger.on {
  background: $danger;
} //颜色

.orange-button .lefttop:before,
.orange-button .rightbottom:before {
  content: "";
  height: 7px;
  width: 1px;
  position: absolute;
  display: block;
  transition: all 0.4s ease-in-out; /*W3C标准*/
}
.orange-button .lefttop:after,
.orange-button .rightbottom:after {
  content: "";
  display: block;
  height: 1px;
  width: 7px;
  position: absolute;
  transition: all 0.4s ease-in-out; /*W3C标准*/
}

// .is-disabled:hover .lefttop:after,
// .is-disabled:hover .lefttop:before {
//   top: -1px;
//   left: -1px;
// }
// .is-disabled:hover .rightbottom:after,
// .is-disabled:hover .rightbottom:before {
//   bottom: -1px;
//   right: -1px;
// }

.orange-button.is-disabled:hover .lefttop:after,
.orange-button.is-disabled:hover .lefttop:before {
  top: -1px;
  left: -1px;
}
.orange-button.is-disabled:hover .rightbottom:after,
.orange-button.is-disabled:hover .rightbottom:before {
  bottom: -1px;
  right: -1px;
}

.orange-button:hover .lefttop:after,
.orange-button:hover .lefttop:before {
  top: -6px;
  left: -6px;
}
.orange-button:hover .rightbottom:after,
.orange-button:hover .rightbottom:before {
  bottom: -6px;
  right: -6px;
}

.orange-button.is-round {
  border-radius: 20px;
  // padding: 12px 23px
}

.orange-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

.orange-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.orange-button--mini,
.orange-button--small {
  font-size: 12px;
  border-radius: 3px;
}

.orange-button--medium.is-round {
  padding: 10px 20px;
}

.orange-button--medium.is-circle {
  padding: 10px;
}

.orange-button--small,
.orange-button--small.is-round {
  padding: 9px 15px;
}

.orange-button--small.is-circle {
  padding: 9px;
}

.orange-button--mini,
.orange-button--mini.is-round {
  padding: 7px 15px;
}

.orange-button--mini.is-circle {
  padding: 7px;
}
.orange-button--default,
.orange-button--primary:focus,
.orange-button--primary:hover,
.orange-button--primary.is-active,
.orange-button--primary:active {
  color: #3a8ee6;
}
.orange-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.orange-button--primary:focus,
.orange-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.orange-button--primary.is-active,
.orange-button--primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}

.orange-button--primary:active {
  outline: 0;
}
.orange-button--default.is-disabled,
.orange-button--default.is-disabled:active,
.orange-button--default.is-disabled:focus,
.orange-button--default.disabled:hover
{
  color: #3a8ee6;
  // background-color: #a0cfff;
  border-color: #a0cfff;
}

.orange-button--primary.is-disabled,
.orange-button--primary.is-disabled:active,
.orange-button--primary.is-disabled:focus,
.orange-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

.orange-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}

.orange-button--primary.is-plain:focus,
.orange-button--primary.is-plain:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}

.orange-button--primary.is-plain:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
  outline: 0;
}

.orange-button--primary.is-plain.is-disabled,
.orange-button--primary.is-plain.is-disabled:active,
.orange-button--primary.is-plain.is-disabled:focus,
.orange-button--primary.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}

.orange-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.orange-button--success:focus,
.orange-button--success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.orange-button--success.is-active,
.orange-button--success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
}

.orange-button--success:active {
  outline: 0;
}

.orange-button--success.is-disabled,
.orange-button--success.is-disabled:active,
.orange-button--success.is-disabled:focus,
.orange-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.orange-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}

.orange-button--success.is-plain:focus,
.orange-button--success.is-plain:hover {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}

.orange-button--success.is-plain:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
  outline: 0;
}

.orange-button--success.is-plain.is-disabled,
.orange-button--success.is-plain.is-disabled:active,
.orange-button--success.is-plain.is-disabled:focus,
.orange-button--success.is-plain.is-disabled:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.orange-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.orange-button--warning:focus,
.orange-button--warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

.orange-button--warning.is-active,
.orange-button--warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
}

.orange-button--warning:active {
  outline: 0;
}

.orange-button--warning.is-disabled,
.orange-button--warning.is-disabled:active,
.orange-button--warning.is-disabled:focus,
.orange-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

.orange-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}

.orange-button--warning.is-plain:focus,
.orange-button--warning.is-plain:hover {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}

.orange-button--warning.is-plain:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
  outline: 0;
}

.orange-button--warning.is-plain.is-disabled,
.orange-button--warning.is-plain.is-disabled:active,
.orange-button--warning.is-plain.is-disabled:focus,
.orange-button--warning.is-plain.is-disabled:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.orange-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.orange-button--danger:focus,
.orange-button--danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}

.orange-button--danger.is-active,
.orange-button--danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
}

.orange-button--danger:active {
  outline: 0;
}

.orange-button--danger.is-disabled,
.orange-button--danger.is-disabled:active,
.orange-button--danger.is-disabled:focus,
.orange-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.orange-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}

.orange-button--danger.is-plain:focus,
.orange-button--danger.is-plain:hover {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}

.orange-button--danger.is-plain:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
  outline: 0;
}

.orange-button--danger.is-plain.is-disabled,
.orange-button--danger.is-plain.is-disabled:active,
.orange-button--danger.is-plain.is-disabled:focus,
.orange-button--danger.is-plain.is-disabled:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.orange-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.orange-button--info:focus,
.orange-button--info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

.orange-button--info.is-active,
.orange-button--info:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
}

.orange-button--info:active {
  outline: 0;
}

.orange-button--info.is-disabled,
.orange-button--info.is-disabled:active,
.orange-button--info.is-disabled:focus,
.orange-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

.orange-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}

.orange-button--info.is-plain:focus,
.orange-button--info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
}

.orange-button--info.is-plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
  outline: 0;
}

.orange-button--info.is-plain.is-disabled,
.orange-button--info.is-plain.is-disabled:active,
.orange-button--info.is-plain.is-disabled:focus,
.orange-button--info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}

</style>
