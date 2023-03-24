// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css','~/node_modules/vuetify/dist/vuetify.min.css'],
    build: {
        transpile: ['vuetify']
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'LogicorPeru',
            meta: [
              { name: 'description', content: 'Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años' }
            ],
          }
      },
})
