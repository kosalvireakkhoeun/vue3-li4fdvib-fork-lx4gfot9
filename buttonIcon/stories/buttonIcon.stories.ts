import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import ButtonIcon from '~/buttonIcon/src/ButtonIcon.vue';

export const buttonIcon = () => ({
  components: { ButtonIcon },
  template: `<button-icon icon-name="logos:vue" text="Primary"></button-icon>`,
});

export const buttonIconWithCssText = () => ({
  components: { ButtonIcon },
  methods: {
    onClick() {
      console.log('hi');
    },
  },
  template: `<button-icon icon-name="logos:vue" css-text="text-danger" text="Click on icon" @click="onClick()"></button-icon>`,
});

export const buttonIconTinyCopyLink = () => ({
  components: { ButtonIcon },
  methods: {
    onClick() {
      console.log('hi');
    },
  },
  template: `
    <button-icon
      icon-css="mt-2"
      icon-name="logos:vue"
      css-class="btn btn-default text-capitalize btn--height-30 py-1"
      text="copy link" @click="onClick()">
    </button-icon>
  `,
});