<template>
  <div>
    <v-data-table :headers="headers" :items="items" hide-default-footer>
      <template v-slot:item.total="{ item }">
        {{ item.featBonus + item.lineageBonus + item.baseValue }}
      </template>
      <template v-slot:item.cost="{ item }">
        {{ costConverter(item.baseValue) }}
      </template>
    </v-data-table>
    <v-card width="200">
      <v-card-title>
        Points Remaining
      </v-card-title>
      <v-card-text>
        {{ pointsRemaining }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { costConverter } from "@/utils/abilityCalculatorUtils.js";
export default {
  name: "AbilityScores",
  data: () => ({
    headers: [
      {
        text: "Ability Score",
        value: "scoreName",
        align: "start",
        sortable: false
      },
      {
        text: "Total",
        value: "total",
        align: "start",
        sortable: false
      },
      {
        text: "Feat",
        value: "featBonus",
        align: "start",
        sortable: false
      },
      {
        text: "Lineage",
        value: "lineageBonus",
        align: "start",
        sortable: false
      },
      {
        text: "Starting",
        value: "baseValue",
        align: "start",
        sortable: false
      },
      {
        text: "Cost",
        value: "cost",
        align: "start",
        sortable: false
      },
    ],
    items: [
      {
        scoreName: "Strength",
        featBonus: 2,
        lineageBonus: 0,
        baseValue: 8,
      },
      {
        scoreName: "Dexterity",
        featBonus: 0,
        lineageBonus: 0,
        baseValue: 9,
      },
      {
        scoreName: "Constitution",
        featBonus: 0,
        lineageBonus: 0,
        baseValue: 13,
      },
      {
        scoreName: "Intelligence",
        featBonus: 0,
        lineageBonus: 0,
        baseValue: 8,
      },
      {
        scoreName: "Wisdom",
        featBonus: 0,
        lineageBonus: 0,
        baseValue: 8,
      },
      {
        scoreName: "Charisma",
        featBonus: 0,
        lineageBonus: 0,
        baseValue: 8,
      },
    ],
  }),
  computed: {
    pointsRemaining() {
      const totalPoints = 27
      const pointCost = this.items.reduce((agg, item) => {
        const cost = costConverter(item.baseValue)
        agg += cost
        return agg
      }, 0)
      return totalPoints - pointCost
    }
  },
  methods: {
    costConverter,
  },
};
</script>

<style>
</style>