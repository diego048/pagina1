<template>
   <div>
    <v-container v-scrolls>
      <v-row>
        <v-col>
            <v-alert
              v-model="alert"
              type="success"
              title="Mensaje enviado"
            ></v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" sm="6">
          <h1>Preguntas</h1>
          <p>
            Para todo tipo de preguntas, comentarios e inquietudes; por favor
            llámanos: 956 754 176 o completa el formulario a continuación
          </p>
          <br />
          <p>
            Jr. Tinajones 181 <br />
            Santiago de Surco <br />
            Lima - Perú<br />
          </p>
          <br />
          <h1>Oficina principal</h1>
          <p align="justify">
            jfield@logicorperu.com <br />
            Teléfono: 956 754 176
          </p>
        </v-col>
        <v-col class="register" cols="12" md="6" sm="6">
          <h1 align="center" style="color: orangered">Contactanos</h1>
          <input type="text" placeholder="Nombre" v-model="nombre" />
          <input type="text" placeholder="E-mail" v-model="correo" />
          <textarea type="text" rows="6" placeholder="Mensaje" v-model="texto" ></textarea>
          <button v-on:click="form">Enviar</button>
        </v-col>
      </v-row>
    </v-container>
   </div>
  </template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        correo: "",
        nombre: "",
        texto: "",
        alert: false,
      };
    },
    methods: {
      async form() {
        let result = await axios.post("http://127.0.0.1:5000/correo", {
          correo: this.correo,
          nombre: this.nombre,
          texto: this.texto,
        });
        console.warn(result);
        if (result.data.success == true) {
          this.alert = true;
            setTimeout(() => {
              this.alert = false;
            }, 5000);
            this.correo = "";
            this.nombre = "";
            this.texto = "";
        }
      },
    },
  }
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
  .register input {
    width: 100%;
    height: 40px;
    display: block;
    margin: 20px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    padding-left: 20px;
  }
  .register textarea {
    width: 100%;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    resize: none;
    padding-left: 20px;
    margin-bottom: 30px;
  }
  .register button {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    background-color: #2640d3;
    color: #fff;
    border: none;
    border-radius: 5px;
    text-decoration: none;
  }
  </style>
  