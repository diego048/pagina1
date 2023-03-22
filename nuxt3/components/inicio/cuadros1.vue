<template>
   <div>
    <v-container>
      <v-row>
        <v-col
          cols="6"
          :md="card.flex1"
          :sm="card.flex"
          v-for="card in cards"
          :key="card.id"
          align="center"
          v-scrolls
        >
          <NuxtLink v-if="activador" to="/proyectos" style="text-decoration: none">
            <v-card elevation="20">
              <v-img
                :src="card.src"
                height="300px"
                cover
                :lazy-src="card.opti"
              ></v-img>
            </v-card>
          </NuxtLink>
          <NuxtLink v-if="!activador" :to="{ name: 'login' }" style="text-decoration: none">
            <v-card elevation="20">
              <v-img
                :src="card.src"
                height="300px"
                cover
                :lazy-src="card.opti"
              ></v-img>
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
   </div>
  </template>
  <script>
import { defineComponent } from "vue";

  //imagenes
  import ima1 from "../../assets/Gloria/Gloria.jpg";
  import ima2 from "../../assets/imagenes/proyecto8.jpg";
  import ima3 from "../../assets/imagenes/poderosa.jpg";
  export default defineComponent({
    beforeMount(){
      if(localStorage.getItem("token")){
        this.activador = true
      };
    },
    data() {
      return {
        activador: false,
        cards: [
          {
            id: 1,
            title: "ESTANTERÍA CONVENCIONAL",
            info: "La Paletización Convencional constituye la solución más adecuada para aquellos almacenes en los que es necesario almacenar productos paletizados con gran variedad de referencias. Esta estantería permite un acceso directo a cada paleta almacenada, así como la posibilidad de retirar cualquier mercancía sin necesidad de mover o desplazar las restantes. Fácil control de stocks, ya que cada hueco pertenece a una paleta, y es adaptable a cualquier tipo de carga, tanto por peso como por volumen.",
            src: ima1,
            flex: 6,
            flex1: 4,
            show: false,
          },
          {
            id: 2,
            title: "ESTANTERÍA COMPACTA (DRIVE-IN)",
            info: "Este sistema de almacenaje está constituido por un conjunto de estantería, que forma calles interiores de carga, con carriles de apoyo para las paletas. Las carretillas ingresan en dichas calles interiores con la carga elevada por encima del nivel en el que va a ser depositada. Esta estantería requiere un mínimo de pasillos para maniobrar, además se logra una máxima utilización del espacio disponible (85%). Es ideal para almacenar productos homogéneos, cuya rotación o acceso directo no sea un factor determinante.",
            src: ima2,
            flex: 6,
            flex1: 4,
            show: false,
          },
          {
            id: 3,
            title: "ESTANTERÍA MEDIA CARGA",
            info: "Los Racks de Media Carga, están diseñados para aquellas bodegas donde la mercancía no será almacenada en pallets, sino que se depositará y retirará de los racks manualmente. Son idóneos cuando las referencias son muchas, las cantidades pequeñas o variables y la rotación fraccionada. El acceso se hace a pie desde el suelo o desde pasarelas elevadas colocadas entre los racks. (Pasillos elevados)",
            src: ima3,
            flex: 12,
            flex1: 4,
            show: false,
          },
        ],
      };
    },
  });
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