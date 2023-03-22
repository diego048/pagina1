<template>
    <div>
      <v-container align="center" style="color: white" v-scrolls>
        <br />
        <h1>NOSOTROS</h1>
        <br />
        <v-row>
          <v-col cols="0" md="2"></v-col>
          <v-col md="8">
            <div>
              <p style="text-align: justify">
                  Somos un grupo de profesionales especializados en diseño, construcción y equipamiento de almacenes. Contamos
                  con más de 30 años de experiencia en el mercado como los mejores
                  Asesores para el Equipamiento de Almacenes de Clase Mundial el cual te
                  permitirá obtener el mejor ahorro en costo operativo.
              </p>
              <br />
              <p style="text-align: justify">
                  Tenemos el objetivo de crecer con nuestro cliente a la medida que sus
                  necesidades lo requieran y brindarle la mejor asesoría para cada etapa
                  de su negocio distribuyendo su almacén de la manera óptima.
              </p>
              <br />
              <br />
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <br />
            <v-btn style="color: black"
              ><NuxtLink to="empresa#mision" class="link">
                Más información</NuxtLink
              ></v-btn
            >
          </v-col>
        </v-row>
        <br />
      </v-container>
    </div>
  </template>

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
  .link {
    color: black;
    text-decoration: none;
  }
  </style>