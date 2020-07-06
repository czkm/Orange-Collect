<template>
  <button
    ref="runbtn"
    :style="btnStyle"
    :class="{'active':active}"
    @click="handleClick"
    class="running-button"
  >
    <span class="default">{{RunText}}</span>
    <span class="active">{{IngText}}</span>
    <div class="running">
      <div class="outer">
        <div class="body">
          <div class="arm behind"></div>
          <div class="arm front"></div>
          <div class="leg behind"></div>
          <div class="leg front"></div>
        </div>
      </div>
    </div>
  </button>
</template>
<script>
export default {
  name: "orange-run-button",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    RunText: {
      type: String,
      default: "Run"
    },
    IngText: {
      type: String,
      default: "Ing"
    },

    active: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      btnWidth: "0"
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.btnWidth = this.$refs.runbtn.clientWidth;
    });
  },

  computed: {
    btnStyle() {
      if (this.active) {
        return {
          "--b": `var(--background-active)`,
          "--default-x": "100%",
          "--active-x": "-12%",
          "--running-x": `${this.btnWidth - 10}px`
        };
      } else {
        return "";
      }
      // console.log(this.btn_width)
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style lang="scss" scoped>
.running-button + .running-button {
  // float: left;
  margin-left: 10px;
}

.running {
  --color: red;
  --duration: 0.8s;
  display: inline-block;

  transform: scale(var(--scale, 1));
  .outer {
    animation: outer var(--duration) linear infinite;
    .body {
      // background: var(--color);
      height: 15px;
      width: 8px;
      border-radius: 4px;
      transform-origin: 4px 11px;
      position: relative;
      transform: rotate(32deg);
      animation: body var(--duration) linear infinite;
      &:before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 4px;
        bottom: 16px;
        left: 0;
        position: absolute;
        background: var(--color);
      }
      .arm,
      .arm:before,
      .leg,
      .leg:before {
        content: "";
        width: var(--w, 11px);
        height: 4px;
        top: var(--t, 0);
        left: var(--l, 2px);
        border-radius: 2px;
        transform-origin: 2px 2px;
        position: absolute;
        background: var(--c, var(--color));
        transform: rotate(var(--r, 0deg));
        animation: arm-leg var(--duration) linear infinite;
      }
      .arm {
        &:before {
          --l: 7px;
          animation: arm-b var(--duration) linear infinite;
        }
        &.front {
          --r: 24deg;
          --r-to: 164deg;
          &:before {
            --r: -48deg;
            --r-to: -36deg;
          }
        }
        &.behind {
          --r: 164deg;
          --r-to: 24deg;
          &:before {
            --r: -36deg;
            --r-to: -48deg;
          }
        }
      }
      .leg {
        --w: 12px;
        --t: 11px;
        &:before {
          --t: 0;
          --l: 8px;
        }
        &.front {
          --r: 10deg;
          --r-to: 108deg;
          &:before {
            --r: 18deg;
            --r-to: 76deg;
          }
        }
        &.behind {
          --r: 108deg;
          --r-to: 10deg;
          --c: none;
          &:before {
            --c: var(--color);
            --r: 76deg;
            --r-to: 18deg;
          }
          &:after {
            content: "";
            top: 0;
            right: 0;
            height: 4px;
            width: 6px;
            clip-path: polygon(2px 0, 6px 0, 6px 4px, 0 4px);
            border-radius: 0 2px 2px 0;
            position: absolute;
            background: var(--color);
          }
        }
      }
    }
  }
}
.running-button {
  // --run: 108px;
  --color: #f6f8ff;
  --background: #ff69b4;
  --background-hover: #{darken(#ff69b4, 5%)};
  --background-active: #1e90ff;
  --background-active-hover: #{darken(#1e90ff, 5%)};
  --shadow: #{rgba(#00093d, 0.2)};
  --padding-y: 4px;
  --padding-x: 36px;
  margin: 0;
  padding: var(--padding-y) 0;
  font-size: 14px;
  font-weight: 500;
  border-radius: 24px;
  line-height: 23px;
  position: relative;
  border: none;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  transition: box-shadow 0.3s, transform 0.3s, background 0.4s;
  box-shadow: 0 var(--shadow-y, 4px) var(--shadow-blur, 12px) var(--shadow);
  color: var(--color);
  background: var(--b, var(--background));
  transform: translateY(var(--y, 0));
  // width: 100px;
  padding: 5px 10px;
  // height: 30px;
  span {
    display: block;
    transition: transform 0.4s ease;
    transform: translateX(var(--x, 0));
    padding: 0 var(--padding-x);
    &.default {
      --x: var(--default-x, 0);
    }
    &.active {
      --x: var(--active-x, -100%);
      margin-top: -23px;
    }
  }
  .running {
    --scale: 0.64;
    --color: #fff;
    position: absolute;
    top: 5px;
    right: 105%;
    transition: transform 0.4s ease;
    transform: translateX(var(--running-x, -8px)) scale(var(--scale));
  }
  &:hover {
    --b: var(--background-hover);
    --y: -2px;
    --shadow-y: 8px;
    --shadow-blur: 16px;
    --default-x: 4px;
    --running-x: var(--padding-x);
  }
  &:active {
    --y: 1px;
    --shadow-y: 4px;
    --shadow-blur: 8px;
  }
  // &.active {
  //   --b: var(--background-active);
  //   --default-x: 100%;
  //   --active-x: -12%;
  //   --running-x: var(--run);
  .active:hover {
    --b: var(--background-active-hover);
  }
  // .running {
  //   right: 140%;
  // }
  // }
}
@keyframes outer {
  50% {
    transform: translateY(0);
  }
  25%,
  75% {
    transform: translateY(4px);
  }
}
@keyframes body {
  50% {
    transform: rotate(16deg);
  }
  25%,
  75% {
    transform: rotate(24deg);
  }
}
@keyframes arm-leg {
  50% {
    transform: rotate(var(--r-to));
  }
}
@keyframes arm-b {
  30%,
  70% {
    transform: rotate(var(--r-to));
  }
}
</style>