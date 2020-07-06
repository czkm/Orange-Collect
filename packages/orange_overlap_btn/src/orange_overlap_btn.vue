<template>
  <!-- <div class="filter-col layers"> -->
  <button class="button">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
  <!-- </div> -->
</template>
<script>
export default {
  name: "orange-overlap-button",

  data() {
    return {};
  },
  methods: {
    handleClick(evt) {
      // console.log('1')
      this.$emit("click", evt);
    }
  }
};
</script>
<style lang="scss" scoped>
.button + .button {
  margin-left: 10px;
}
.button {
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  // width: 100px;
  padding: 0 20px;
  height: 30px;
  line-height: 25px;
  // padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "PT Sans Narrow", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  margin-top: -5px;
  margin-left: -10px;
  color: #363537;
  border: 3px solid #363537;
  border-radius: 24px;
  background: #85cb33;
  box-shadow: 0 0 0 #ed7d3a, 0 0 0 #ef2d56, 0 0 0 #2fbf71;
  transition: all 0.15s ease-in;
  &:hover {
    margin-top: -12.5px;
    margin-left: -17.5px;
    box-shadow: 5px 5px 0 #ed7d3a, 10px 10px 0 #ef2d56, 15px 15px 0 #2fbf71;
  }
}

@media screen and (max-width: 900px) {
  .layers {
    width: 100%;
    height: 100px;
  }
}
</style>