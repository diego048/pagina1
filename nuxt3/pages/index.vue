<template>
  <div>
    <!-- imagen de cabecera -->
    <div style="position: relative">
      <video autoplay loop muted playsinline class="video">
        <source src="../assets/imagenes/logicorp1.mp4" type="video/webm" />
        <source src="../assets/imagenes/logicorp1.mp4" type="video/mp4" />
      </video>
      <v-container class="p1" align="center">
        <h1>
          LÍDERES EN CONSULTORIA Y EQUIPAMIENTO DE ALMACENES DE CLASE MUNDIAL
        </h1>
      </v-container>
    </div>
    <div cover id="background">
      <InicioSegundoco />
    </div>
    <div style="background-color: rgba(215, 86, 0, 0.92)">
      <InicioContador />
    </div>
    <br />
    <v-container>
      <h1
        style="color: blue; font-size: 300%; font-family: Verdana, sans-serif"
        align="center"
      >
        PRODUCTOS
      </h1>
    </v-container>
    <NuxtLink :to="{ name: 'consultoria-de-proyectos' }" style="text-decoration: none">
      <InicioParrafod1 />
    </NuxtLink>
    <br />
    <NuxtLink :to="{ name: 'equipos' }" style="text-decoration: none">
      <InicioParrafoi1 />
    </NuxtLink>
    
    <br />
    <!--</div>-->
    <div
      cover
      id="background1"
    >
      <br />
      <div style="color: white" align="center">
        <h1>PROYECTOS</h1>
        <p>Estas son algunas fotos de nuestros proyectos, pulse en alguna para verlas</p>
        <InicioCuadros1 />
      </div>
      <br />
    </div>
    <br />
    <h1 align="center" style="color: blue">CONTACTO</h1>
    <div>
      <v-container>
        <v-img :src="ima1" style="height: 500px" cover></v-img>
      </v-container>
    </div>
    <br />
    <InicioForm id="formulario" />
    <br />
    <!-- Pie de pagina -->
    <pie />
  </div>
</template>

<script>
import imagen1 from "../assets/imagenes/imagen30.png";
import { defineComponent } from "vue";
export default defineComponent ({
  data () {
    return {
      ima1: imagen1,
    }
  }
})
</script>

<style scoped>
#background1 {
  background: url("../assets/botica/GERENCIA-2.jpg");
  background-size: cover;
}
#background {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/botica/render.jpg");
  background-position: 50% 30%;
  background-repeat: no-repeat;
  background-size: cover;
}
.im1 {
  width: 100%;
  filter: brightness(25%);
  height: 80vh;
  object-fit: cover;
}
.im2 {
  width: 100%;
  filter: brightness(25%);
  height: 35vh;
  object-fit: cover;
}
.im3 {
  width: 100%;
  filter: brightness(9%);
  height: 25vh;
  object-fit: cover;
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
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  display: block;
}
</style>
