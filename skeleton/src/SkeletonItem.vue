
<template>
    <div :class="cssClasses" :style="inlineStyleCss"></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        heading: {
          type: String,
        },
        iconSize: {
          type: String,
        },
        input: {
          type: String,
        },
        avatar: {
          type: String,
        },
        paragraph: {
          type: Boolean,
        },
        width: {
          type: String,
        },
        maxWidth: {
          type: String,
        },
        rounded: {
          type: Boolean,
        },
        height: {
          type: String,
        },
        radius: {
          type: String,
          default: 'md',
        },
        aspectRatio: {
          type: String,
        },
        animation: {
            type: Boolean,
            default: true
        },
    },
    computed: {
        cssClasses: function() {
            return [
                this.iconSize ? `cw--skeleton-icon cw--icon-${this.iconSize}` : '',
                this.heading ? `cw--skeleton-heading cw--h${this.heading}` : '',
                this.input ? `cw--skeleton-input cw--input-${this.input}` : '',
                this.avatar ? `cw--skeleton-avatar cw--chat-avatar-${this.avatar}` : '',
                this.paragraph ? 'cw--skeleton-paragraph' : '',
                this.width ? `cw--skeleton-width-${this.width}` : '',
                this.height ? `cw--skeleton-height-${this.height}` : '',
                this.radius ? `cw--border-radius-${this.radius}` : '',
                this.rounded ? 'cw--skeleton-rounded' : '',
                this.aspectRatio ? `cw--aspect-ratio-${this.aspectRatio}` : '',
                this.animation ? 'cw--skeleton-item' : 'bg-light-gray',
            ];
        },
        inlineStyleCss() {
            return {
                maxWidth: this.maxWidth || 'unset',
            };
        },
    },
})
</script>