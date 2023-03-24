<template>
    <div style="overflow-x:hidden">
      <div>
        <!-- La cabecera con la info-->
        <div position="relative">
          <video autoplay loop muted playsinline class="video">
            <source src="../assets/imagenes/proyect.mp4" type="video/webm" />
            <source src="../assets/imagenes/proyect.mp4" type="video/mp4" />
          </video>
          <v-container class="p1" align="center">
            <v-row>
              <v-col cols="12" sm="5" md="4" class="align-self-center">
                    <h1 style="color: rgb(255, 102, 26)" align="justify">Diseño de Almacenes WCW</h1>
                    <p align="justify">
                      Analizando los volúmenes, flujos de mercadería, ordenes de
                      compras recibidas, pedidos diarios despachados y los
                      procedimientos que usan.
                    </p>
              </v-col>
              <v-col cols="0" sm="2" md="3"></v-col>
              <v-col cols="12" sm="5" md="5" align="justify">
                <h1 align="center">Índice</h1>
                <div v-if="activador1" >
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#di1" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>1. Diseño de Almacenes Nuevos WCW</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#di8" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>2. Análisis financiero</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#di2" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>3. Optimización de Almacenes</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#di3" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>4. Selección de WMS para CDs WCW</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#di4" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4 align="justify">5. Gestión y/o ejecución de proyectos</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#di5" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>6. Cubicaje</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#di6" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>7. Ratios</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                  <v-card outlined color="transparent" elevation="0">
                    <NuxtLink class="link" to="#di7" style="text-decoration: none; color: white">
                      <span style="white-space: normal">
                        <h4>8. Profiling</h4>
                      </span>
                    </NuxtLink>
                  </v-card>
                </div>
                <div v-for="(card, index) in cards" :key="index" v-if="!activador1">
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
          <dibox v-show="card.show" @close="hideDialog(card)" >
                    <v-row>
                          <v-col cols="0" md="1"></v-col>
                          <v-col cols="12" md="10" style="width: 90vw; height: 100%">
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
                                    @click="hideDialog(card)"
                                  >
                                    <h1>X</h1>
                                  </v-btn>
                                </v-card-actions>
                                  <v-row align="center">
                                  <v-col cols="12" align="center" class="register">
                                      <h2 style="color: black">Log in</h2>
                                      <br />
                                      <input type="text" placeholder="Username" v-model="username" />
                                      <input type="password" placeholder="password" v-model="password" />
                                      <v-btn v-on:click="log2(card)">log in</v-btn>
                                  </v-col>
                                  </v-row>
                          </v-col>
                        </v-row>
          </dibox>
        </div>
        <v-container v-if="activador1">
          <!--los cuadros de informacion-->
          <br id="di1" />
          <br />
          <v-card elevation="20" v-scrolls v-if="activador1">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" style="height: 50vh; min-height: 287px">
                  <v-img
                    :src="p1"
                    :lazy-src="p1"
                    style="object-fit: cover; height: 100%"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6" align="center">
                  <h2 align="center">Diseño de Almacenes Nuevos WCW</h2>
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                  >
                    1. Metodología
                    <br />
                    2. Layouts Generales
                    <br />
                    3. Patio de Maniobras
                    <br />
                    4. Recepción
                    <br />
                    5. Oficinas
                    <br />
                    6. Sistemas de Almacenamiento
                    <br />
                    7. Equipos de Material Handling
                    <br />
                    8. Picking
                    <br />
                    9. Despacho
                    <br />
                    10. Integración
                    <br />
                  </p>
                  <br />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <br />
          <br />
          <br />
          <br />
          <v-card elevation="20" v-scrolls v-if="activador1">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  style="height: 50vh; min-height: 287px"
                  class="d-flex d-sm-none"
                >
                  <v-img
                    height="100%"
                    cover
                    :src="p2"
                    :lazy-src="p2"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6" align="center">
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                  >
                    1. Operaciones Especificas
                  </p>
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 6vh; font-size: 100%"
                  >
                    1.1 Transpaletas Manuales vs Eléctricas
                    <br />
                    1.2 Transpaletas Eléctricas vs Transportadores de Fajas
                  </p>
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                  >
                    2. Diseños Integrales
                  </p>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  style="height: 50vh; min-height: 287px"
                  class="d-none d-sm-flex"
                >
                  <v-img
                    height="100%"
                    cover
                    :src="p2"
                    :lazy-src="p2"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <br />
          <br id="di8" />
          <br />
          <br />
          <v-card elevation="20" v-scrolls v-if="activador1">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" style="height: 50vh; min-height: 287px">
                  <v-img
                    :src="p3"
                    :lazy-src="p3"
                    style="object-fit: cover; height: 100%"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6" align="center">
                  <h2 align="center">Análisis financiero</h2>
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                  >
                    1. Inversiones
                    <br />
                    2. Costo de Operación
                    <br />
                    3. Homologación de Alternativas
                    <br />
                    4. ROI
                    <br />
                    5. Etapas
                  </p>
                  <br />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <br />
          <br />
          <br id="di2" />
          <br />
          <v-card elevation="20" v-scrolls v-if="activador1">
            <v-row>
              <v-col
                cols="12"
                sm="6"
                class="ma-0 pa-0 d-flex d-sm-none"
                style="height: 50vh; min-height: 287px"
              >
                <v-img
                  height="100%"
                  cover
                  :src="p4"
                  :lazy-src="p4"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="6" align="center">
                <h2 align="center">Optimización de Almacenes</h2>
                <br />
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  1. Volúmenes y flujos de mercadería
                  <br />
                  2. OC Recibidas
                  <br />
                  3. Pedidos despachados
                </p>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                class="ma-0 pa-0 d-none d-sm-flex"
                style="height: 50vh; min-height: 287px"
              >
                <v-img
                  height="100%"
                  cover
                  :src="p4"
                  :lazy-src="p4"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
          <br />
          <br />
          <br id="di3" />
          <br />
          <v-card elevation="20" v-scrolls v-if="activador1">
            <v-container>
              <h2 align="center">Selección de WMS para CDs WCW</h2>
              <br />
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  style="height: 50vh; min-height: 287px"
                >
                  <h3 align="center">HARDWARE</h3>
                  <v-img
                    :src="p5"
                    style="object-fit: cover; height: 100%"
                  ></v-img>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  sm-offset="3"
                  md="4"
                  style="height: 50vh; min-height: 287px"
                >
                  <h3 align="center">WMS</h3>
                  <v-img
                    :src="p6"
                    style="object-fit: cover; height: 100%"
                  ></v-img>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  style="height: 50vh; min-height: 287px"
                  offset-sm="3"
                  offset-md="0"
                >
                  <h3 align="center">SOFTWARE</h3>
                  <v-img
                    :src="p7"
                    style="object-fit: cover; height: 100%"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <br />
          <br />
          <br id="di4" />
          <br />
          <v-card elevation="20" v-scrolls>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" style="height: 50vh; min-height: 287px">
                  <v-img
                    height="100%"
                    :src="p8"
                    :lazy-src="p4"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6" align="center">
                  <h2 align="center">Gestión y/o ejecución de proyectos logísticos</h2>
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                  >
                    1. Pert
                    <br />
                    <br />
                    2. Diagrama gantt
                    <br />
                    <br />
                    3. Seguimiento
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <br />
          <br id="di5" />
          <cubicaje1 />
        </v-container>
        <br v-if="activador1" />
        <!--pie de pagina -->
        <pie />
      </div>
    </div>
