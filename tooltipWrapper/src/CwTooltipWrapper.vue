<template>
    <div :class="cssWrapperClass">
            <slot>

            </slot>
            <div v-if="label" :class="cssBodyWrapper" class="tooltip-body text-left tooltip-text position-absolute">
                <template v-if="isArray">
                    <template v-for="(l, index) in label">
                        {{l}}
                        <template v-if="index != label.length - 1">
                            <br><br>
                        </template>
                    </template>
                </template>
                <template v-else>
                    {{ label }}
                </template>
            </div>
        </div>
  </template>

  <script>
  import CwSvgIcon from '~/svgIcon/src/SvgIcon.vue';

  export default {
    components: {
        CwSvgIcon,
    },
    props: {
        label: [ String, Array],
        cssHeaderWrapper: { type: String, default: '' },
        cssBodyWrapper: { type: String, default: '' },
    },
    computed: {
        cssWrapperClass() {
            if (this.label) {
                return 'cw-slot-tooltips cw-tooltip-wrapper position-relative ' + this.cssHeaderWrapper;
            }
        },
        isArray: function() {
            return typeof this.label === 'object' && typeof this.label.length !== 'undefined';
        },
    },
  };
  </script>

  <style lang="scss" scoped>
  button {
    font-family: 'Lato', sans-serif;
  }
  </style>
