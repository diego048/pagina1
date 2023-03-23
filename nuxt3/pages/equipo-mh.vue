<template>
    <div>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="4" class="align-self-center">
              <div class="m29">
                <h1 style="color: rgb(255, 102, 26)">EQUIPO MH</h1>
                <p align="justify">
                  Ofrecemos la venta y alquiler de toda la gama de equipos de “Material Handling”
                </p>
                <br />
                <v-btn color="rgb(255, 102, 26)" to="equipo-mh#equipomh1" 
                  style="text-decoration: none; color: black"
                >
                  <span style="white-space: normal">
                    MÁS INFORMACIÓN
                  </span>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="8">
              <v-img
                :src="p1"
                :lazy-src="p1"
                style="height: 80vh"
              />
            </v-col>
          </v-row>
        </v-container>
      <v-container id="equipomh1">
        <h1 align="center">EQUIPOS DE MH</h1>
        <br />
        <v-row class="d-flex">
            <v-col
              cols="6"
              md="4"
              sm="6"
              v-for="card in cards"
              :key="card.id"
              class="flex d-flex align-self-stretch"
            >
                <v-card @click="showDialog(card)" elevation="21" align="center" style="width: 100%"  v-scrolls>
                    <v-img :src="card.p3" height="200px"></v-img>
                    <v-card-title
                        class="text-pre-wrap"
                        style="word-break: break-word"
                    >
                        {{ card.p1 }}
                    </v-card-title>

                    <v-card-subtitle> más info </v-card-subtitle>
                </v-card>                
                <dibox v-show="card.show" @close="hideDialog(card)">
                    <div class="d-flex justify-space-between">
                      <v-card-title class="d-flex justify-end"
                        >{{ card.p1 }}</v-card-title
                      >
                      <v-card-actions class="d-flex justify-start">
                        <v-btn
                          style="color: rgb(203, 50, 52)"
                          variant="text"
                          @click="hideDialog(card)"
                        >
                          <h1>X</h1>
                        </v-btn>
                      </v-card-actions>
                      </div>
                      <v-divider></v-divider>
                      <v-row>
                          <v-col cols="12" sm="6" md="6" class="align-self-center">
                            {{ card.p2 }}
                            <br />
                            <br />
                            <div align="center">
                              <v-btn color="rgb(255, 102, 26)" to="/#formulario" 
                                style="text-decoration: none; color: black"
                              >
                                <span style="white-space: normal">
                                  MÁS INFORMACIÓN
                                </span>
                            </v-btn>
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-img :src="card.p3" style="height: 70vh"></v-img>
                          </v-col>
                        </v-row>
                </dibox>
            </v-col>           
        </v-row>
        <br />
        <v-row>
          <v-col>
            <v-card elevation="0" outlined color="transparent">
              <br />
                <h2 align="center">ALQUILER DE EQUIPOS DE MATERIAL HANDLING</h2>
              <v-card-text align="justify" class="text-body-1 font-weight-regular">
                Ofrecemos la mayor variedad de equipos de alquiler, nuevos y
                usados, garantizando el mayor nivel de eficiencia en sus
                operaciones. Nuestro servicio de alquiler incluye el mantenimiento
                integral de las máquinas y la capacitación en el uso de las
                máquinas para sus operadores.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
    <br />
    <pie />
  </div>
</template>

<script>
  import transver from "../assets/imagenes/transelevador.jpg";
  import montacarga from "../assets/imagenes/carro.jpeg";
  import order from "../assets/imagenes/order.jpg";
  import retractiles from "../assets/imagenes/retractil.jpeg";
  import trilateral from "../assets/imagenes/trilateral.jpg";
  import ima1 from "../assets/imagenes/cabecera.png";
