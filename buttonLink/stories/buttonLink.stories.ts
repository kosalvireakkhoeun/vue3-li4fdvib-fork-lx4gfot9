import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import CwButtonLink from '~/buttonLink/src/CwButtonLink.vue';

export const buttonLinkWithIcon = () => ({
  components: { CwButtonLink },
  template: `
    <cw-button-link
      icon-name="2fapp"
      label="Primary"
      type="w-100 text-gray-darker"
      css-icon="cw-icon-sm"
      css-wrapper="bg-hover-gray-lighter-alt6"
    ></cw-button-link>
  `,
});