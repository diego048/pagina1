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
      
              <div v-if="!mobile"  v-show="!mobile">
        <v-menu open-on-hover activator="parent" v-show="!mobile">
           <template v-slot:activator="{ props }">
              <v-btn class="link" :to="{ name: 'empresa' }" open-on-hover v-show="!mobile" >
                 EMPRESA
              </v-btn>
           </template>
          <v-list>
              <v-list-item
              active-color="white"
              v-for="(item, index) in items3"
              :key="index"
              :value="index"  
              class="link1" :to="item.name"
              >
                <v-list-item-title style="color: black">
                    {{ item.title }}
                </v-list-item-title>
              </v-list-item>
          </v-list>
        </v-menu>
      </div>
      
      <div  v-if="!mobile" v-show="!mobile">
          <v-menu open-on-hover activator="parent" v-show="!mobile">
          <template v-slot:activator="{ props }">
              <v-btn class="link" :to="{ name: 'consultoria-de-proyectos' }" open-on-hover v-show="!mobile" >
                 CONSULTORÍA
              </v-btn>
           </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
              class="link1" :to="{ name: item.name }"
            >
              <v-list-item-title>
                  {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-if="!mobile" v-show="!mobile">
        <v-btn align="center" open-on-hover v-show="!mobile" class="link" :to="{ name: 'equipos' }">
                EQUIPAMIENTO
                <br />
                WCW
        <v-menu open-on-hover activator="parent" v-show="!mobile">
        <template v-slot:activator="{ props }">
              <v-btn class="link" :to="{ name: 'equipos' }" open-on-hover v-show="!mobile">
                 EQUIPAMIENTO
                <br />
                WCW
              </v-btn>
           </template>
          <v-list>
            <v-list-item
            v-for="(item, index) in items2"
              :key="index"
              :value="index"
              class="link1" :to="{ name: item.name }"
            >
              <v-list-item-title>
                  {{ item.title }}
              </v-list-item-title>
            </v-list-item>  
          </v-list>
        </v-menu>
      </div>

        <v-btn class="link" :to="{ name: 'login' }" v-if="!state" v-show="!mobile">
            Login
        </v-btn>
        
        <div v-if="!mobile">
        <v-menu open-on-hover activator="parent" v-show="!mobile">
                <template v-slot:activator="{ props }">
              <v-btn class="link" :to="{ name: 'proyectos' }" open-on-hover v-show="!mobile" >
                 PROYECTOS
                <br />
                WCW
              </v-btn>
           </template>
          <v-list>
            <v-list-item
              active-color="white"
              v-for="(item, index) in items4"
              :key="index"
              :value="index"
              class="link1" :to="item.name"
            >
              <v-list-item-title style="color: black">
                  {{ item.title }}
              </v-list-item-title>
            </v-list-item>  
          </v-list>
        </v-menu>
      </div>

       <v-btn align="center" class="link" :to="{ name: 'logicorp-news' }"  v-if="state" v-show="!mobile">  
          Logicorp
          <br />
          News
        </v-btn>

      <v-btn v-if="state" @click="logout" class="link" v-show="!mobile">
        log out
      </v-btn>
        
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
      mobile1: false,
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
      {title: "NOSOTROS", name: "/empresa"},
      {title: "STATS", name: "/empresa"},
      {title: "MISIÓN", name: "/empresa#mision"},
      {title: "VISIÓN", name: "/empresa#vision"},
      {title: "HISTORIA", name: "/empresa#historia"},
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
      this.mobile1 = true
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
