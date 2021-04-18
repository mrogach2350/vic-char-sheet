<template>
  <v-container>
    <div class="d-flex justify-end mb-3">
      <v-btn @click="getFormData" color="green"> Save Character </v-btn>
    </div>
    <v-row>
      <v-col cols="6">
        <basic-info
          ref="basicInfo"
          @updateValue="handleUpdateValue"
          :name="characterData.name"
          :gender="characterData.gender"
          :age="characterData.age"
          :lineage="characterData.lineage"
          :alignment="characterData.alignment"
          :physicalDescription="characterData.physicalDescription"
        ></basic-info>
      </v-col>
      <v-col cols="6">
        <ability-scores
          ref="abilityScores"
          @updateValue="handleUpdateValue"
          :lineage="characterData.lineage"
          :str="characterData.str"
          :dex="characterData.dex"
          :con="characterData.con"
          :int="characterData.int"
          :wis="characterData.wis"
          :cha="characterData.cha"
        ></ability-scores>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title>Level Up Choices</v-card-title>
        </v-card>
        <v-card>
          <v-card-title>Abilities</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>Abilities</v-card-title>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import BasicInfo from "@/components/BasicInfo.vue";
import AbilityScores from "@/components/AbilityScores.vue";
import { db } from "@/main.js";
export default {
  components: { BasicInfo, AbilityScores },
  name: "Home",
  data: () => ({
    characterData: {},
  }),
  watch: {
    "$route.params": {
      immediate: true,
      deep: true,
      handler(cur) {
        if (cur && cur.id) {
          const charDetails = this.$store.getters.getCharacterById(cur.id);
          this.characterData = { ...charDetails };
        } else {
          this.characterData = {
            name: "",
            gender: "",
            age: 0,
            lineage: null,
            alignment: null,
            physicalDescription: "",
            str: {
              featBonus: 0,
              lineageBonus: 0,
              baseValue: 8,
            },
            dex: {
              featBonus: 0,
              lineageBonus: 0,
              baseValue: 8,
            },
            con: {
              featBonus: 0,
              lineageBonus: 0,
              baseValue: 8,
            },
            int: {
              featBonus: 0,
              lineageBonus: 0,
              baseValue: 8,
            },
            wis: {
              featBonus: 0,
              lineageBonus: 0,
              baseValue: 8,
            },
            cha: {
              featBonus: 0,
              lineageBonus: 0,
              baseValue: 8,
            },
          };
        }
      },
    },
  },
  methods: {
    async getFormData() {
      await db.collection("characters").add({
        ...this.characterData,
      });
      this.$router.push("/list");
    },
    handleUpdateValue(name, value) {
      switch (name) {
        case "name":
          this.characterData.name = value;
          break;
        case "gender":
          this.characterData.gender = value;
          break;
        case "age":
          this.characterData.age = value;
          break;
        case "lineage":
          this.characterData.lineage = value;
          break;
        case "alignment":
          this.characterData.alignment = value;
          break;
        case "physicalDescription":
          this.characterData.physicalDescription = value;
          break;
        case "Strength":
          this.characterData.str.baseValue = value;
          break;
        case "Dexterity":
          this.characterData.dex.baseValue = value;
          break;
        case "Constitution":
          this.characterData.con.baseValue = value;
          break;
        case "Intelligence":
          this.characterData.int.baseValue = value;
          break;
        case "Wisdom":
          this.characterData.wis.baseValue = value;
          break;
        case "Charisma":
          console.log("name: ", name);
          console.log("value: ", value);
          console.log(
            "this.characterData.cha: ",
            this.characterData.cha.baseValue
          );
          this.characterData.cha.baseValue = value;
          break;
      }
    },
  },
};
</script>
