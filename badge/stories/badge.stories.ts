import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import Badge from '~/badge/src/Badge.vue';

export const primary = () => ({
  components: { Badge },
  template: `<Badge>Primary</Badge>`,
});
