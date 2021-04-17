<template>
  <v-container>
    <div class="d-flex justify-end mb-3">
      <v-btn @click="getFormData" color="green" v-if="$route.path === '/'">
        Save Character
      </v-btn>
    </div>
    <v-row>
      <v-col cols="6">
        <basic-info
          ref="basicInfo"
          :basicInfo="characterData.basicInfo"
          @updateValue="handleUpdateValue"
        ></basic-info>
      </v-col>
      <v-col cols="6">
        <ability-scores
          ref="abilityScores"
          :lineage="selectedLineage"
          :abilityScores="characterData.abilityScores"
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
    selectedLineage: "",
    characterData: {
      basicInfo: {
        name: "",
        gender: "",
        age: 0,
        lineage: "",
        alignment: "",
        physicalDescription: "",
      },
      abilityScores: {
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
      },
    },
  }),
  methods: {
    async getFormData() {
      const basicInfo = this.$refs.basicInfo.formData;
      const [str, dex, con, int, wis, cha] = this.$refs.abilityScores.items;
      await db.collection("characters").add({
        basicInfo,
        abilityScores: {
          str,
          dex,
          con,
          int,
          wis,
          cha,
          bonusPoint1: this.$refs.abilityScores.bonusPoint1,
          bonusPoint2: this.$refs.abilityScores.bonusPoint2
        },
      });
      this.$router.push("/list");
    },
    handleUpdateValue(name, value) {
      if (name === "lineage") {
        this.selectedLineage = value;
      }
    },
  },
};
</script>
