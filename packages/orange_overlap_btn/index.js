import OverlapBtn from './src/orange_overlap_btn.vue'

// 为组件提供 install 安装方法，供按需引入
OverlapBtn.install = function (Vue) {
  Vue.component(OverlapBtn.name, OverlapBtn)
}

// 默认导出组件
export default OverlapBtn

