<template>
   <q-expansion-item
    expand-separator
    icon="settings_applications"
    label="Settings"
    caption="Accounts, Preferences and Stuff"
    :header-inset-level=0
    :content-inset-level=1
  >
    <q-item clickable to="/auth">
      <q-item-section avatar>
        <q-icon name="perm_identity" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Accounts</q-item-label>
        <q-item-label caption>Google, ...</q-item-label>
      </q-item-section>
    </q-item>
   </q-expansion-item>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
