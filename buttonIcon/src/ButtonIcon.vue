<template>
  <div
    role="button"
    class="cw-btn-icon user-select-none cursor-pointer font-weight-normal text-black"
    @click="onClick"
    :class="[disabled ? 'disabled' : '', cssClass]"
  >
    <div class="d-inline-block" :class="cssIcon">
      <cw-svg-con class="cw-icon cw-icon-sm" :icon="iconName"></cw-svg-con>
    </div>
    <span class="ml-2" :class="cssText">{{ text }}</span>
  </div>
</template>

<script>
import CwSvgIcon from '~/svgIcon/src/SvgIcon.vue';

export default {
  components: {
    CwSvgIcon,
  },
  props: {
    cssClass: { type: String },
    cssIcon: { type: String, default: '' },
    cssText: { type: String },
    disabled: { type: Boolean, default: false },
    iconName: { type: String, required: true },
    text: { type: String, required: true },
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  font-family: 'Lato', sans-serif;
}
</style>
