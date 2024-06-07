<template>
  <div :class="cssWrapper" class="badge badge-pill badge-dark font-size-10">
    test
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  variant: {
    cssWrapper: String,
  },
});
</script>

<style lang="scss" scoped>
.badge {
}
</style>