export default {
    setup(){
      useHead({
        title: "Equipo MH",
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
          content: "Equipo MH"
        },
        {
          property: "og:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          property: "og:image",
          content: "https://mecaluxes.cdnwm.com/manual-de-almacenaje/transpaletas/image-1.1.0.jpg",
        },
        {
          property: "og:url",
          content: "/equipo-mh"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "Equipo MH"
        },
        {
          name: "twitter:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          name: "twitter:image",
          content: "https://mecaluxes.cdnwm.com/manual-de-almacenaje/transpaletas/image-1.1.0.jpg"
        },
      ],
      })
    },
  data() {
    return {
      p1: ima1,
      scrollPosition: 0,
      cards: [
          {
            id: 1,
            p1: "Transpaleta",
            p2: "No montan ningún dispositivo eléctrico, por lo que los movimientos de desplazamiento se realizan arrastrándolas manualmente. Sus patines (las plataformas paralelas que sostienen la carga) se pueden elevar ligeramente para levantar el palet del suelo y facilitar así su desplazamiento. Son de uso muy generalizado en la mayoría de los almacenes, sobre todo en trabajos auxiliares.",
            p3: "https://mecaluxes.cdnwm.com/manual-de-almacenaje/transpaletas/image-1.1.0.jpg",
            p4: "https://mecaluxes.cdnwm.com/manual-de-almacenaje/transpaletas/image-1.1.0.jpg",
          },
          {
            id: 2,
            p1: "Montacargas CB",
            p2: "Estos son uno de los tipos más populares de montacargas elevadores industriales, pueden ser eléctricos o de combustión interna (duales o Diesel). Estos pueden llegar desde 3 a 6 metros y pueden manejar cargas a a partir de 1 a 10 toneladas",
            p3: "https://consitecperu.com/wp-content/uploads/2021/02/montacargas-contrabalanceado.jpg",
            p4: "https://consitecperu.com/wp-content/uploads/2021/02/montacargas-contrabalanceado.jpg",
          },
          {
            id: 5,
            p1: "Retractiles",
            p2: "El retráctil es una máquina eléctrica que realiza el desplazamiento y las maniobras de giro y elevación retrayendo el mástil, con lo que lo desplazan hacia el centro de gravedad de la máquina.",
            p3: retractiles,
            p4: retractiles,
          },
          {
            id: 3,
            p1: "Montacargas Articulado",
            p2: "El Montacargas Articulado tiene una influencia directa sobre las soluciones de almacenaje debido que determinan la anchura mínima de los pasillos y, como consecuencia, la cantidad de estanterías que se puedan instalar y la capacidad de almacenaje. A su vez, los montacargas también inciden en la altura máxima de las estanterías, pudiendo ser mayor o menor según los casos. Los montacargas de almacén son responsables del movimiento interno de la mercancía, desde los muelles a las ubicaciones de las estanterías, o desde las áreas de producción al almacén.",
            p3: montacarga,
            p4: montacarga,
          },
          {
            id: 4,
            p1: "Order Pickers",
            p2: "Los recolectores de pedidos se utilizan principalmente para operaciones de recolección de material de rack de almacén. alta selección de material de la repisa. con capacidad de carga de 1t, con una altura de elevación de 6 m; con el controlador usa curtis;",
            p3: order,
            p4: order,
          },
          {
            id: 6,
            p1: "Trilaterales",
            p2: "Los trilaterales son máquinas para trabajar en pasillos estrechos (de entre 1.500 y 1.800 mm), gracias a lo cual se aumenta considerablemente la capacidad de almacenaje. Estos pueden alcanzar alturas de elevación de la carga por encima de los 14 m.",
            p3: trilateral,
            p4: trilateral,
          },
          {
            id: 7,
            p1: "Transelevador",
            p2: "Su estructura se compone de dos columnas verticales y, en el medio, se ubica la cuna de elevación, con la que se accede a todos los niveles de almacenaje. Es un tipo de transelevador más robusto y resistente que el monocolumna, por lo que resulta perfecto cuando hay que manipular cargas más pesadas. A su vez, también proporciona un elevado rendimiento en cuanto a agilidad.",
            p3: transver,
            p4: transver,
          },
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
.texto {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 410%;
}
.contenedor {
  position: relative;
}
.m2 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
}
</style>
