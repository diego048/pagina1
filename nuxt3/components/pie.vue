<template>
    <div cover id="background1">
      <v-container style="color: white">
        <br class="d-none d-sm-flex" />
        <v-row class="d-none d-sm-flex">
          <v-col cols="1" sm="1" md="1">
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'index' }"
            >
              INICIO
            </NuxtLink>
            <br />
          </v-col>
          <v-col cols="1" sm="2" md="2">
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'empresa' }"
            >
              EMPRESA
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'empresa' }"
              style="font-weight: lighter"
            >
              NOSOTROS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'empresa' }"
              style="font-weight: lighter"
            >
              STATS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/empresa#mision"
              style="font-weight: lighter"
            >
              MISIÓN
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/empresa#vision"
              style="font-weight: lighter"
            >
              VISIÓN
            </NuxtLink>
            <br />
            <NuxtLink
              v-if="valor"
              class="link"
              to="/empresa#historia"
              style="font-weight: lighter"
            >
              HISTORIA
            </NuxtLink>
            <NuxtLink
              v-if="!valor"
              class="link"
              to="/login"
              style="font-weight: lighter"
            >
              HISTORIA
            </NuxtLink>
          </v-col>
          <v-col cols="3" sm="3" md="3">
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'consultoria-de-proyectos' }"
            >
              CONSULTORÍA
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'diseño-almacen' }"
            >
              DISEÑO DE ALMACENES WCW
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'ingenieria' }"
            >
              INGENIERÍA DE PROYECTOS LOGÍSTICOS
            </NuxtLink>
            <br />
          </v-col>
          <v-col cols="4" sm="3" md="3">
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'equipos' }"
            >
              EQUIPAMIENTO WCW
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'sistema-de-almacenaje' }"
            >
              SISTEMAS DE ALMACENAJE
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'equipo-mh' }"
            >
              EQUIPOS MH
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'losa-superplana' }"
            >
              LOSAS SUPERPLANAS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'equipos-de-rampas' }"
            >
              EQUIPO DE RAMPA
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'oficinas-modulares' }"
            >
              OFICINAS MODULARES
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: lighter"
              :to="{ name: 'wms' }"
            >
              SISTEMA WMS
            </NuxtLink>
          </v-col>
          <v-col cols="2" sm="2" md="2" class="d-none d-md-flex">
            <div v-if="valor">
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'proyectos' }"
            >
              PROYECTOS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'proyectos' }"
              style="font-weight: lighter"
            >
              EXPERIENCIA
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/proyectos#pr1"
              style="font-weight: lighter"
            >
              PROYECTOS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              to="/proyectos#pr2"
              style="font-weight: lighter"
            >
              CLIENTES
            </NuxtLink>
            </div>
            <div v-if="!valor">
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
              PROYECTOS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'login' }"
              style="font-weight: lighter"
            >
              EXPERIENCIA
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'login' }"
              style="font-weight: lighter"
            >
              PROYECTOS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              :to="{ name: 'login' }"
              style="font-weight: lighter"
            >
              CLIENTES
            </NuxtLink>
            </div>
          </v-col>
          <v-col cols="1" sm="2" md="1">
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
              LOGIN
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: bold"
              to="/#formulario"
            >
              CONTACTO
            </NuxtLink>
            <br />
            <NuxtLink
              v-if="valor"
              class="link d-none d-sm-flex d-md-none"
              style="font-weight: bold"
              :to="{ name: 'proyectos' }"
            >
              PROYECTOS
            </NuxtLink>
            <NuxtLink
              v-if="!valor"
              class="link d-none d-sm-flex d-md-none"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
              PROYECTOS
            </NuxtLink>
          </v-col>
        </v-row>
        <v-row class="d-flex d-sm-none">
          <v-col align="center">
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'index' }"
            >
              INICIO
            </NuxtLink>
            <br />
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'empresa' }"
            >
              EMPRESA
            </NuxtLink>
            <br />
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'consultoria-de-proyectos' }"
            >
              CONSULTORÍA
            </NuxtLink>
            <br />
            <NuxtLink
              style="font-weight: bold"
              class="link"
              :to="{ name: 'equipos' }"
            >
              EQUIPAMIENTO WCW
            </NuxtLink>
            <br />
            <NuxtLink
              v-if="valor"
              class="link"
              style="font-weight: bold"
              :to="{ name: 'proyectos' }"
            >
              PROYECTOS
            </NuxtLink>
            <NuxtLink
              v-if="!valor"
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
              PROYECTOS
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: bold"
              :to="{ name: 'login' }"
            >
              LOGIN
            </NuxtLink>
            <br />
            <NuxtLink
              class="link"
              style="font-weight: bold"
              to="/#formulario"
            >
              CONTACTO
            </NuxtLink>
          </v-col>
        </v-row>
        <br />
        <h3 align="center">
          © 2022 LogicorPeru SAC - Todos los derechos reservados.
        </h3>
      </v-container>
    </div>
  </template>
  <script>
  export default {
    beforeMount() {
      if(localStorage.getItem("token")){
        this.valor = true
      }
    },
    data(){
      return {
        valor: false,
      };
    }
  }
  </script>
  <style scoped>
  .link {
    color: #fff;
    text-decoration: none;
  }
  .link1 {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  #background1 {
    background: linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)),
      url("../assets/botica/INGRESO-A-OFICINAS.jpg");
    background-position: 50% 30%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  </style>
