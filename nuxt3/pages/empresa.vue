<template>
    <div style="overflow-x:hidden">
      <div>
        <video autoplay loop muted playsinline class="video">
          <source src="../assets/imagenes/logicorp1.mp4" type="video/webm" />
          <source src="../assets/imagenes/logicorp1.mp4" type="video/mp4" />
        </video>
      </div>
      <v-container :class="positionClass" ref="myElement" :style="{ top: scrollPosition}">
        <br />
        <div style="position: relative">
          <v-row style="color: white">
          <v-col cols="0" md="1"></v-col>
          <v-col md="10">
            <div>
              <h1 align="center">NOSOTROS</h1>
              <br />
              <h4 style="text-align: justify">
                  Somos un grupo de profesionales especializados en diseño, construcción y equipamiento de almacenes. Contamos
                  con más de 30 años de experiencia en el mercado como los mejores
                  Asesores para el Equipamiento de Almacenes de Clase Mundial el cual te
                  permitirá obtener el mejor ahorro en costo operativo.
              </h4>
              <br />
              <h4 style="text-align: justify">
                  Tenemos el objetivo de crecer con nuestro cliente a la medida que sus
                  necesidades lo requieran y brindarle la mejor asesoría para cada etapa
                  de su negocio distribuyendo su almacén de la manera óptima.
              </h4>
              <br />
            </div>
          </v-col>
        </v-row>
        </div>
        <br />
        <br />
        <InicioContador />
        <br id="mision" />
        <br />
        <div style="position: relative">
          <v-row style="position: static" v-scrolls>
            <v-col
              cols="12"
              sm="6"
              align="center"
              class="align-self-center d-none d-sm-flex"
            >
              <div>
                <h1 class="p1">
                  Diseño y Equipamiento de Almacenes de Clase Mundial (WCW)
                </h1>
                <v-icon color="white" size="70px">mdi-arrow-down</v-icon>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card align="center" class="ma-0 pa-0">
                <v-container>
                  <h1 style="overflow-wrap: break-word">MISIÓN</h1>
                  <v-img
                    src="https://d1ih8jugeo2m5m.cloudfront.net/2021/12/mision-de-una-empresa.jpg"
                  ></v-img>
                  <br />
                  <h4 align="justify">
                    Somos una empresa dedicada al diseño y equipamiento de
                    almacenes WCW, destinada a brindar la solución al problema del
                    cliente de acuerdo a su posibilidad económica, cuyas
                    soluciones analizaremos ordenadamente poniendo de por medio la
                    máxima dedicación posible y a nuestro alcance.
                  </h4>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div style="position: relative" id="vision">
          <v-row style="position: static" v-scrolls>
            <v-col
              cols="12"
              sm="6"
              align="center"
              class="align-self-center d-sm-none"
            >
              <div>
                <h1 class="p1">
                  Diseño y Equipamiento de Almacenes de Clase Mundial (WCW)
                </h1>
                <v-icon color="white" size="70px">mdi-arrow-down</v-icon>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card
                align="center"
                style="background-color: aliceblue; width: 100%"
              >
                <v-container>
                  <h1 style="overflow-wrap: break-word">VISIÓN</h1>
                  <v-img
                    src="https://concepto.de/wp-content/uploads/2016/03/vision.jpg"
                  ></v-img>
                  <br />
                  <h4>
                    Convertirnos en el líder latinoamericano de Diseño y
                    Equipamiento de Almacenes de Clase Mundial.
                  </h4>
                </v-container>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" align="center" class="align-self-center">
              <h1 class="p1">
                Diseño y Equipamiento de Almacenes de Clase Mundial (WCW)
              </h1>
              <v-icon color="white" size="70px">mdi-arrow-down</v-icon>
            </v-col>
          </v-row>
        </div>
        <br id="historia" />
        <br />
        <div v-if="activador1" style="position: relative" id="emp1">
          <v-row style="position: static" v-scrolls>
            <v-col cols="12">
              <v-card align="center" style="position: static">
                <br />
                <h1 style="overflow-wrap: break-word">HISTORIA</h1>
                <h3 align="center">BenchMark</h3>
                <v-timeline align="start">
                  <v-timeline-item>
                    <template v-slot:opposite> 1998 </template>
                        <div class="text-h6 pr-6">FUNDACIÓN: LOGICORP SA</div>
                  </v-timeline-item>
  
                  <v-timeline-item>
                    <template v-slot:opposite> 2001 </template>
                    <div class="d-flex justify-center flex-row">
                      <v-avatar rounded="0" image="https://yt3.googleusercontent.com/ytc/AL5GRJX59cQqSf8oLdZ9hewy-n7ZgNRoKV_jz8abDPxl=s900-c-k-c0x00ffffff-no-rj"></v-avatar>
                      <div class="text-h6 pl-2">HERSIL</div>
                    </div>
                      <h4>Primer almacén con trilaterales del Perú.</h4>
                  </v-timeline-item>
  
                  <v-timeline-item>
                    <template v-slot:opposite> 2004 </template>
                    <div class="d-flex justify-center flex-row">
                      <v-avatar rounded="0" image="https://mir-s3-cdn-cf.behance.net/projects/404/21085935.545af7959670b.png"></v-avatar>
                      <div class="text-h6 pl-2">Gloria</div>
                    </div>
                    <div>
                      <h4>Centro de distribución más alto del país.</h4>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item>
                    <template v-slot:opposite> 2014 </template>
                    <div class="d-flex justify-center flex-row">
                      <v-avatar image="https://logos-world.net/wp-content/uploads/2020/09/Nestle-Logo-2015-present.jpg" size="50" rounded="0"></v-avatar>
                      <div class="text-h6 pl-2">NESTLE</div>
                    </div>
                    <div>
                      <h4>Centro de distribución más moderno del país.</h4>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item>
                    <template v-slot:opposite> 2018 </template>
                    <div class="d-flex justify-center flex-row">
                      <v-avatar image="https://yt3.googleusercontent.com/ytc/AL5GRJUE3TXjZ37ihpKdEPKApQxwXd1utqiBTDT88V6l=s900-c-k-c0x00ffffff-no-rj" size="70" rounded="0"></v-avatar>
                      <div class="text-h6 pl-2">Minera Poderosa</div>
                    </div>
                    <div>
                      <h4>
                        Primer almacén autoportante sostenible de América latina.
                      </h4>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item>
                    <template v-slot:opposite> 2019 </template>
                    <div class="d-flex justify-center flex-row">
                      <v-avatar image="https://www.practicas.pe/organizaciones/practicas-supermercados-peruanos-sa.png" rounded="0"></v-avatar>
                      <div class="text-h6 pl-2">SPSA</div>
                    </div>
                    <div>
                      <h4>Primer centro de distribución E-comerce.</h4>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <br />
        <div v-if="!activador1">
          <v-card @click="showDialog()" elevation="0" outlined color="transparent" align="justify">
                <span style="white-space: normal">
                  <h2 align="center" style="text-decoration: none; color: white"> Más info</h2>
                </span>
          </v-card>
        </div>
      </v-container>
      <div v-if="!activador1">
                <dibox v-show="show1" @close="hideDialog()">
              <v-row style="width: 80vw">
                <v-col cols="0" md="1"></v-col>
                <v-col cols="12" md="10">
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
                        @click="hideDialog()"
                      >
                        <h1>X</h1>
                      </v-btn>
                    </v-card-actions>
                    <v-container>
                      <v-row align="center">
                        <v-col cols="12" align="center" class="register">
                          <h2>Log in</h2>
                          <br />
                          <input type="text" placeholder="Username" v-model="username" />
                          <input type="password" placeholder="password" v-model="password" />
                          <v-btn v-on:click="log2()">log in</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                </v-col>
              </v-row>
          </dibox>
      </div>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  import axios from "axios";
  // Components
  
  export default defineComponent({
    name: "empresa",
      unmounted(){
    document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
  },
    beforeMount(){
    if(localStorage.getItem("token")){
        this.activador1 = true
      }
  },
    setup(){
      useHead({
        title: "Empresa",
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
          content: "Empresa"
        },
        {
          property: "og:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          property: "og:image",
          content: "https://d1ih8jugeo2m5m.cloudfront.net/2021/12/mision-de-una-empresa.jpg",
        },
        {
          property: "og:url",
          content: "/empresa"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "Empresa"
        },
        {
          name: "twitter:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          name: "twitter:image",
          content: "https://d1ih8jugeo2m5m.cloudfront.net/2021/12/mision-de-una-empresa.jpg"
        },
      ],
      })
    },
    data() {
      return {
        show1: false,
        activador1: false,
        username: "",
        password: "",
        state: false,
        alert: false,
        scrollPosition: 0,
        isFixed: true,
      };
    },
    components: {},
    computed: {
    positionClass() {
      return this.isFixed ? "static1" : "fixe1";
    }
  },
    methods: {
      async log2() {
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
          this.username = "";
          this.password = "";
          this.state = true;
          this.activador1 = true;
          this.$bus.$emit("activador", this.state);
          localStorage.setItem("token", true);
          this.show = false;
          return navigateTo("#emp1");
        }
      },
      showDialog() {
        this.scrollPosition = window.pageYOffset;
        this.show1 = true;
        this.isFixed = false;
        this.scrollPosition = this.$refs.myElement.getBoundingClientRect().top + 'px';
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
    },
    hideDialog() {
        this.show1 = false;
        document.body.style.position = 'static';
        this.isFixed = true;
        this.scrollPosition = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    }
    },
  });
  </script>
  <style scoped>
  .p1 {
    position: static;
    color: white;
    width: 100%;
  }
  .video {
    filter: brightness(25%);
    position: fixed;
    object-fit: cover;
    height: 100vh;
    width: 100vw;
    z-index: -1;
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
  .static1 {
  position: static;
}
.fixe1 {
    position: fixed;
}
  </style>
