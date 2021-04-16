<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title>Basic Info</v-card-title>
          <v-card-text>
            <v-text-field
              outlined
              label="Name"
            ></v-text-field>
            <v-text-field
              outlined
              label="Gender"
            ></v-text-field>
            <v-text-field
              outlined
              label="Age"
              type="number"
              suffix=" years old"
            ></v-text-field>
            <v-text-field
              outlined
              label="Lineage"
            ></v-text-field>
            <v-text-field
              outlined
              label="Alignment"
            ></v-text-field>
            <v-textarea
              rows="3"
              outlined
              label="Physical Description"
            ></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>Ability Scores</v-card-title>
          <v-card-text>
            <v-textarea
              rows="3"
              outlined
              label="Physical Description"
            ></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>