</template>
  
  <script>
  import ima1 from "../assets/imagenes/diseño1.png";
  import ima2 from "../assets/imagenes/diseño2.png";
  import ima3 from "../assets/imagenes/diseño3.png";
  import ima4 from "../assets/imagenes/diseño5.png";
  import ima5 from "../assets/imagenes/diseño6.png";
  import ima6 from "../assets/imagenes/diseño7.png";
  import ima7 from "../assets/imagenes/diseño8.png";
  import ima8 from "../assets/imagenes/diseño4.png";
  import axios from "axios";
  export default {
    name: "diseño-almacen",
    beforeMount(){
    if(localStorage.getItem("token")){
        this.activador1 = true
      }
  },
    setup(){
      useHead({
        title: "Diseño de almacenes",
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
          content: "Diseño de almacenes"
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
          content: "/diseño-almacen"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "Diseño de almacenes"
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
        activador1: false,
        username: "",
        password: "",
        state: false,
        alert: false,
        p1: ima1,
        p2: ima2,
        p3: ima3,
        p4: ima4,
        p5: ima5,
        p6: ima6,
        p7: ima7,
        p8: ima8,
        cards: [
          {nom: "1. Diseño de Almacenes Nuevos WCW", tit: "#di1", show: false},
          {nom: "2. Análisis financiero", tit: "#di8", show: false},
          {nom: "3. Optimización de Almacenes", tit: "#di2", show: false},
          {nom: "4. Selección de WMS para CDs WCW", tit: "#di3", show: false},
          {nom: "5. Gestión y/o ejecución de proyectos", tit: "#di4", show: false},
          {nom: "6. Cubicaje", tit: "#di5", show: false},
          {nom: "7. Ratios", tit: "#di6", show: false},
          {nom: "8. Profiling", tit: "#di7", show: false},
        ],
      };
    },
    methods: {
      async log2(card) {
        const element = document.getElementById(card.tit)
        let result = await axios
          .post("http://107.23.179.170:5000/login", {
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
  .before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
  .p1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.video {
  filter: brightness(25%);
  height: 70vh;
  width: 100vw;
  object-fit: cover;
  display: block;
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
