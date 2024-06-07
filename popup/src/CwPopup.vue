<template>
    <div class="cec-popup-wrapper">
        <div :class="{ 'cec-popup-container': isShowing }">
            <popup-container v-if="isShowing"
                :css-popup-wrapper="popupSize + ' popup-rounded-10'"
                css-header-wrapper="justify-content-between align-items-center"
                css-body-wrapper="cec-py-4"
                css-footer-wrapper="">
                <template #header>
                    <cw-text :size="24" color="gray-darker" weight="lighter">
                        {{ config.title }}
                    </cw-text>
                    <cw-button-link
                        @click="onClose()"
                        icon-name="close"
                    ></cw-button-link>
                </template>
                <template #body>
                    <slot></slot>
                </template>
                <template #footer>
                    <pop-up-footer
                        :back-button-title="config.backButtonTitle"
                        :confirm-button-title="config.confirmButtonTitle"
                        :css-confirm-button="config.cssConfirmButton"
                        :enable-confirm-button="enableSaveButton"
                        :is-submitting="config.isSubmitting"
                        :is-back-circle="config.isBackCircle"
                        :show-back-button-at-bottom="true"
                        @on-confirm="onSave"
                        @on-back="$emit('on-back')"
                        css-footer="border-0"
                    ></pop-up-footer>
                </template>
            </popup-container>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import PopupContainer from '~/popup/src/PopupContainer.vue';
import PopUpFooter from '~/popup/src/PopUpFooter.vue';
import CwText from '~/text/src/CwText.vue';
import CwSvgIcon from '~/svgIcon/src/SvgIcon.vue';
import CwButtonLink from '~/buttonLink/src/CwButtonLink.vue';
export default defineComponent({

    name: '',

    props: {
        config: { type: Object, default: () => ({}) },
        isShowing: { type: Boolean, default: false },
        enableSaveButton: { type: Boolean, default: false },
    },
    computed: {
        popupSize: function() {
            let size = this.config.size;
            if(size == 'sm') {
                return 'cec-popup--width-300';
            }
            else if (size == 'md') {
                return 'cec-popup--width-500';
            }
            else if (size == 'lg') {
                return 'cec-popup--width-600';
            }
            else if (size == 'xl') {
                return 'cec-popup--width-700';
            }
            else {
                return 'cec-popup--width-500';
            }
        }
    },

    methods: {
        onSave: function() {
            this.$emit('save');
        },
        onClose: function() {
            this.$emit('close');
        },
    },

    components: {
        PopupContainer,
        PopUpFooter,
        CwText,
        CwSvgIcon,
        CwButtonLink
    },

});

</script>

<style lang="scss" scoped>


</style>