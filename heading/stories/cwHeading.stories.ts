
import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import CwHeading from '~/heading/src/CwHeading.vue';

export const cwHeading1 = () => ({
    components: { CwHeading },
    template: `<cw-heading>Hello world</cw-heading>`,
});

export const cwHeading2 = () => ({
    components: { CwHeading },
    template: `<cw-heading :size="2" weight="light">Hello world</cw-heading>`,
});

export const cwHeading3 = () => ({
    components: { CwHeading },
    template: `<cw-heading :size="3">Hello world</cw-heading>`,
});

export const cwHeading4 = () => ({
    components: { CwHeading },
    template: `<cw-heading :size="4">Hello world</cw-heading>`,
});

export const cwHeading5 = () => ({
    components: { CwHeading },
    template: `<cw-heading :size="5">Hello world</cw-heading>`,
});


export const cwHeading6 = () => ({
    components: { CwHeading },
    template: `<cw-heading :size="6">Hello world</cw-heading>`,
});