import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numPurchases: 0,
    purchase: []
  },
  mutations: {
    purchaseMut (state, payload) {
      state.purchase.push(payload)
    }
  },
  actions: {
    purchaseAct (context, payload) {
      context.commit('purchaseMut', payload)
    }
  },
  getters: {
    purchase (state) {
      return state.purchase
    }
  }
})
