// 导入组件，组件必须声明 name
import RocketBtn from './src/orange_rocket_btn.vue'

RocketBtn.install = function (Vue) {
    Vue.component(RocketBtn.name, RocketBtn)
}

export default RocketBtn