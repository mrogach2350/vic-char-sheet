<template>
  <v-card>
    <v-card-title>Basic Info</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="formData.name"
        outlined
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="formData.gender"
        outlined
        label="Gender"
      ></v-text-field>
      <div class="d-flex">
        <v-text-field
          v-model="formData.age"
          outlined
          label="Age"
          type="number"
          suffix=" years old"
          class="mr-3"
        ></v-text-field>
        <v-select
          v-model="formData.alignment"
          outlined
          label="Alignment"
          :items="alignmentOptions"
        ></v-select>
      </div>
      <v-select
        v-model="formData.lineage"
        outlined
        label="Lineage"
        :items="lineageOptions"
      ></v-select>
      <v-textarea
        v-model="formData.physicalDescription"
        rows="3"
        outlined
        label="Physical Description"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BasicInfo",
  data: () => ({
    formData: {
      name: "",
      gender: "",
      age: null,
      lineage: null,
      alignment: null,
      physicalDescription: "",
    },
    lineageOptions: [
      { text: "--none--", value: null },
      "Dragonborn",
      "Dwarf - Hill",
      "Dwarf - Mountain",
      "Elf - Drow",
      "Elf - High",
      "Elf - Wood",
      "Gnome - Forest",
      "Gnome - Rock",
      "Half-Elf",
      "Half-Orc",
      "Halfling - Lightfoot",
      "Halfling - Stout",
      "Human - Standard",
      "Human - Variant",
      "Tiefling",
    ],
    alignmentOptions: [
      { text: "--none--", value: null },
      "CE",
      "CG",
      "CN",
      "LE",
      "LG",
      "LN",
      "NE",
      "NG",
      "TN",
    ],
  }),
};
</script>

<style>
</style>