import BlackBtn from './src/orange_btn.vue'

// 为组件提供 install 安装方法，供按需引入
BlackBtn.install = function (Vue) {
  Vue.component(BlackBtn.name, BlackBtn)
}

// 默认导出组件
export default BlackBtn

