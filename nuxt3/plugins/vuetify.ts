import {createVuetify} from 'vuetify'
import * as directives from 'vuetify/directives'
import { VAvatar } from 'vuetify/components/VAvatar'
import { VCard } from 'vuetify/components/VCard'
import { VTabs } from 'vuetify/components/VTabs'
import { VTab } from 'vuetify/components/VTabs'
import { VContainer } from 'vuetify/components/VGrid'
import { VCardText } from 'vuetify/components/VCard'
import { VCardActions } from 'vuetify/components/VCard'
import { VWindow } from 'vuetify/components/VWindow'
import { VWindowItem } from 'vuetify/components/VWindow'
import { VRow } from 'vuetify/components/VGrid'
import { VCol } from 'vuetify/components/VGrid'
import { VImg } from 'vuetify/components/VImg'
import { VCarousel } from 'vuetify/components/VCarousel'
import { VCarouselItem } from 'vuetify/components/VCarousel'
import { VCardTitle } from 'vuetify/components/VCard'
import { VCardSubtitle } from 'vuetify/components/VCard'
import { VDivider } from 'vuetify/components/VDivider'
import { VLayout } from 'vuetify/components/VLayout'
import { VNavigationDrawer } from 'vuetify/components/VNavigationDrawer'
import { VList } from 'vuetify/components/VList'
import { VListItemTitle } from 'vuetify/components/VList'
import { VListItem } from 'vuetify/components/VList'
import { VAppBar } from 'vuetify/components/VAppBar'
import { VAppBarNavIcon } from 'vuetify/components/VAppBar'
import { VAppBarTitle } from 'vuetify/components/VAppBar'
import { VSpacer } from 'vuetify/components/VGrid'
import { VMenu } from 'vuetify/components/VMenu'
import { VBtn } from 'vuetify/components/VBtn'
import { VMain } from 'vuetify/components/VMain'
import { VSheet } from 'vuetify/components/VSheet'
import { VSlideGroup } from 'vuetify/components/VSlideGroup'
import { VSlideGroupItem } from 'vuetify/components/VSlideGroup'
import { VScaleTransition } from 'vuetify/components'
import { VAlert } from 'vuetify/components/VAlert'
import { VTimeline } from 'vuetify/components/VTimeline'
import { VTimelineItem } from 'vuetify/components/VTimeline'
import { VTable } from 'vuetify/components/VTable'
import { VIcon } from 'vuetify/components/VIcon'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components: {
            VListItemTitle,
            VIcon,
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
