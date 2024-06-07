<template>
  <svg class="logo lexicon-icon cw-icon icon" v-html="getIcon" :class="cssClass"></svg>
</template>

<script>
import { defineComponent } from 'vue';
import twoFaApp from './img/2fa-app.svg?raw';
import close from './img/close.svg?raw';
import search from './img/search.svg?raw';
import circleClose from './img/circle-close.svg?raw';
import backCircle from './img/back-circle.svg?raw';
export default defineComponent({
  data: () => ({
    twoFaApp,
    close,
    search,
    circleClose,
    backCircle,
  }),
  props: {
    iconUrl: {
      type: String,
      required: true,
      default: 'twoFaApp',
    },
    cssClass: {
      type: [String, Array],
      default: ''
    },
  },
  computed: {
    getIcon() {
      return this[this.iconUrl];
    },
  },
});
</script>

<style lang="scss">
.cw-icon {}
</style>
