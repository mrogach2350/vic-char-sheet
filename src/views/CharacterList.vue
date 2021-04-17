<template>
  <v-container>
    <v-data-table :headers="headers" :items="allCharacters"></v-data-table>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CharacterListView',
  data: () => ({
    headers: [
      {
        text: "Name",
        value: "name",
        align: "start",
        sortable: false,
      },
      {
        text: "Age",
        value: "age",
        align: "start",
        sortable: false,
      },
      {
        text: "Alignment",
        value: "alignment",
        align: "start",
        sortable: false,
      },
      {
        text: "Lineage",
        value: "lineage",
        align: "start",
        sortable: false,
      },
    ]
  }),
  computed: {
    ...mapGetters(['getAllCharacters']),
    allCharacters() {
      return this.getAllCharacters.map(record => ({...record.basicInfo}))
    }
  }
}
</script>

<style>

</style>