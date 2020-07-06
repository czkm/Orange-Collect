import ReflectBtn from './src/orange_reflect_btn.vue'

// 为组件提供 install 安装方法，供按需引入
ReflectBtn.install = function (Vue) {
  Vue.component(ReflectBtn.name, ReflectBtn)
}

// 默认导出组件
export default ReflectBtn

