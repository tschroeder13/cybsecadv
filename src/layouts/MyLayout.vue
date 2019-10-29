<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerState = !leftDrawerState"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Cyber Security Advisor's Utility Belt
        </q-toolbar-title>

      </q-toolbar><q-btn
          v-if="!currentUser.uid"
          to="/auth"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          flat
          dense
          label="Login" />
        <q-btn
          v-else
          @click="logoutUser"
          class="absolute-right q-pr-sm z-top"
          :icon="imageURL"
          style="background: primary"
          no-caps
          flat
          dense>
          Logout<br>
          {{ currentUser.displayName }}
        </q-btn>
    </q-header>
    <drawerMenu/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import drawerMenu from 'components/drawerMenu'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MyLayout',
  components: {
    drawerMenu
  },
  data () {
    return {
      // leftDrawerOpen: false
    }
  },
  computed: {
    ...mapState('userStore', ['currentUser']),
    ...mapState('localUiStore', ['leftDrawerOpen']),
    leftDrawerState: {
      get: function () {
        return this.leftDrawerOpen
      },
      set: function (open) {
        this.setLeftDrawerOpen(open)
      }
    },
    imageURL () {
      let url = 'img:' + this.currentUser.photoURL
      return url
    }
  },
  methods: {
    ...mapActions('userStore', ['logoutUser']),
    ...mapActions('localUiStore', ['setLeftDrawerOpen'])
  }
}
</script>
