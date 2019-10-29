<template>
  <q-page padding>
    <div v-if="!currentUser.uid" id="firebaseui-auth-container" />
    <div v-else id="id-card-container">
      <q-card class="id-card">
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <!-- <img :src="avatar"> -->
              <img :src="avatar">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ displayName }}</q-item-label>
            <q-item-label caption>{{ email }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-card-actions>
          <q-btn @click="logoutUser" outline rounded icon="flight_takeoff" color="primary" label="Logout"/>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import { mapState, mapActions } from 'vuex'
// import 'firebaseui/dist/firebasui.css'
let ui = new firebaseui.auth.AuthUI(firebase.auth())

export default {
  mounted () {
    var uiConfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/#/auth'
    }
    // var ui = new firebaseui.auth.AuthUI(firebaseAuth)
    // var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  computed: {
    ...mapState('userStore', ['currentUser']),
    avatar () {
      // return 'img:' + this.currentUser.photoURL
      return this.currentUser.photoURL
    },
    displayName () {
      return this.currentUser.displayName
    },
    email () {
      return this.currentUser.email
    }
  },
  methods: {
    ...mapActions('userStore', ['logoutUser'])
  }
}
</script>

<style>
button.firebaseui-idp-button.mdl-button.mdl-js-button.mdl-button--raised.firebaseui-idp-phone.firebaseui-id-idp-button {
        background: rgb(78, 194, 76)!important;
    }
</style>
