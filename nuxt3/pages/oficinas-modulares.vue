<template>
    <div>
        <div cover id="background">
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <br />
              <br />
              <div>
                <h1 style="color: white" align="center">
                  OFICINAS MODULARES
                </h1>
                <br />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
        <v-container>
            <br />
        <v-row v-scrolls>
          <v-col
            cols="12"
            sm="6"
            class="ma-0 pa-0 d-none d-sm-flex align-self-center"
            style="height: 50vh; min-height: 287px"
          >
            <v-img
              cover
              :src="p1"
              :lazy-src="p1"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6" align="center">
            <h1>CARACTERÍSTICAS</h1>
            <br />
            <p
              align="justify"
              style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
            >
              1-. Estructura Metalica con Acero de Calidad A36
              <br />
              2-.Paredes y techos con paneles sándwich termoaislantes
              <br />
              3-.Piso de Triplay fenólico de 18mm con acabado de vinílico
              <br /> 
              4-.Puertas y Ventanas con estructura de metálicas y vidrios de 4 mm
              <br />
              5-. Instalaciones electricas y Sanitarias
            </p>
            <br />
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="ma-0 pa-0 d-flex d-sm-none"
            style="height: 50vh; min-height: 287px"
          >
            <v-img
              cover
              :src="p1"
              :lazy-src="p1"
            ></v-img>
          </v-col>
        </v-row>
        <br />
        <br />
        <br />
        <br />
        <v-row v-scrolls>
          <v-col cols="12" sm="6" align="center">
            <h1>BENEFICIOS</h1>
            <p
              align="justify"
              style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
            >
            Reducción de costos del proyecto y entrega rápida a diferencia de un método tradicional
            <br />
            <br />
            Se pueden transportar armados los contenedores o desarmados
            <br />
            <br />
            Aislamiento acústico y térmico
            <br />
            <br />
            Flexibilidad para aumentar más módulos 
            <br />
            <br />
            Se pueden reubicar los módulos
            <br />
            <br />
            Los módulos se pueden personalizar para el uso y gusto de cada cliente
            </p>
            <br />
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="ma-0 pa-0 align-self-center"
            style="height: 60vh; min-height: 287px"
          >
            <v-img
              cover
              :src="p2"
              style="height: 100%"
            ></v-img>
          </v-col>
        </v-row>
        <br />
        <br />
        <h1 align="center" v-scrolls>FOTOS</h1>
        <p align="center" v-scrolls>Algunas de nuestras imagenes</p>
        <br />
        </v-container>
      <v-container>
        <v-row class="d-flex">
            <v-col
                cols="6"
                md="4"
                sm="4"
                v-for="card in cards"
                :key="card.id"
                align="center"
            >
                <v-card @click="showDialog(card)" elevation="21" align="center" style="width: 100%"  v-scrolls>
                    <v-img
                    v-if="card.cover"
                    :src="card.src"
                    height="300px"
                    :lazy-src="card.src"
                    cover
                  ></v-img>
                  <v-img
                    v-if="!card.cover"
                    height="300px"
                    :src="card.src"
                    :lazy-src="card.src"
                  >
                  </v-img>
                </v-card>                
                <dibox v-show="card.show" @close="hideDialog(card)">
                    <v-container fluid class="accent pa-0 align-start">
                        <v-col>
                        <v-card color="rgba(0,0,0,0.45)" outlined elevation="0">
                            <div style="position: relative">
                            <v-img
                                style="height: 100%; width: 60vw"
                                :src="card.src"
                                :lazy-src="card.src"
                            >
                            </v-img>
                            <v-card-actions
                                style="position: absolute; top: 0; right: 0"
                            >
                                <v-btn
                                variant="flat"
                                color="error"
                                @click="hideDialog(card)"
                                >X</v-btn
                                >
                            </v-card-actions>
                            </div>
                        </v-card>
                        </v-col>
                    </v-container>
                </dibox>
            </v-col> 
        </v-row>
    </v-container>
    <br />
    <pie />
  </div>
</template>

<script>
  import imagen1 from "../assets/imagenes/oficina4.jpg";
  import imagen2 from "../assets/imagenes/oficina5.jpg";
  import imagen3 from "../assets/imagenes/oficina3.png";
  import ima1 from "../assets/imagenes/oficina2.png";
  import ima2 from "../assets/imagenes/oficina1.png";
export default {
    setup(){
      useHead({
        title: "Oficinas Modulares",
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
          content: "Oficinas Modulares"
        },
        {
          property: "og:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          property: "og:image",
          content: "../assets/imagenes/oficina3.png",
        },
        {
          property: "og:url",
          content: "/oficinas-modulares"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "Oficinas Modulares"
        },
        {
          name: "twitter:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          name: "twitter:image",
          content: "../assets/imagenes/oficina3.png"
        },
      ],
      })
    },
  data() {
    return {
      scrollPosition: 0,
      p1: ima1,
    p2: ima2,
    cards: [
      { src: imagen1, cover: true },
      { src: imagen2, cover: true },
      { src: imagen3, cover: true },
    ],
    }
  },
  methods: {
    showDialog(card) {
        this.scrollPosition = window.pageYOffset;
        (card.show) = true;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
    },
    hideDialog(card) {
        (card.show) = false;
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    }
  }
}
</script>
<style scoped>
.contenedor {
  position: relative;
  text-align: center;
  color: white;
  height: 300px;
}
.centrado {
  position: absolute;
  top: 50px;
}
#background {
  background: linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),
    url("../assets/imagenes/oficina3.png");
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
}
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
