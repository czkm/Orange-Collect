// 导入组件，组件必须声明 name
import DemoBlock from './src/orange_demo_block.vue'

DemoBlock.install = function (Vue) {
    Vue.component(DemoBlock.name, DemoBlock)
}

export default DemoBlock