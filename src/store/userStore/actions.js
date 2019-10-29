
import { firebaseAuth } from 'boot/firebase'

export function setUserDetails ({ commit }, payload) {
  commit('setUserDetails', payload)
}
export function logoutUser () {
  firebaseAuth.signOut()
  this.$router.replace('/auth')
}
export function handleAuthStateChanged ({ commit, dispatch, state }) {
  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      // User is logged in.
      commit('setUserDetails', {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous,
        uid: user.uid,
        providerData: user.providerData
      })
      this.$router.push('/')
    } else {
      // User is logged out.
      commit('setUserDetails', {})
    }
  })
}
