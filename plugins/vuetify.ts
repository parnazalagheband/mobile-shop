import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
    locale: {
      rtl: {
        en: true, 
      },
      locale: 'en',
    },
    ssr: true,
  })

  nuxtApp.vueApp.use(vuetify)
})
