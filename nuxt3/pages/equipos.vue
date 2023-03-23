<template>
  <div>
    <div class="contenedor">
      <v-img
        cover
        :src="p1"
        style="filter: brightness(25%)"
      />
      <div class="centrado">
        <h1 align="center" color="white">EQUIPAMIENTO WORLD CLASS WAREHOUSING (WCW)</h1>
      </div>
    </div>
    <v-container>
      <br />
      <v-row>
        <v-col
          cols="6"
          :md="card.flex1"
          :sm="card.flex"
          v-for="card in cards"
          :key="card.id"
          align="center"
          v-scrolls
          class="flex d-flex align-self-stretch"
        >
          <NuxtLink
            :to="{ name: card.link }"
            style="text-decoration: none; width: 100%"
            class="flex d-flex align-self-stretch"
          >
            <v-card elevation="21" style="width: 100%">
              <v-img
                :src="card.src"
                v-if="card.ok"
                height="200px"
                :lazy-src="card.opti"
              ></v-img>
              <v-img
                :src="card.src"
                v-if="card.ok2"
                height="200px"
                cover
                :lazy-src="card.opti"
              ></v-img>
              <v-img
                :src="card.src"
                v-if="card.ok1"
                height="200px"
                :lazy-src="card.opti"
                style="background-color: rgb(246, 246, 246)"
              ></v-img>
              <v-card-title
                class="text-pre-wrap"
                style="word-break: break-word"
              >
                {{ card.title }}
              </v-card-title>

              <v-card-subtitle> Más info </v-card-subtitle>
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
    <br />
        <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--pie de pagina -->
    <pie />
  </div>
</template>

<script>
import imagen1 from "../assets/poderosa/Ejecucion.jpg";
import ima1 from "../assets/imagenes/alm.jpg";
import ima1_op from "../assets/imagenes/alm.jpg";
import ima2 from "../assets/imagenes/cabecera.png";
import ima2_op from "../assets/imagenes/cabecera.png";
import ima3 from "../assets/imagenes/losa.png";
import ima4 from "../assets/imagenes/rampas.png";
import ima5 from "../assets/imagenes/oficina1.png";
export default {
  name: "equipos",
  setup(){
      useHead({
        title: "Equipos",
        meta: [
        {
          name: "robots",
          content: "index, follow"
        },
        {
          name: "description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años",
        },
        {
          property: "site_name",
          content: "LogicorPeru"
        },
        {
          property: "og:title",
          content: "Equipos"
        },
        {
          property: "og:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          property: "og:image",
          content: "https://mecaluxpe.cdnwm.com/documents/20128/455199/screens.png/7d70a473-c593-d893-14d6-c375cf0de9a7?t=1529911398000&e=png",
        },
        {
          property: "og:url",
          content: "/equipos"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "Equipos"
        },
        {
          name: "twitter:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          name: "twitter:image",
          content: "https://mecaluxpe.cdnwm.com/documents/20128/455199/screens.png/7d70a473-c593-d893-14d6-c375cf0de9a7?t=1529911398000&e=png"
        },
      ],
      })
    },
  data() {
    return {
      p1: imagen1,
       dialog: false,
      cards: [
        {
          id: 1,
          title: "SISTEMAS DE ALMACENAJE",
          ok: true,
          src: ima1,
          opti: ima1_op,
          flex: 6,
          flex1: 4,
          show: false,
          link: "sistema-de-almacenaje",
        },
        {
          id: 2,
          title: "EQUIPOS DE MATERIAL HANDLING",
          ok: true,
          src: ima2,
          opti: ima2_op,
          flex: 6,
          flex1: 4,
          show: false,
          link: "equipo-mh",
        },
        {
          id: 3,
          ok1: true,
          title: "EQUIPOS DE RAMPA",
          src: ima4,
          opti: ima4,
          flex: 6,
          flex1: 4,
          show: false,
          link: "equipos-de-rampas",
        },
        {
          id: 4,
          title: "LOSAS SUPERPLANAS",
          ok2: true,
          src: ima3,
          opti: ima3,
          flex: 6,
          flex1: 4,
          show: false,
          link: "losa-superplana",
        },
        {
          id: 5,
          title: "OFICINAS MODULARES",
          ok2: true,
          src: ima5,
          opti: ima5,
          flex: 6,
          flex1: 4,
          show: false,
          link: "oficinas-modulares",
        },
        {
          id: 6,
          ok: true,
          title: "SISTEMA WMS",
          src: "https://mecaluxpe.cdnwm.com/documents/20128/455199/screens.png/7d70a473-c593-d893-14d6-c375cf0de9a7?t=1529911398000&e=png",
          opti: "https://mecaluxpe.cdnwm.com/documents/20128/455199/screens.png/7d70a473-c593-d893-14d6-c375cf0de9a7?t=1529911398000&e=png",
          flex: 6,
          flex1: 4,
          show: false,
          link: "wms",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contenedor {
  position: relative;
  text-align: center;
  color: white;
  height: 180px;
}
.centrado {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

  
