<template>
  <q-page padding>
    <h1>Sign In</h1>
    <div id="walter" />
  </q-page>
</template>

<script>
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebasui.css'
let ui = new firebaseui.auth.AuthUI(firebase.auth())

export default {
  mounted () {
    var uiConfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/#/success'
    }
    // var ui = new firebaseui.auth.AuthUI(firebaseAuth)
    // var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#walter', uiConfig)
  }
}
</script>

<style>
</style>
