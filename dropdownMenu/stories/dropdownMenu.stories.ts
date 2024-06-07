import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import DropdownMenu from '~/dropdownMenu/src/DropdownMenu.vue';

export const dropdownMenu = () => ({
  components: { DropdownMenu },
  methods: {
    getName(item) {
      return item.name;
    },
    onClick(item) {
      this.menuItem = item;
    },
  },
  data() {
    return {
      menuItem: '',
      dropdownItems: [
        { name: 'Billing', disabled: true },
        { name: 'Edit', orderBy: true },
        { name: 'Delete' },
        { name: 'View' },
        { name: 'Truncate People You are running a development build of vue' },
      ],
    };
  },
  template: `
    <DropdownMenu class="show fake" :getLabel="getName" :items="dropdownItems" @onClick="onClick" />
    <p>I click on: {{ menuItem }}</p>
    `,
});
