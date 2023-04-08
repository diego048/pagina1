import {createVuetify} from 'vuetify'
import * as directives from 'vuetify/directives'
import { VAvatar } from 'vuetify/components/'
import { VCard } from 'vuetify/components/'
import { VTabs } from 'vuetify/components/'
import { VTab } from 'vuetify/components/'
import { VContainer } from 'vuetify/components/'
import { VCardText } from 'vuetify/components/'
import { VCardActions } from 'vuetify/components/'
import { VWindow } from 'vuetify/components/'
import { VWindowItem } from 'vuetify/components/'
import { VRow } from 'vuetify/components/'
import { VCol } from 'vuetify/components/'
import { VImg } from 'vuetify/components/'
import { VCarousel } from 'vuetify/components/'
import { VCarouselItem } from 'vuetify/components/'
import { VCardTitle } from 'vuetify/components/'
import { VCardSubtitle } from 'vuetify/components/'
import { VDivider } from 'vuetify/components/'
import { VLayout } from 'vuetify/components/'
import { VNavigationDrawer } from 'vuetify/components/'
import { VList } from 'vuetify/components/'
import { VListItem } from 'vuetify/components/'
import { VAppBar } from 'vuetify/components/'
import { VAppBarNavIcon } from 'vuetify/components/'
import { VAppBarTitle } from 'vuetify/components/'
import { VSpacer } from 'vuetify/components/'
import { VMenu } from 'vuetify/components/'
import { VBtn } from 'vuetify/components/'
import { VMain } from 'vuetify/components/'
import { VSheet } from 'vuetify/components/'
import { VSlideGroup } from 'vuetify/components/'
import { VSlideGroupItem } from 'vuetify/components/'
import { VScaleTransition } from 'vuetify/components/'
import { VAlert } from 'vuetify/components/'
import { VTimeline } from 'vuetify/components/'
import { VTimelineItem } from 'vuetify/components/'
import { VTable } from 'vuetify/components/'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components: {
            VAvatar,
            VCard,
            VTabs,
            VTab,
            VContainer,
            VCardText,
            VCardActions,
            VWindow,
            VWindowItem,
            VRow,
            VCol,
            VImg,
            VCarousel,
            VCarouselItem,
            VCardTitle,
            VCardSubtitle,
            VDivider,
            VLayout,
            VNavigationDrawer,
            VList,
            VListItem,
            VAppBar,
            VAppBarNavIcon,
            VAppBarTitle,
            VSpacer,
            VMenu,
            VBtn,
            VMain,
            VSheet,
            VSlideGroup,
            VSlideGroupItem,
            VScaleTransition,
            VAlert,
            VTimeline,
            VTimelineItem,
            VTable,
        },
        directives
    })
    nuxtApp.vueApp.use(vuetify)
})
