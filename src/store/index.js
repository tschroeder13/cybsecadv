import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
Vue.use(Vuex)

// import example from './module-example'
import userStore from './userStore'
import localUiStore from './localUiStore'
import reptileStore from './reptileStore'
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    mutations: vuexfireMutations,
    modules: {
      userStore,
      localUiStore,
      reptileStore
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
