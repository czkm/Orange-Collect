// 导入组件，组件必须声明 name
import Card from './src/orange_card.vue'

Card.install = function (Vue) {
    Vue.component(Card.name, Card)
}

export default Card