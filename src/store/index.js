import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// 创建一个Store（就是readme文件中图的虚线部分，包含State、Actions、Mutations）
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters: {
    // getters的作用有点像组件中computed，可以对state进行计算返回，避免数据的冗余
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
