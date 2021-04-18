<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="allCharacters"
      @click:row="({ id }) => $router.push(`/list/${id}`)"
    ></v-data-table>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CharacterListView",
  data: () => ({
    headers: [
      {
        text: "Name",
        value: "name",
        align: "start",
      },
      {
        text: "Age",
        value: "age",
        align: "start",
      },
      {
        text: "Alignment",
        value: "alignment",
        align: "start",
      },
      {
        text: "Lineage",
        value: "lineage",
        align: "start",
      },
      {
        text: "Id",
        value: "id",
        align: " d-none",
      },
    ],
  }),
  computed: {
    ...mapGetters(["getAllCharacters"]),
    allCharacters() {
      return this.getAllCharacters.map((record) => ({
        ...record,
        id: record.id,
      }));
    },
  },
  methods: {
    handleCharacterSelect(val) {
      console.log("val: ", val);
    },
  },
};
</script>

<style>
</style>