<script>
import { h } from 'vue';

export default {
  props: {
    size: {
        type: Number,
        default: 14,
        validator(value) {
            return [
                8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 46
            ].includes(value)
        },
    },
    weight: {
        type: String,
        validator(value) {
            return ['bold', 'lighter', 'light',  'normal', 'semi-bold'].includes(value)
        },
        default: 'normal',
    },
    color: {
        type: String,
        validator(value) {
            return [
                'black-alt-1',
                'black-darker',
                'gray',
                'gray-darker',
                'noselect',
                'orange',
                'primary',
                'yellow-alt-1'
            ].includes(value)
        },
        default: 'black',
    },
    ellipsis: {
        type: Number,
        validator(value) {
            return [
                'two',
                'four',
                'five',
            ].includes(value)
        },
    },
  },
  render() {
    let cssEllipsis = this.ellipsis ? ` text-ellipsis text-ellipsis-${this.ellipsis}` : '';
    return h(`p`,
        { class: 'm-0 '+
            'font-weight-' + this.weight +
            ' font-size-' + this.size +
            ' text-' + this.color +
            cssEllipsis
        },
       this.$slots.default()
    )
  }
}
</script>
