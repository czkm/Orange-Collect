// 导入组件，组件必须声明 name
import RunBtn from './src/orange_run_btn.vue'

RunBtn.install = function (Vue) {
    Vue.component(RunBtn.name, RunBtn)
}

export default RunBtn