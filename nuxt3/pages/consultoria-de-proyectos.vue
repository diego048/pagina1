<template>
    <div>
      <div class="contenedor">
        <v-img
          cover
          :src="p3"
          style="filter: brightness(25%)"
        />
        <div class="centrado ">
          <h1 align="center" color="white">CONSULTORÍA</h1>
        </div>
      </div>
      <div>
        <!-- La cabecera con la info-->
        <v-container>
          <br />
          <v-row class="d-flex justify-center" height="100">
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
                  <v-img v-if="card.ok" :src="card.src" height="200px"></v-img>
                  <v-img
                    v-if="!card.ok"
                    :src="card.src"
                    height="200px"
                    cover
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
        <div style="margin-top: 50px;" class="d-flex d-sm-none" ></div>
        <br />
        <!--pie de pagina -->
        <pie />
      </div>
    </div>
  </template>
  
  <script>
  import imagen1 from "../assets/imagenes/imagen19.jpg";
  import imagen2 from "../assets/imagenes/diseño5.png";
  import imagen3 from "../assets/imagenes/proyecto54.jpg";
  import ima1_op from "../assets/imagenes/imagen17-opti.jpg";
  export default {
    setup(){
      useHead({
        title: "Consultoria de proyectos",
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
          content: "Consultoria de proyectos"
        },
        {
          property: "og:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          property: "og:image",
          content: "https://mecaluxes.cdnwm.com/articulos-de-logistica/diseno-y-layout-de-un-almacen-6-factores-basicos/image-0.1.0.jpg",
        },
        {
          property: "og:url",
          content: "/consultoria-de-proyectos"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "Consultoria de Proyectos"
        },
        {
          name: "twitter:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          name: "twitter:image",
          content: "https://mecaluxes.cdnwm.com/articulos-de-logistica/diseno-y-layout-de-un-almacen-6-factores-basicos/image-0.1.0.jpg"
        },
      ],
      })
    },
    data() {
      return {
        p3: imagen1,
        cards: [
          {
            id: 1,
            ok: true,
            title: "DISEÑO DE ALMACENES WCW",
            src: imagen2,
            opti: ima1_op,
            flex: 6,
            flex1: 4,
            show: false,
            link: "diseño-almacen",
          },
          {
            id: 3,
            ok: true,
            title: "INGENIERÍA DE PROYECTOS LOGÍSTICOS",
            src: imagen3,
            opti: ima1_op,
            flex: 6,
            flex1: 4,
            show: false,
            link: "ingenieria",
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
    height: 160px;
  }
  .centrado {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  
