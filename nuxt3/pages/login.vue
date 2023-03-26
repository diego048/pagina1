<template>
    <div
      cover
      style="height: 100vh"
      id="background"
    >
      <v-container>
        <v-alert
          v-model="alert"
          border="start"
          type="error"
          transition="slide-y-transition"
        >
          Usuario o Contraseña Equivocado
        </v-alert>
        <v-row align="center">
          <v-col cols="0" md="2"></v-col>
          <v-col cols="12" md="8" align="center" class="register">
            <v-card class="mx-auto" style="margin-top: 10vh" elevation="20">
              <br />
              <h2>Log in</h2>
              <br />
              <input type="text" placeholder="Username" v-model="username" />
              <input type="password" placeholder="password" v-model="password" />
              <v-btn v-on:click="log1">log in</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    setup(){
      useHead({
        title: "Login",
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
          content: "Login"
        },
        {
          property: "og:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          property: "og:image",
          content: "../assets/botica/1.png",
        },
        {
          property: "og:url",
          content: "/login"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:tittle",
          content: "Login"
        },
        {
          name: "twitter:description",
          content: "Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años"
        },
        {
          name: "twitter:image",
          content: "../assets/botica/1.png"
        },
      ],
      })
    },
    data() {
      return {
        username: "",
        password: "",
        state: false,
        alert: false,
      };
    },
    methods: {
      async log1() {
        let result = await axios
          .post("http://107.23.179.170:5000/login", {
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
          this.$bus.$emit("activador", this.state);
          localStorage.setItem("token", true);
          return navigateTo('/proyectos')
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register input {
    width: 80%;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    padding-left: 20px;
    border: 1px solid #535353;
    border-radius: 5px;
  }
  .register button {
    width: 80%;
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
  #background {
  background: url("../assets/botica/1.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
  </style>
