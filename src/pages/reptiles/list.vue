<template>
  <q-page padding>
    <!-- {{reptiles}} -->
    <q-table
      title="Reptiles"
      dense=""
      :data="reptiles"
      :columns="columns"
      row-key="__index"
      @row-click="editItem"
    />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" @click="prompt = true" />
    </q-page-sticky>

    <q-dialog v-model="prompt" >
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Name of the game</div>
          </q-card-section>

          <q-card-section>
            <q-input v-model="newReptileName" @keyup.enter="addReptile" label="Name of the Reptile">
            <template v-slot:prepend>
              <q-icon name="img:/statics/chameleon.png" />
            </template>
          </q-input>
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup @click="newReptileName = ''"/>
            <q-btn flat label="Save & Close" v-close-popup @click="addNewReptile"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
  </q-page>
</template>

<script>
import {
  mapGetters
  // , mapState
  , mapActions
// ,mapMutations
} from 'vuex'
export default {
  data () {
    return {
      prompt: false,
      columns: [
        { name: 'repName', label: 'Name', field: 'name', sortable: true },
        { name: 'repTime', label: 'TimeStamp', field: 'timestamp', format: val => `${new Date(val.seconds * 1000).toLocaleString()}`, sortable: true }
      ]
    }
  },
  methods: {
    ...mapActions('reptileStore/', [
      'addReptile',
      'setNewReptile'
    ]),
    addNewReptile: function () {
      this.$store.dispatch('reptileStore/addReptile')
      this.prompt = false
    },
    editItem: function (evt, row) {
      console.dir('Name : ' + row.name)
      /* eslint space-in-parens: ["error", "never", { "exceptions": ["()"] }] */
      console.dir('Created : ' + new Date(row.timestamp.seconds * 1000).toLocaleString() )
      this.newReptileName = row.name
      this.prompt = true
    }
  },
  computed: {
    // ...mapState('reptileStore', 'newReptile'),
    newReptileName: {
      get: function getNewReptileName () {
        return this.$store.state.reptileStore.newReptile
      },
      set: function setNewReptileName (newValue) {
        this.setNewReptile(newValue)
        // this.prompt = false
      }
    },
    ...mapGetters({ reptiles: 'reptileStore/reptiles' })
  },
  created () {
    this.$store.dispatch('reptileStore/bindReptiles')
  }
}
</script>
