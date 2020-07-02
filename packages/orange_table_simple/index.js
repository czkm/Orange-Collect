// 导入组件，组件必须声明 name
import TableSimple from './src/orange_table_simple.vue'

TableSimple.install = function (Vue) {
    Vue.component(TableSimple.name, TableSimple)
}

export default TableSimple