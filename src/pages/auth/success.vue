<template>
  <q-page padding>
    <div>
      <h3>Willkommen {{name}}!</h3>
      <p><button @click='logOut'>Log out</button></p>
      <p>{{ currentUser.displayName }}</p>
      <!-- <p>FOTO:<img :src='photo' style='height: 120px'> </p>
      <p>Name: {{name}}</p>
      <p>Email: {{email}}</p>
      <p>ID: {{userId}}</p> -->
  </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('userStore', ['currentUser'])
  },
  methods: {
    ...mapActions('userStore', ['logoutUser'])
  }
}
</script>
