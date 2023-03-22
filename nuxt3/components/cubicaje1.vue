<template>
    <div>
      <br />
      <div>
        <!-- La cabecera con la info-->
        <container>
          <v-card elevation="20" v-scrolls>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6"  class="d-none d-sm-flex">
                  <div>
                  <h2 align="center">Cubicaje</h2>
                  <p align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%">
                    <br />
                    1. Elaboración de maestro de articulos
                    <br />
                    <br />
                    2. Elaboración de maestro de articulos por item y empaque master
                    <br />
                    <br />
                    3. Servicio de medición permanente de skus
                  </p>
                  </div>
                </v-col>
                <v-col cols="12" sm="6" align="center">
                  <v-carousel hide-delimiters show-arrows="hover" cycle interval="3000" style="height: 50vh; min-height: 287px">
                    <v-carousel-item
                      :src="p3"
                    ></v-carousel-item>

                    <v-carousel-item
                      :src="p4"
                    ></v-carousel-item>

                    <v-carousel-item
                      :src="p5"
                    ></v-carousel-item>
                    <v-carousel-item>
                      <video controls style="width: 100%; height: 100%">
                        <source :src="p1" type="video/mp4" />
                      </video>
                    </v-carousel-item>
                    <v-carousel-item>
                      <video controls style="width: 100%; height: 100%">
                        <source :src="p2" type="video/mp4" />
                      </video>
                    </v-carousel-item>
                  </v-carousel>
                </v-col>
                <v-col cols="12" sm="6" class="d-sm-none">
                  <div>
                  <h2 align="center">Cubicaje</h2>
                  <p align="justify"
                    style="padding-right: 3vh; padding-left: 3vh; font-size: 100%">
                    <br />
                    1. Elaboración de maestro de articulos
                    <br />
                    <br />
                    2. Elaboración de maestro de articulos por item y empaque master
                    <br />
                    <br />
                    3. Servicio de medición permanente de skus
                  </p>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </container>
        <br id="di6" />

        <v-container>
          <!--los cuadros de informacion-->
          <br />
          <br />
          <v-card elevation="20" v-scrolls>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  style="height: 50vh; min-height: 287px"
                >
                  <v-img
                    height="100vh"
                    :src="p6"
                    :lazy-src="p6"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6" align="center">
                  <h2 align="center">Ratios</h2>
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 6vh; font-size: 100%"
                  >
                    1. Cubicaje
                    <br />
                    2. Inventarios Representativos
                    <br />
                    3. Reporte de Pedidos
                    <br />
                    4. Reporte de Ingresos
                    <br />
                    5. Proyecciones
                    <br />
                    6. DOP
                    <br />
                    7. DDP
                    <br />
                    8. Matriz de Proximidad
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <br id="di7" />
          <br />
          <br />
          <v-card elevation="20" v-scrolls>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" style="height: 50vh; min-height: 287px"  class="d-sm-none">
                  <v-img
                    :src="p7"
                    :lazy-src="p7"
                    style="object-fit: cover; height: 100%"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6" align="center">
                  <h2 align="center">Profiling</h2>
                  <br />
                  <p
                    align="justify"
                    style="padding-right: 3vh; padding-left: 6vh; font-size: 100%"
                  >
                    1. Densidad
                    <br />
                    2. Posiciones Almacenadas
                    <br />
                    3. Skus
                    <br />
                    4. Paretto
                    <br />
                    5. Throughput
                    <br />
                    6. Pedidos Despachados/día
                    <br />
                    7. Líneas por Pedido
                  </p>
                </v-col>
                <v-col cols="12" sm="6" style="height: 50vh; min-height: 287px"  class="d-none d-sm-flex">
                  <v-img
                    :src="p7"
                    :lazy-src="p7"
                    style="object-fit: cover; height: 100%"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
        <br />
      </div>
    </div>
  </template>
  
  <script>

  import ima1 from "../assets/imagenes/cubicaje-1.png";
  import ima2 from "../assets/imagenes/cubicaje-2.png";
  import ima3 from "../assets/imagenes/cubicaje-3.png";
  import ima4 from "../assets/imagenes/cubicaje-4.png";
  import ima5 from "../assets/imagenes/cubicaje-5.png";

  import video from "../assets/imagenes/Multimedia1.mp4";
  import video1 from "../assets/imagenes/Multimedia2.mp4";
  export default {
    name: "CubicajeP",
    data() {
      return {
        p1: video,
        p2: video1,
        p3: ima1,
        p4: ima2,
        p5: ima3,
        p6: ima4,
        p7: ima5,
        justify: ["start", "end", "center", "baseline", "auto", "stretch"],
      };
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
  </style>