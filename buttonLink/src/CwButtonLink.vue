<template>
    <div class="d-flex" :class="cssWrapper">
        <a
            href="javascript:;"
            role="button"
            class="d-flex align-items-center text-decoration-none min-height-40"
            :class="[cssLink, disabled ? 'disabled' : '']" @click="$emit('action')">
            <cw-svg-icon v-if="iconName" class="cw-icon" :icon-url="iconName" :class="cssIcon"></cw-svg-icon>
            <span v-if="label" class="ml-2" :class="cssLabel">{{ label }}</span>
        </a>
    </div>
</template>

<script>
import CwSvgIcon from '~/svgIcon/src/SvgIcon.vue';
export default {
    components: {
        CwSvgIcon,
    },
    props: {
        iconName: { type: String },
        label: { type: String },
        cssClass: { type: String },
        cssIcon: { type: String },
        cssLabel: { type: String },
        cssWrapper: { type: [String, Array, Object] },
        type: { type: String },
        disabled: { type: Boolean },
    },
    computed: {
        cssLink: function () {
            let cssString = this.type ? ' ' + this.type : ' text-black';
            return this.cssClass + cssString;
        }
    }
};
</script>

<style lang="scss" scoped>
button {
    font-family: 'Lato', sans-serif;
}
</style>
