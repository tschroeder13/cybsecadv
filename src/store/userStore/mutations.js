export function setUserDetails (state, payload) {
  console.log('mutations payload: ' + payload)

  state.currentUser = payload
}
