<template>
    <div class="d-flex align-items-center">
        <span class="mr-1 text-danger font-size-12">{{ label }}</span>
        <cw-tooltip-wrapper :label="validationMessage" css-header-wrapper="d-flex" css-body-wrapper="top-2-rem left-55">
            <svg-icon />
        </cw-tooltip-wrapper>
    </div>
</template>

<script>
import CwTooltipWrapper from '~/tooltipWrapper/src/CwTooltipWrapper.vue';
import CwSvgIcon from '~/svgIcon/src/SvgIcon.vue';
export default {
    components: {
        CwTooltipWrapper,
        CwSvgIcon,
    },
    props: {
        label: { type: String, default: '' },
        validationMessage: [ String, Array ],
    },
};
</script>

