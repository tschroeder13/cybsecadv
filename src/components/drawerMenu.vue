<template>
    <q-drawer
    v-model="leftDrawerState"
    show-if-above
    bordered
    content-class="bg-grey-2"
    >
      <q-list bordered separator>
        <settingsMenu/>
        <helpMenu/>
      </q-list>
    </q-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  components: {
    helpMenu: () => import('components/menus/helpMenu'),
    settingsMenu: () => import('components/menus/settingsMenu')
  },
  computed: {
    ...mapState('localUiStore', ['leftDrawerOpen']),
    leftDrawerState: {
      get: function () {
        return this.leftDrawerOpen
      },
      set: function (open) {
        this.setLeftDrawerOpen(open)
      }
    }
  },
  methods: {
    ...mapActions('localUiStore', ['setLeftDrawerOpen'])
  }
}
</script>
