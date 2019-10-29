<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('userStore', ['currentUser'])
  },
  methods: {
    ...mapActions('userStore', ['logoutUser'])
  }
}
</script>
