<template>
  <button :id="id" :name="name" :disabled="disabled" :type="type" class="btn" :class="'btn-' + styleType"
      @click="onClick">
      <span
          v-show="isSpinner"
          :id="id + 'Spinner'"
          class="spinner-border spinner-border-sm mr-1"
          role="status"
          aria-hidden="true">
      </span>
      <slot></slot>
      {{ label }}
      <slot name="right"></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

  name: '',

  props: {
    id: null,
    name: null,
    label: null,
    type: {
        default: "button"
    },
    styleType: {
        default: "default"
    },
    placeholder: null,
    action: null,
    disabled: null,
    isSpinner: { type: Boolean }
  },

  data() {

    return {



    }

  },

  computed: {},

  watch: {},

  methods: {
    onClick: function() {
        this.$emit('action');
        if (this.isSpinner) {
            document.getElementById(this.id + 'Spinner').classList.remove('d-none');
            document.getElementById(this.id).disabled = true;
        }
    }
  },

  components: {},

  setup() {

    return {



    }

  }

});

</script>

<style lang="scss" scoped>


</style>