
import { firebaseAuth } from 'boot/firebase'

export function setUserDetails ({ commit }, payload) {
  console.log('Action setUserDetails with: ' + JSON.parse(JSON.stringify(payload)))

  commit('setUserDetails', payload)
}
// eslint-disable-next-line no-empty-pattern
export function loginUser ({ }, payload) {
  firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error.message)
    })
}
export function logoutUser () {
  firebaseAuth.signOut()
}
export function handleAuthStateChanged ({ commit, dispatch, state }) {
  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      // console.log('Fired onAuthStateChanged with user: ' + JSON.stringify(user))
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
      console.log('Fired onAuthStateChanged with Logout')
      // User is logged out.
      commit('setUserDetails', {})
      this.$router.replace('/auth')
    }
  })
}
