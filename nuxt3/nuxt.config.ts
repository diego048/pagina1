// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'
export default defineNuxtConfig({
      server: {
        https: {
          key: fs.readFileSync(fileURLToPath(new URL('./server.key', import.meta.url))),
          cert: fs.readFileSync(fileURLToPath(new URL('./server.crt', import.meta.url)))
        }
      }
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.js' },
    ],
    css:['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css','~/node_modules/vuetify/dist/vuetify.min.css'],
    build: {
        transpile: ['vuetify']
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-16',
            viewport: 'width=50, initial-scale=1',
            title: 'LogicorPeru',
            meta: [
              { name: 'description', content: 'Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años' }
            ],
          }
      },
})
