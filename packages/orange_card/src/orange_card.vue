<template>
  <div class="orange-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="orange-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="orange-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'orange-card',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String,
        default:'hover'
      }
    }
  };
</script>
<style lang="scss" scoped>
.orange-card {
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    overflow: hidden;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s
}

.orange-card.is-always-shadow,
.orange-card.is-hover-shadow:focus,
.orange-card.is-hover-shadow:hover {
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.orange-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #EBEEF5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.orange-card__body {
    padding: 20px
}
</style>