import LineBtn from './src/orange_line_btn.vue'

// 为组件提供 install 安装方法，供按需引入
LineBtn.install = function (Vue) {
  Vue.component(LineBtn.name, LineBtn)
}

// 默认导出组件
export default LineBtn

