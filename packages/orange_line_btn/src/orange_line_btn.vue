
<template >
  <!-- :style="{width: `${btn_width}px`,height:`${btn_hight}px`}" -->

  <button
    class="orange-line-button"
    @click="handleClick"
    :autofocus="autofocus"
    :class="[
      type ?  `${type}-btn`:'' ,
      buttonSize ? 'orange-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
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

    disabled: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  name: "orange-line-button",
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
$default: #409eff;
$success: #67c23a;
$danger: #f56c6c;
$info: #909399;
$warn: #cf9236;
@mixin colorBtn($color) {
  background: $color;
  &:hover {
    color: $color;
    &:before,
    &:after {
      background: $color;
    }
  }
}
.orange-line-button + .orange-line-button {
  margin-left: 10px;
}
.default-btn {
  @include colorBtn($default);
}

.success-btn {
  @include colorBtn($success);
}

.danger-btn {
  @include colorBtn($danger);
}

.info-btn {
  @include colorBtn($info);
}
.warn-btn {
  @include colorBtn($warn);
}

.orange-line-button {
  font-size: 14px;
  color: #fff;
  padding: 14px 36px;
  border-radius: 8px;
  border: none;
  outline: none;
  transition: 600ms ease all;
  position: relative;
  display: inline-block;

  &:hover {
    background: #fff;
    &:before,
    &:after {
      width: 100%;
      transition: 600ms ease all;
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    transition: 400ms ease all;
  }

  &::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  .is-disabled:hover {
      background: red;
    &:before,
    &:after {
      width: 100%;
      transition: 600ms ease all;
    }
  }
}

.custom-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
}

.orange-line-button.is-round {
  border-radius: 20px;
  // padding: 12px 23px
}

.orange-line-button.is-circle {
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
</style>
