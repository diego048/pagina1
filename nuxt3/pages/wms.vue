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
                  SISTEMA WMS
                </h1>
                <br />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div>
        <v-container>
          <!--los cuadros de informacion-->
          <br />
          <br />
          <v-card elevation="20" v-scrolls>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                class="ma-0 pa-0 d-none d-sm-flex"
                style="height: 50vh; min-height: 287px"
              >
                <v-img
                  cover
                  src="https://ff95bf1581c181ae3e2b-8be01e280b8e7aa4ff8eaae97998fa2c.ssl.cf1.rackcdn.com/Warehouse-Management-System-WMS-721-min.jpg"
                  :lazy-src="p4"
                  style="object-fit: cover; height: 100%"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="6" align="center">
                <br />
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  Los almacenes se encuentran en el centro de las operaciones de
                  fabricación y cadena de suministro porque contienen todo el
                  material utilizado o producido en esos procesos, desde las
                  materias primas hasta los productos terminados. El propósito de
                  un WMS es ayudar a garantizar que los bienes y materiales se
                  muevan a través de los almacenes de la manera más eficiente y
                  rentable.
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
                  src="https://ff95bf1581c181ae3e2b-8be01e280b8e7aa4ff8eaae97998fa2c.ssl.cf1.rackcdn.com/Warehouse-Management-System-WMS-721-min.jpg"
                  :lazy-src="p4"
                  style="object-fit: cover; height: 100%"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
          <br />
          <br />
          <br />
          <br />
          <v-card elevation="20" v-scrolls>
            <v-row>
              <v-col cols="12" sm="6" align="center">
                <br />
                <p
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  Un WMS maneja muchas funciones que permiten estos movimientos,
                  incluido el seguimiento de inventario, la selección, la
                  recepción y el almacenamiento. Un WMS también proporciona
                  visibilidad del inventario de una organización en cualquier
                  momento y lugar, ya sea en una instalación o en tránsito.
                </p>
                <br />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                class="ma-0 pa-0"
                style="height: 50vh; min-height: 287px"
              >
                <v-img
                  height="100%"
                  cover
                  src="https://mecaluxpe.cdnwm.com/blog/img/implantacion-sistema-gestion-almacenes.1.0.jpg"
                  :lazy-src="p4"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
        <br />
        <!--pie de pagina -->
        <pie />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    setup(){
      useHead({
        title: "WMS",
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
          content: "WMS"
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
          content: "/wms"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "WMS"
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
  #background {
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
      url("../assets/imagenes/imagen19.jpg");
    background-position: 50% 35%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  </style>
  