<script>
import { h } from 'vue';

export default {
  props: {
    size: {
      type: Number,
      default: 1,
    },
    weight: {
      type: String,
      validator(value) {
        return ['bold', 'light', 'normal', 'semi-bold'].includes(value)
      },
      default: 'bold',
    },
  },
  render() {
    return h(
      `h${this.size}`,
      { class: 'font-weight-' + this.weight },
      this.$slots.default(),
    )
  },
}
</script>
