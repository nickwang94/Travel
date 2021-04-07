import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个Store（就是readme文件中图的虚线部分，包含State、Actions、Mutations）
export default new Vuex.Store({
  state: {
    city: '西安'
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
