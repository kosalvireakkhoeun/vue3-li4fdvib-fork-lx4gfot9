<template>
  <ul class="dropdown-menu shadow z-index-10" :class="cssWrapper">
    <slot name="header"></slot>
    <li v-if="showEmptyState">
      <span class="text-center text-wrap text-dark d-block">{{
        emptyStateText
      }}</span>
    </li>
    <li
      v-for="(item, index) in items"
      :key="'item' + index"
      :class="{ disabled: item.disabled }"
      :disabled="item.disabled"
    >
      <a
        class="dropdown-item text-truncate"
        @click="$emit('onClick', item, $event)"
        href="javascript:;"
        :class="itemClass"
        :title="getLabel(item)"
        data-toggle="tooltip"
        data-placement="top"
      >
        <slot name="renderItem" :item="item">
          {{ getLabel(item) }}
        </slot>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  cssWrapper: {
    type: String,
  },
  getLabel: {
    type: Function,
    required: false,
  },
  itemClass: {
    type: String,
    default: '',
  },
  showEmptyState: {
    type: Boolean,
  },
  emptyStateText: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.dropdown-menu.fake {
  top: 10px;
  left: 50%;
}
</style>
