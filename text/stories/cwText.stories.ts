
import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import CwText from '~/text/src/CwText.vue';

export const cwTextSizeAndWeight = () => ({
    components: { CwText },
    template: `
        <cw-text>Text default font size 12 weight normal</cw-text>
        <cw-text :size="12" weight="light">Paragraph font size 12 weight light</cw-text>
        <cw-text :size="14" weight="bold">Paragraph font size 14 weight bold</cw-text>
        <cw-text :size="16">Paragraph font size 16 weight bold</cw-text>
    `,
});

export const cwTextColor = () => ({
    components: { CwText },
    template: `
        <cw-text color="primary">Text primary</cw-text>
        <cw-text color="yellow-alt-1">Text yellow alt 1</cw-text>
        <cw-text color="orange">Text orange</cw-text>
        <cw-text color="noselect">Text noselect</cw-text>
        <cw-text color="gray-darker">Text gray darker</cw-text>
        <cw-text color="gray">Text gray</cw-text>
        <cw-text color="black-darker">Text gray</cw-text>
        <cw-text color="black-alt-1">Text gray</cw-text>
    `,
});

export const cwTextEllipsis = () => ({
    components: { CwText },
    template: `
        <div class="w-320">
            <cw-text ellipsis="two">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</cw-text>
        </div>
    `,
});

export const cwTextTruncate = () => ({
    components: { CwText },
    template: `
        <div class="w-320">
            <cw-text class="text-truncate">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </cw-text>
        </div>
    `,
});