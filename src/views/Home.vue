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
        ></basic-info>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>Ability Scores</v-card-title>
          <v-card-text>
            <ability-scores
              ref="abilityScores"
              :lineage="characterData.basicInfo.lineage"
              :abilityScores="characterData.abilityScores"
            ></ability-scores>
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
    getFormData() {
      const basicInfo = this.$refs.basicInfo.formData;
      const abilityScores = this.$refs.abilityScores.items;
      console.log("basicInfo: ", basicInfo);
      console.log("abilityScores: ", abilityScores);
    },
  },
};
</script>
