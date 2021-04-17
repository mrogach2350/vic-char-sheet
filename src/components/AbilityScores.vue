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
import isEmpty from 'lodash/isEmpty'
import { costConverter } from "@/utils/abilityCalculatorUtils.js";
export default {
  name: "AbilityScores",
  props: {
    abilityScores: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    if(!isEmpty(this.abilityScores)) {
      Object.entries(this.abilityScores).forEach(([name, values]) => {
        switch(name) {
          case 'str':
            Object.assign(this.items[0], values)
          case 'dex':
            Object.assign(this.items[1], values)
          case 'con':
            Object.assign(this.items[2], values)
          case 'int':
            Object.assign(this.items[3], values)
          case 'wis':
            Object.assign(this.items[4], values)
          case 'cha':
            Object.assign(this.items[5], values)
        }
      })
    }
  },
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
        baseValue: 8,
      },
      {
        scoreName: "Constitution",
        featBonus: 0,
        lineageBonus: 0,
        baseValue: 8,
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