import datasets from './refex-sample/datasets.json';
import { exponentialDelay } from 'axios-retry';

export default {
  ssr: false,
  loading: '~/components/ModalView/ModalViewLoading.vue',
  loadingIndicator: {
    color: '#488EC4',
    background: 'white',
  },
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Refex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico?' }],
    script: [{ src: 'https://use.typekit.net/duq8dbh.js' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'normalize.css',
    '~/assets/css/fontawesome_styles.css',
    'vue-multiselect/dist/vue-multiselect.min.css',
  ],

  styleResources: {
    sass: ['~/assets/css/mixin.sass'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-tags-input', ssr: false },
    { src: '@/plugins/plugin', mode: 'client' },
    '~/plugins/mixin.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/eslint-module'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources', '@nuxtjs/fontawesome', '@nuxtjs/axios'],

  axios: {
    baseURL: 'https://refex2-api.dbcls.jp/',
    retry: {
      retries: 3,
      retryDelay: exponentialDelay,
    },
  },
  fontawesome: {
    proIcons: {
      duotone: ['faTimesCircle', 'faSpinnerThird'],
    },
    icons: {
      solid: true,
    },
    addCss: false,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['@johmun/vue-tags-input'],
  },

  generate: {
    dir: 'refex',
    routes() {
      let routes = [];
      datasets.map(specie => {
        specie.datasets.forEach(dataset => {
          routes.push(`${specie.species}/${dataset.dataset}`);
        });
      });
      return routes;
    },
  },

  router: {
    base: process.env.NODE_ENV === 'dev' ? '/' : '/RefEx2-test/',
  },
};
