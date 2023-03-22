<template>
    <div>
      <!-- cuadro derecha-->
      <v-container v-scrolls>
        <v-card
          :elevation="12"
          outlined
          style="background-color: rgba(256, 256, 256, 0.35)"
        >
          <v-row>
            <v-col
              cols="12"
              sm="6"
              style="height: 55vh; min-height: 287px"
            >
              <v-img
                :src="p3"
                :lazy-src="p4"
                style="object-fit: cover; height: 100%"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <h2 align="center" style="color: orangered; font-size: 3vw">
                CONSULTORÍA
              </h2>
              <p
                align="justify"
                style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
              >
                La Consultoría tiene como objetivo principal la optimización del
                diseño de sus almacenes, utilizando tecnología de última generación
                la misma que permitirá la optimización de los procesos de la cadena
                de abastecimiento en todas sus etapas.
              </p>
              <br />
              <b
                align="justify"
                style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
              >
                MÁS INFORMACIÓN
              </b>
              <br />
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  import gerencia from "../../assets/imagenes/diseño1.png";
  import gerencia1 from "../../assets/imagenes/diseño1.png";

  export default defineComponent( {
    data() {
      return {
        p3: gerencia,
        p4: gerencia1,
      };
    },
  });
  </script>
  <style scoped>
  .before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
  </style>