<template>
  <v-card>
    <v-card-title>Basic Info</v-card-title>
    <v-card-text>
      <v-text-field
        @input="(value) => updateValue('name', value)"
        :value="name"
        outlined
        label="Name"
      ></v-text-field>
      <v-text-field
        @input="(value) => updateValue('gender', value)"
        :value="gender"
        outlined
        label="Gender"
      ></v-text-field>
      <div class="d-flex">
        <v-text-field
          @input="(value) => updateValue('age', value)"
          :value="age"
          outlined
          label="Age"
          type="number"
          suffix=" years old"
          class="mr-3"
        ></v-text-field>
        <v-select
          @input="value => updateValue('alignment', value)"
        :value="alignment"
          outlined
          label="Alignment"
          :items="alignmentOptions"
        ></v-select>
      </div>
      <v-select
        @input="value => updateValue('lineage', value)"
        :value="lineage"
        outlined
        label="Lineage"
        :items="lineageOptions"
      ></v-select>
      <v-textarea
        @input="value => updateValue('physicalDescription', value)"
        :value="physicalDescription"
        rows="3"
        outlined
        label="Physical Description"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
import isEmpty from "lodash/isEmpty";
export default {
  name: "BasicInfo",
  props: [
    "name",
    "gender",
    "age",
    "lineage",
    "alignment",
    "physicalDescription",
  ],
  mounted() {
    if (!isEmpty(this.basicInfo)) {
      this.formData = { ...this.basicInfo };
    }
  },
  data: () => ({
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
  methods: {
    updateValue(name, value) {
      this.$emit("updateValue", name, value);
    },
  },
};
</script>

<style>
</style>