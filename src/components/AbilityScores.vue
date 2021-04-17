<template>
  <v-card>
    <v-card-title>Ability Scores</v-card-title>
    <v-card-text>
      <v-checkbox></v-checkbox>
      <v-data-table :headers="headers" :items="items" hide-default-footer>
        <template v-slot:item.total="{ item }">
          {{ totalValue(item) }}
        </template>
        <template v-slot:item.lineageBonus="{ item }">
          {{ lineageValue(item) }}
        </template>
        <template v-slot:item.baseValue="{ item }">
          <v-btn
            @click="updateBaseValue(item.scoreName, item.baseValue, 'decrease')"
            icon
            x-small
          >
            -
          </v-btn>
          {{ item.baseValue }}
          <v-btn
            @click="updateBaseValue(item.scoreName, item.baseValue, 'increase')"
            icon
            x-small
          >
            +
          </v-btn>
        </template>
        <template v-slot:item.cost="{ item }">
          {{ costConverter(item.baseValue) }}
        </template>
      </v-data-table>
      <div class="d-flex">
        <v-card width="200" class="mr-3">
          <v-card-title> Points Remaining </v-card-title>
          <v-card-text
            class="d-flex justify-end pr-6 font-weight-bold"
            :class="{
              'green--text': pointsRemaining === 0,
              'red--text': pointsRemaining < 0,
              'yellow--text': pointsRemaining > 0,
            }"
          >
            {{ pointsRemaining }}
          </v-card-text>
        </v-card>
        <v-card v-if="selectTwo" width="400">
          <v-card-title> Bonus Points </v-card-title>
          <v-card-text class="d-flex">
            <v-select
              class="mr-3"
              label="Bonus Ability Point 1"
              :items="bonusAbilityOptions"
              v-model="bonusPoint1"
            ></v-select>
            <v-select
              label="Bonus Ability Point 2"
              :items="bonusAbilityOptions"
              v-model="bonusPoint2"
            ></v-select>
          </v-card-text>
        </v-card>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import isEmpty from "lodash/isEmpty";
import { costConverter } from "@/utils/abilityCalculatorUtils.js";
import lineageBonus from "@/data/lineageBonus.json";
export default {
  name: "AbilityScores",
  props: {
    lineage: {
      type: String,
      default: "",
    },
    abilityScores: {
      type: Object,
      default: {},
    },
  },
  mounted() {
    if (!isEmpty(this.abilityScores)) {
      Object.entries(this.abilityScores).forEach(([name, values]) => {
        switch (name) {
          case "str":
            Object.assign(this.items[0], values);
          case "dex":
            Object.assign(this.items[1], values);
          case "con":
            Object.assign(this.items[2], values);
          case "int":
            Object.assign(this.items[3], values);
          case "wis":
            Object.assign(this.items[4], values);
          case "cha":
            Object.assign(this.items[5], values);
        }
      });
    }
  },
  data: () => ({
    bonusPoint1: 0,
    bonusPoint2: 0,
    selectTwo: false,
    headers: [
      {
        text: "Ability Score",
        value: "scoreName",
        align: "start",
        sortable: false,
      },
      {
        text: "Total",
        value: "total",
        align: "start",
        sortable: false,
      },
      {
        text: "Feat",
        value: "featBonus",
        align: "start",
        sortable: false,
      },
      {
        text: "Lineage",
        value: "lineageBonus",
        align: "start",
        sortable: false,
      },
      {
        text: "Starting",
        value: "baseValue",
        align: "start",
        sortable: false,
      },
      {
        text: "Cost",
        value: "cost",
        align: "start",
        sortable: false,
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
    bonusAbilityOptions: [
      "Strength",
      "Dexterity",
      "Constitution",
      "Intelligence",
      "Wisdom",
      "Charisma",
    ],
  }),
  computed: {
    pointsRemaining() {
      const totalPoints = 27;
      const pointCost = this.items.reduce((agg, item) => {
        const cost = costConverter(item.baseValue);
        agg += cost;
        return agg;
      }, 0);
      return totalPoints - pointCost;
    },
  },
  watch: {
    lineage: {
      immediate: true,
      handler(cur) {
        if (cur) {
          const bonus = lineageBonus[cur];
          if (bonus.Special) {
            this.selectTwo = true;
          } else {
            this.bonusPoint1 = 0;
            this.bonusPoint2 = 0;
            this.selectTwo = false;
          }
          Object.entries(bonus).forEach(this.updateLineageBonus);
        } else {
          this.items.forEach((item) => (item.lineageBonus = 0));
        }
      },
    },
  },
  methods: {
    costConverter,
    updateBaseValue(name, value, direction) {
      let newValue;
      if (direction === "decrease") {
        if (value === 8) return;
        newValue = value - 1;
      } else {
        if (value === 15) return;
        newValue = value + 1;
      }
      switch (name) {
        case "Strength":
          this.items[0].baseValue = newValue;
          break;
        case "Dexterity":
          this.items[1].baseValue = newValue;
          break;
        case "Constitution":
          this.items[2].baseValue = newValue;
          break;
        case "Intelligence":
          this.items[3].baseValue = newValue;
          break;
        case "Wisdom":
          this.items[4].baseValue = newValue;
          break;
        case "Charisma":
          this.items[5].baseValue = newValue;
          break;
      }
    },
    updateLineageBonus([name, newValue]) {
      switch (name) {
        case "STR":
          this.items[0].lineageBonus = newValue || 0;
          break;
        case "DEX":
          this.items[1].lineageBonus = newValue || 0;
          break;
        case "CON":
          this.items[2].lineageBonus = newValue || 0;
          break;
        case "INT":
          this.items[3].lineageBonus = newValue || 0;
          break;
        case "WIS":
          this.items[4].lineageBonus = newValue || 0;
          break;
        case "CHA":
          this.items[5].lineageBonus = newValue || 0;
          break;
      }
    },
    totalValue(item = {}) {
      const { featBonus, lineageBonus, baseValue, scoreName } = item;
      let total = featBonus + lineageBonus + baseValue;
      if (scoreName === this.bonusPoint1) {
        total += 1;
      }
      if (scoreName === this.bonusPoint2) {
        total += 1;
      }
      return total;
    },
    lineageValue(item = {}) {
      const { lineageBonus, scoreName } = item;
      let total = lineageBonus;
      if (scoreName === this.bonusPoint1) {
        total += 1;
      }
      if (scoreName === this.bonusPoint2) {
        total += 1;
      }
      return total;
    }
  },
};
</script>

<style>
</style>