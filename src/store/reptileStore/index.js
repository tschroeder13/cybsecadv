// import state from './state'
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

import { firestoreAction } from 'vuexfire'
import { firebase, firestore } from '../../boot/firebase'

export default {
  namespaced: true,
  state: {
    newReptile: '',
    reptiles: []
  },
  getters: {
    reptiles: state => { return state.reptiles }
  },
  // mutations: { ...vuexfireMutations },
  actions: {
    bindReptiles: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('reptiles', firestore.collection('reptiles'))
    }),
    addReptile: firestoreAction(context => {
      let ret = firestore.collection('reptiles').add({
        name: context.state.newReptile,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      // context.state.newReptile = ''
      context.commit('SET_NEW_REPTILE', '')

      return ret
    }),
    setNewReptile (context, reptileName) {
      context.commit('SET_NEW_REPTILE', reptileName)
    }
  },
  mutations: {
    SET_NEW_REPTILE (state, name) {
      state.newReptile = name
    }
  }
}
