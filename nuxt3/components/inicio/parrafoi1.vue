<template>
    <div>
      <v-container v-scrolls>
        <!-- cuadro izquierda-->
        <v-card
          outlined
          style="background-color: rgba(256, 256, 256, 0.35)"
          :elevation="18"
        >
          <v-row>
            <v-col
              cols="12"
              sm="6"
              class="ma-0 pa-0 d-sm-none"
              style="height: 50vh; min-height: 287px"
            >
              <v-img
                cover
                :src="p3"
                :lazy-src="p4"
                style="height: 100%; object-fit: cover"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <h2 align="center" style="color: orangered; font-size: 3vw">
                EQUIPAMIENTO WCW
              </h2>
              <p align="justify" style="padding-left: 3%; padding-right: 3%">
                Ofrecemos a nuestros clientes una gran variedad de soluciones en
                almacenamiento, como por ejemplo; Sistemas de Estantería
                Convencional, Estantería de Media Carga, Estantería Compacta o Drive
                In, Estantería Push back, equipos para almacenes, entre otros.
              </p>
              <br />
              <b
                align="justify"
                style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
              >
                MÁS INFORMACIÓN
              </b>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              class="ma-0 pa-0 d-none d-sm-flex"
              style="height: 55vh; min-height: 287px"
            >
              <v-img
                cover
                :src="p3"
                :lazy-src="p4"
                style="height: 100%; object-fit: cover"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  import gerencia from "../../assets/Gloria/Gloria.jpg";
  import gerencia1 from "../../assets/Gloria/Gloria-op.jpg";

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