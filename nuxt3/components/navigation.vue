<template>
  <div>
    <v-layout>        
      <v-navigation-drawer v-model="drawer" app>
        <v-img
          class="mx-2"
          :src="p2"
          contain
        ></v-img>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home"
            title="Home"
            router
            :to="{ name: 'index' }"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group"
            title="Empresa"
            router
            :to="{ name: 'empresa' }"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-hard-hat"
            title="Consultoria"
            router
            :to="{ name: 'consultoria-de-proyectos' }"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-hammer-screwdriver"
            title="Equipamiento WCW"
            router
            :to="{ name: 'equipos' }"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-office-building"
            v-if="state"
            title="Proyectos"
            router
            :to="{ name: 'proyectos' }"
          ></v-list-item>
          <v-list-item
            v-if="!state"
            prepend-icon="mdi-login"
            title="login"
            router
            :to="{ name: 'login' }"
          ></v-list-item>
          <v-list-item
            v-if="state"
            prepend-icon="mdi-logout"
            title="Log out"
            @click="logout"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app color="black accent-3">
        <v-app-bar-nav-icon @click="drawer = !drawer" v-show="mobile">
        </v-app-bar-nav-icon>
        <div>
          <v-app-bar-title class="ma-0 pa-0" style="width: 18vw; min-width: 200px">
            <NuxtLink class="link" :to="{ name: 'index' }" v-show="!mobile">
              <v-img
                class="mx-2"
                :src="p1"
                style="width: 90%"
                contain
              ></v-img>
            </NuxtLink>
        </v-app-bar-title>
      </div>
        <v-spacer></v-spacer>
        <div>
          <v-btn class="link" :to="{ name: 'index' }" v-show="!mobile">
            Inicio
          </v-btn>
      </div>

        <v-btn class="link" :to="{ name: 'login' }" v-if="!state" v-show="!mobile">
            Login
        </v-btn>


       <v-btn align="center" class="link" :to="{ name: 'logicorp-news' }"  v-if="state" v-show="!mobile">  
          Logicorp
          <br />
          News
        </v-btn>

      <v-btn v-if="state" @click="logout" class="link" v-show="!mobile">
        log out
      </v-btn>
        <div class="text-center">
    <v-expand-transition
    >
      <template v-slot:activator="{ props }">
        <v-btn
          dark
          color="primary"
          v-bind="props"
        >
          Scale Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-expand-transition>
  </div>
      </v-app-bar>
      <v-main>
      </v-main>
    </v-layout>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ima1 from "../assets/imagenes/logicorpweb.png";
import ima2 from "../assets/imagenes/logicorpweb1.png";
export default defineComponent({
  data() {
      return {
      expand: false,
      drawer: false,
      mobile: null,
      windowwith: null,
      state: null,
      links1: null,
      p1: ima1,
      p2: ima2,
      items: [
      { title: "DISEÑO DE ALMACENES WCW", name: "diseño-almacen" },
      {
        title: "INGENIERÍA DE PROYECTOS LOGÍSTICOS",
        name: "ingenieria",
      },
    ],
    items2: [
      { title: "SISTEMAS DE ALMACENAJE", name: "sistema-de-almacenaje"},
      { title: "EQUIPOS MH", name: "equipo-mh" },
      { title: "EQUIPOS DE RAMPA", name: "equipos-de-rampas" },
      { title: "LOSAS SUPERPLANAS", name: "losa-superplana" },
      { title: "OFICINAS MODULARES", name: "oficinas-modulares" },
      { title: "SISTEMA WMS", name: "wms" },

    ],
    items3: [
      {title: "NOSOTROS", name: "empresa"},
      {title: "STATS", name: "empresa"},
      {title: "MISIÓN", name: "empresa#mision"},
      {title: "VISIÓN", name: "empresa#vision"},
      {title: "HISTORIA", name: "empresa#historia"},
      {title: "CONTACTANOS", name: "/#formulario"}
    ],
    items4: [
      { title: "EXPERIENCIA", name: "/proyectos" },
      { title: "PROYECTOS", name: "/proyectos#pr1" },
      { title: "CLIENTES", name: "/proyectos#pr2" },

    ],
      }
  },
  beforeMount() {
  this.links1 = localStorage.getItem("token"),
  window.addEventListener("resize", this.checkScreen);
  this.checkScreen();
},
methods: {
  logout() {
    this.state = false;
    localStorage.clear();
    this.$router.push("/");
  },
  checkScreen() {
    this.windowwith = window.innerWidth;
    if (this.windowwith <= 1005) {
      this.mobile = true;
      return;
    }
    this.drawer = false;
    this.mobile = false;
    return;
  },
},
mounted(){
  this.$bus.$on("activador", (isOpen) => {
    this.state = isOpen;
  });
  if (this.links1) {
    this.state = true;
    return;
  }
},

})

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
</style>
