<template>
  <div>
    <div cover id="background">
        <v-container>
          <v-row>
            <v-col cols="12">
              <br />
              <br />
              <div>
                <h1 style="color: white" align="center">
                  EQUIPAMIENTO WORLD CLASS WAREHOUSING (WCW)
                </h1>
                <br />
              </div>
            </v-col>
          </v-row>
        </v-container>
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
                class="text-pre-wrap d-none d-sm-flex"
                style="word-break: break-word"
              >
                {{ card.title }}
              </v-card-title>
              <h2 class="d-flex d-sm-none"> {{ card.title }}</h2>
              <v-card-subtitle> Más info </v-card-subtitle>
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
     </v-container>
    <br />
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
      expand: false,
      p1: imagen1,
      showModal: false,
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
<style lang="scss" scoped>

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 100%;
 max-width: 400px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
 
 h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
 }
 
 p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
 }
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter-from,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter-from,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}
#background {
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
      url("../assets/poderosa/Ejecucion.jpg");
    background-position: 50% 35%;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 180px;
  }
</style>

  
