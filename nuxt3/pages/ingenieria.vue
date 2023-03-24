<template>
    <div>
      <div>
        <div style="position: relative">
          <video autoplay loop muted playsinline class="video">
            <source src="../assets/imagenes/proyect.mp4" type="video/webm" />
            <source src="../assets/imagenes/proyect.mp4" type="video/mp4" />
          </video>
          <v-container class="p1" align="center">
            <v-row>
              <v-col cols="12" sm="5" md="4" class="align-self-center">
                    <h1 style="color: rgb(255, 102, 26)" align="justify">Ingeniería de Proyectos Logísticos</h1>
                    <p align="justify">
                      es el conjunto de conocimientos, actitudes y herramientas de la
                      gestión, que prestan apoyo al desarrollo más conveniente o más
                      económico de la actividad empresarial, optimizando el resultado.
                    </p>
              </v-col>
              <v-col cols="0" sm="2" md="3"></v-col>
              <v-col cols="12" sm="5" md="5" align="justify" class="h-auto">
                <h1 align="center">Índice</h1>
                <div v-if="activador1" >
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#in1" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>1. Estudio Mecanica de Suelos</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#in2" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>2. Planos de Arquitectura</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#in3" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>3. Planos de especialidades</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#in7" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>4. Medición de Planitud de una Losa</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#in4" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4 align="justify">5. Simuladores para Definir Sistemas de Almacenaje</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#in5" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>6. Simuladores para Definir Equipos de Material Handling</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#in6" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>7. Simuladores para Picking</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                </div>
                <div v-for="(card, index) in cards4" :key="index" v-if="!activador1">
                  <v-card elevation="0" outlined color="transparent" align="justify" @click="showDialog(card)">
                          <span style="white-space: normal">
                            <h4 style="text-decoration: none; color: white"> {{card.nom}}</h4>
                          </span>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div v-for="(card, index) in cards" :key="index" v-if="!activador1">
          <dibox v-show="card.show" @close="hideDialog(card)">
                        <v-row>
                          <v-col cols="0" md="1"></v-col>
                          <v-col cols="12" md="10">
                            <v-card>
                              <v-alert
                                  v-model="alert"
                                  border="start"
                                  type="error"
                                  transition="slide-y-transition"
                                  >
                                  Usuario o Contraseña Equivocado
                                  </v-alert>
                                <v-card-actions class="d-flex justify-end">
                                  <v-btn
                                    style="color: rgb(203, 50, 52)"
                                    variant="text"
                                    @click="card.show = false"
                                  >
                                    <h1>X</h1>
                                  </v-btn>
                                </v-card-actions>
                              <v-container>
                                  <v-row align="center">
                                <v-divider></v-divider>
                                  <v-col cols="12" align="center" class="register">
                                      <h2>Log in</h2>
                                      <br />
                                      <input type="text" placeholder="Username" v-model="username" />
                                      <input type="password" placeholder="password" v-model="password" />
                                      <v-btn v-on:click="log2(card)">log in</v-btn>
                                  </v-col>
                                  </v-row>
                              </v-container>
                            </v-card>
                          </v-col>
                        </v-row>
          </dibox>
        </div>
        <!-- La cabecera con la info-->
        <div v-if="activador1">
        <v-container>
          <br id="in1" />
          <br />

          <!--Estudio Mecanica de Suelos-->
          <br />
          <v-card elevation="13" v-scrolls>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  style="height: 50vh; min-height: 287px"
                  class="d-flex d-sm-none"
                >
                <v-carousel
                    show-arrows="hover"
                    hide-delimiters
                    cycle
                    interval="3000"
                    style="height: 100%"
                  >
                    <v-carousel-item
                      v-for="card in cards"
                      :src="card.src"
                      :key="card.src"
                      cover
                    ></v-carousel-item>
                  </v-carousel>
                </v-col>
                <v-col cols="12" sm="6" align="center" class="align-self-center">
                  <h1 align="center">Estudio Preliminares</h1>
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                  >
                    1. Estudio Mecanica de Suelos
                    <br />
                    <br />
                    2. Levantamiento Topografico
                    <br />
                    <br />
                    3. Levantamiento Arquitectonico
                    <br />
                    <br />
                    4. Sistema de Utilización en Media Tensión
                  </p>
                  <br />
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  style="height: 50vh; min-height: 287px"
                  class="d-none d-sm-flex"
                >
                  <v-carousel
                    show-arrows="hover"
                    hide-delimiters
                    cycle
                    interval="3000"
                    style="height: 100%"
                  >
                    <v-carousel-item
                      v-for="card in cards"
                      :src="card.src"
                      :key="card.src"
                      cover
                    ></v-carousel-item>
                  </v-carousel>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <br />
          <br id="in2" />
          <br />
          <br />
          <!--Planos de Arquitectura-->
          <br />
          <v-card elevation="13" v-scrolls>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  style="min-height: 287px; height: 400px"
                  
                >
                <v-carousel
                    show-arrows="hover"
                    hide-delimiters
                    cycle
                    interval="3000"
                    style="height: 100%"
                  >
                    <v-carousel-item
                      v-for="card in cards1"

                      :src="card.src"
                      :key="card.src"
                    ></v-carousel-item>
                  </v-carousel>
                </v-col>
                <v-col cols="12" sm="6" align="center" class="align-self-center">
                  <h1 align="center">Planos de Arquitectura</h1>
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                  >
                    1. Desarrollo de AnteProyecto
                    <br />
                    <br />
                    2. Desarrollo de Proyecto
                    <br />
                    <br />
                    3. Modelado 3D.
                    <br />
                    <br />
                    4. Renderizado y Simulación 3D.  
                  </p>
                  <br />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <br />
          <br />
          <br id="in3" />
          <br />
          <!--Planos de Especialidades-->
          <v-card elevation="13" v-scrolls>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  style="height: 50vh; min-height: 287px"
                  class="d-flex d-sm-none"
                >
                <v-carousel
                    show-arrows="hover"
                    hide-delimiters
                    cycle
                    interval="3000"
                    style="height: 100%"
                  >
                    <v-carousel-item
                      v-for="card in cards5"
                      :src="card"
                      :key="card"
                    ></v-carousel-item>
                  </v-carousel>
                </v-col>
                <v-col cols="12" sm="6" align="center" class="align-self-center">
                  <h1 align="center">Planos de especialidades</h1>
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                  >
                    1. Planos Estructurales
                    <br />
                    <br />
                    2. Planos Instalaciones Sanitarias 
                    <br />
                    <br />
                    3. Planos Instalaciones Electricas
                    <br />
                    <br />
                    4. Planos de Data y Comunicaciones
                    <br />
                    <br />
                    5. Planos Mecánicos
                    <br />
                    <br />
                    6. Planos Sistema Contra Incendios 
                  </p>
                  <br />
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="d-none d-sm-flex"
                  style="height: 70vh; min-height: 287px"
                >
                  <v-carousel
                    show-arrows="hover"
                    hide-delimiters
                    cycle
                    interval="3000"
                    style="height: 100%"
     
                  >
                    <v-carousel-item
                      v-for="card in cards5"
                      :src="card"
                      :key="card"
                    ></v-carousel-item>
                  </v-carousel>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <br />
          <br />
          <br id="in7" />
          <br />

          <!--Medición de Planitud de una Losa-->
          <br />
          <div>
          <v-card elevation="13" v-scrolls>
            <v-container>
              <v-row>
                <v-col cols="12" align="center" class="align-self-center justify-center d-none d-sm-flex">
                  <h1 align="center">Medición de Planitud de una Losa</h1>
                  <br />
                </v-col>
                <v-col
                  cols="12"
                  style="height: 350px; min-height: 287px"
                >
                <v-carousel
                    show-arrows="hover"
                    hide-delimiters
                    cycle
                    interval="3000"
                    class="h-100"
                  >
                    <v-carousel-item
                      :src="card.src"
                      v-for="card in cards2" :key="card.show"
                    ></v-carousel-item>

                  </v-carousel>
                </v-col>
                <v-col cols="12" align="center" class="align-self-center d-flex d-sm-none justify-center">
                  <h1 align="center">Medición de Planitud de una Losa</h1>
                  <br />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          </div>
          <br />
          <br id="in4" />
          <br />

          <!--Simuladores para Definir Sistemas de Almacenaje-->
          <div>
          <h1 align="center">Simuladores para Definir Sistemas de Almacenaje</h1>
          <br />
          <v-row>
            <v-col
                cols="12"
                md="6"
                sm="6"
                v-for="card in cards3"
                :key="card.id"
                align="center"
                v-scrolls
                v-if="activador"
              >
                <v-dialog v-model="card.show" width="80vw">
                  <template v-slot:activator="{ props }">
                    <v-card elevation="21" v-bind="props">
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
                  </template>
                  <v-container fluid class="accent pa-0 align-start">
                    <v-col>
                      <v-card color="rgba(0,0,0,0.45)" outlined elevation="0">
                        <div style="position: relative">
                          <v-img
                            style="height: 80vh"
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
                              @click="card.show = false"
                              >X</v-btn
                            >
                          </v-card-actions>
                        </div>
                      </v-card>
                    </v-col>
                  </v-container>
                </v-dialog>
            </v-col>
          </v-row>
          </div>
          <br />
          <br />
          <br />
          <v-row>
            <!--Simuladores para Definir Equipos de Material Handling-->
            <v-col
                id="in5"
                cols="12"
                md="6"
                sm="6"
                align="center"
                v-scrolls
                v-if="activador"
              >
                <h1>Simuladores para Definir Equipos de Material Handling</h1>
                <br />
                <v-dialog v-model="show1" width="80vw">
                  <template v-slot:activator="{ props }">
                    <v-card elevation="21" v-bind="props">
                      <v-img
                        height="300px"
                        :src="p6"
                        :lazy-src="p6"
                      >
                      </v-img>
                    </v-card>
                  </template>
                  <v-container fluid class="accent pa-0 align-start">
                    <v-col>
                      <v-card color="rgba(0,0,0,0.45)" outlined elevation="0">
                        <div style="position: relative">
                          <v-img
                            style="height: 80vh"
                            :src="p6"
                            :lazy-src="p6"
                          >
                          </v-img>
                          <v-card-actions
                            style="position: absolute; top: 0; right: 0"
                          >
                            <v-btn
                              variant="flat"
                              color="error"
                              @click="show1 = false"
                              >X</v-btn
                            >
                          </v-card-actions>
                        </div>
                      </v-card>
                    </v-col>
                  </v-container>
                </v-dialog>
            </v-col>
            <!--Simuladores para Picking-->
            <v-col
                id="in6"
                cols="12"
                md="6"
                sm="6"
                align="center"
                v-scrolls
                v-if="activador"
              >
                <h1>Simuladores para Picking</h1>
                <br />
                <br />
                <br />
                <v-dialog v-model="show2" width="80vw">
                  <template v-slot:activator="{ props }">
                    <v-card elevation="21" v-bind="props">
                      <v-img
                        height="300px"
                        :src="p7"
                        :lazy-src="p7"
                      >
                      </v-img>
                    </v-card>
                  </template>
                  <v-container fluid class="accent pa-0 align-start">
                    <v-col>
                      <v-card color="rgba(0,0,0,0.45)" outlined elevation="0">
                        <div style="position: relative">
                          <v-img
                            style="height: 80vh"
                            :src="p7"
                            :lazy-src="p7"
                          >
                          </v-img>
                          <v-card-actions
                            style="position: absolute; top: 0; right: 0"
                          >
                            <v-btn
                              variant="flat"
                              color="error"
                              @click="show2 = false"
                              >X</v-btn
                            >
                          </v-card-actions>
                        </div>
                      </v-card>
                    </v-col>
                  </v-container>
                </v-dialog>
            </v-col>
          </v-row>

        </v-container>
        <br />
        <br />
      </div>
        <!--pie de pagina -->
        <pie />
      </div>
    </div>
  </template>
  
  <script>
  import ima1 from "../assets/imagenes/ingenieria1.png";
  import ima2 from "../assets/imagenes/ingenieria2.png";
  import ima3 from "../assets/imagenes/ingenieria3.png";
  import ima4 from "../assets/imagenes/proyecto48.jpg";
  import ima5 from "../assets/imagenes/proyecto49.jpg";
  import ima6 from "../assets/imagenes/proyecto50.jpg";
  import ima7 from "../assets/imagenes/proyecto51.jpg";
  import ima8 from "../assets/imagenes/proyecto52.jpg";
  import ima9 from "../assets/imagenes/proyecto53.jpg";
  import ima10 from "../assets/imagenes/proyecto54.jpg";
  import ima11 from "../assets/imagenes/proyecto55.jpg";
  import ima12 from "../assets/imagenes/proyecto56.jpg";
  import ima13 from "../assets/imagenes/losa1.png";
  import ima14 from "../assets/imagenes/losa2.png";
  import ima15 from "../assets/imagenes/supervision3.jpg";
  import ima16 from "../assets/imagenes/supervision4.jpg";
  import ima17 from "../assets/imagenes/supervision5.jpg";
  import ima18 from "../assets/imagenes/supervision6.jpg";
  import ima19 from "../assets/imagenes/proyecto57.jpg";
  import ima20 from "../assets/imagenes/proyecto58.jpg";
  import ima21 from "../assets/imagenes/proyecto59.jpg";
  import ima22 from "../assets/imagenes/proyecto60.jpg";
  import ima23 from "../assets/imagenes/proyecto61.jpg";
  import ima24 from "../assets/imagenes/planos.png";
  import ima25 from "../assets/imagenes/planos1.png";
  import ima26 from "../assets/imagenes/planos2.png";
  import ima27 from "../assets/imagenes/planos3.png";
  import video from "../assets/imagenes/Multimedia3.mp4";
  import axios from "axios";
  export default {
    name: "Ingenieria de proyectos logisticos",
    beforeMount(){
      this.activador = true
      if(localStorage.getItem("token")){
        this.activador1 = true
      }
    },
    setup(){
      useHead({
        title: "Ingenieria de proyectos logisticos",
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
          content: "Ingenieria de proyectos logisticos"
        },
        {
          property: "og:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          property: "og:image",
          content: "https://storage.icograms.com/templates/preview/warehouse-technology.png",
        },
        {
          property: "og:url",
          content: "/ingenieria"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "Ingenieria de proyectos logisticos"
        },
        {
          name: "twitter:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          name: "twitter:image",
          content: "https://storage.icograms.com/templates/preview/warehouse-technology.png"
        },
      ],
      })
    },
    data() {
      return {
        scrollPosition: 0,
        show1: false,
        show2: false,
        activador1: false,
        activador: false,
        state: false,
        alert: false,
        p1: ima1,
        p2: video,
        p3: ima2,
        p4: ima3,
        p5: ima8,
        p6: ima22,
        p7: ima23,
        p8: ima10,
        slides: ["First", "Second", "Third", "Fourth", "Fifth"],
        cards: [
          {id: 1, show: false, src: ima4, cover: true},
          {id: 2, show: false, src: ima5, cover: true},
          {id: 3, show: false, src: ima6, cover: true},
          {id: 4, show: false, src: ima7, cover: false},
        ],
        cards1: [
          {id: 1, show: false, src: ima9, cover: false},
          {id: 2, show: false, src: ima10, cover: false},
          {id: 3, show: false, src: ima11, cover: false},
          {id: 4, show: false, src: ima12, cover: false},
        ],
        cards2: [
          {id: 1, show: false, src: ima13, cover: true},
          {id: 2, show: false, src: ima14, cover: true},
          {id: 3, show: false, src: ima15, cover: false},
          {id: 4, show: false, src: ima16, cover: false},
          {id: 5, show: false, src: ima17, cover: false},
          {id: 6, show: false, src: ima18, cover: false},
          {id: 7, show: false, src: ima19, cover: false},
        ],
        cards3: [
          {id: 1, show: false, src: ima20, cover: false},
          {id: 2, show: false, src: ima21, cover: false},
        ],
        cards4: [
          {nom: "1. Estudio Mecanica de Suelos", tit: "#in1", show: false},
          {nom: "2. Planos de Arquitectura", tit: "#in2", show: false},
          {nom: "3. Planos de especialidades", tit: "#in3", show: false},
          {nom: "4. Medición de Planitud de una Losa", tit: "#in7", show: false},
          {nom: "5. Simuladores para Definir Sistemas de Almacenaje", tit: "#in4", show: false},
          {nom: "6. Simuladores para Definir Equipos de Material Handling", tit: "#in5", show: false},
          {nom: "7. Simuladores para Picking", tit: "#in6", show: false},
        ],
        cards5: [ima24, ima25, ima26, ima27],
      };
    },
    methods: {
      async log2(card) {
        const element = document.getElementById(card.tit)
        let result = await axios
          .post("http://127.0.0.1:5000/login", {
            username: this.username,
            password: this.password,
          })
          .catch((error) => {
            console.log(error);
            this.alert = true;
            setTimeout(() => {
              this.alert = false;
            }, 5000);
            this.username = "";
            this.password = "";
          });
        if (result.data.success == true) {
          (card.show) = false;
          document.body.style.position = 'static';
          document.body.style.top = '';
          document.body.style.width = '';
          document.body.style.overflowY = '';
          window.scrollTo(0, this.scrollPosition);
          this.username = "";
          this.password = "";
          this.state = true;
          this.activador1 = true;
          this.$bus.$emit("activador", this.state);
          localStorage.setItem("token", true);
          (card.show) = false;
          return navigateTo(card.tit);
        }
      },
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
  },
  };
  </script>
  
  <style scoped>
  .video {
  filter: brightness(25%);
  height: 78vh;
  width: 100vw;
  object-fit: cover;
  display: block;
}
.p1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
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
  .register input {
    width: 100%;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    padding-left: 20px;
    border: 1px solid #535353;
    border-radius: 5px;
  }
  .register button {
    width: 100%;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    background-color: #000000;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
  .register h2 {
    font-size: 32px;
    font-weight: 300;
    text-transform: uppercase;
  }
  </style>
