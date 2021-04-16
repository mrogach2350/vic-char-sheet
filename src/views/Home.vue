<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <basic-info :data="characterData.basicInfo"></basic-info>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>Ability Scores</v-card-title>
          <v-card-text>
            <ability-scores :data="characterData.abilityScores"></ability-scores>
          </v-card-text>
        </v-card>
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
export default {
  components: { BasicInfo, AbilityScores },
  name: "Home",
  data: () => ({
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
          baseValue: 0,
        },
        dex: {
          featBonus: 0,
          lineageBonus: 0,
          baseValue: 0,
        },
        con: {
          featBonus: 0,
          lineageBonus: 0,
          baseValue: 0,
        },
        int: {
          featBonus: 0,
          lineageBonus: 0,
          baseValue: 0,
        },
        wis: {
          featBonus: 0,
          lineageBonus: 0,
          baseValue: 0,
        },
        cha: {
          featBonus: 0,
          lineageBonus: 0,
          baseValue: 0,
        },
      },
    },
  }),
};
</script>
