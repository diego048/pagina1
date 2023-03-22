<template>
    <div>
      <v-card elevation="20">
        <br />
        <h1 align="center">EQUIPOS DE MH</h1>
        <br />
        <v-tabs v-model="tab" show-arrows grow>
          <v-tab v-for="card in cards" :key="card.p1" :value="card.p5">{{
            card.p1
          }}</v-tab>
        </v-tabs>
        <v-container>
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item
                v-for="card in cards"
                :key="card.p1"
                :value="card.p5"
              >
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    v-if="card.id % 2 != 0"
                    class="d-none d-sm-flex"
                  >
                    <v-img
                      style="height: 450px"
                      :src="card.p3"
                      :lazy-src="card.p4"
                    />
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <h2 align="center">
                      {{ card.p1 }}
                    </h2>
                    <br />
                    <p align="justify">
                      {{ card.p2 }}
                    </p>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    v-if="card.id % 2 == 0"
                    style="height: 450px"
                  >
                    <v-img :src="card.p3" :lazy-src="card.p4" />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    v-if="card.id % 2 != 0"
                    class="d-flex d-sm-none"
                    style="height: 450px"
                  >
                    <v-img :src="card.p3" :lazy-src="card.p4" />
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-container>
      </v-card>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    props: ["cards"],
    data() {
      return { tab: null };
    },
  });
  </script>
  <style></style>
  