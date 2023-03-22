<template>
   <div>
    <v-container>
      <GoogleMap
        api-key="AIzaSyDCRCGWZzgNTOoTiR3bc_8OtEFKi-wG2A4"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </v-container>
   </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { GoogleMap, Marker } from "vue3-google-map";
  
  export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
      const center = { lat: -12.113076780989054, lng: -76.9933144365453 };
  
      return { center };
    },
  });
  </script>
  