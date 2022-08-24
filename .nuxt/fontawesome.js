import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  fas as freeFasFas
} from '@fortawesome/free-solid-svg-icons'

import {
  faTimesCircle as proFadFaTimesCircle,
  faSpinnerThird as proFadFaSpinnerThird
} from '@fortawesome/pro-duotone-svg-icons'

library.add(
  freeFasFas,
  proFadFaTimesCircle,
  proFadFaSpinnerThird
)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('FontAwesomeLayers', FontAwesomeLayers)
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
