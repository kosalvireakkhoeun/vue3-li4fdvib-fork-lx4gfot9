<template>
    <div class="cec-card cec-card-two-columns-small-left-side" :class="loadWrapperClass">
        <div v-if="$slots['top-header']" :class="cssTopHeaderClass"
            class="cec-card__header border-bottom border-bottom-style-dash cec-p-4">
            <slot name="top-header"></slot>
        </div>
        <div class="d-sm-flex">
            <div class="cec-card__left-content">
                <div v-if="$slots['left-header']" class="cec-card__header_fix_height border-bottom
                        border-bottom-style-dash" :class="cssLeftHeaderClass">
                    <slot name="left-header"></slot>
                </div>
                <div class="cec-card__body" :class="cssLeftBodyClass">
                    <slot name="left-body"></slot>
                </div>
            </div>
            <div class="cec_card__divider" v-if="!hideDivider"></div>
            <div class="cec-card__right-content border-sm-left" :class="cssRightBodyWrapper">
                <div v-if="$slots['right-header'] && !isShowToolbar" class="cec-card__header_fix_height border-bottom
                        border-bottom-style-dash" :class="cssRightHeaderClass">
                    <slot name="right-header"></slot>
                </div>
                <div v-if="$slots['mobile-toolbar']" class="cec-card__header_fix_height border-bottom
                        border-bottom-style-dash d-block d-sm-none cec-p-2">
                    <slot name="mobile-toolbar"></slot>
                </div>
                <div
                    v-if="isShowToolbar"
                    :class="cssTopHeaderClass"
                    class="cec-card__header cec-card__header_fix_height bg-light-gray border-bottom border-bottom-style-dash cec-pl-2 cec-p-1 cec-p-sm-4">
                    <slot name="bulk-toolbar"></slot>
                </div>
                <slot name="button-actions"></slot>
                <div class="cec-card__body" :class="cssMainBodyClass">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cssWrapperClass: {
            type: String,
        },
        cssLeftBodyClass: {
            type: String
        },
        cssTopHeaderClass: {
            type: String
        },
        cssLeftHeaderClass: {
            type: String
        },
        cssRightHeaderClass: {
            type: String
        },
        cssMainBodyClass: {
            type: String
        },
        hideDivider: { type: Boolean },
        hasBorderScreenXs: { type: Boolean },
        cssRightBodyWrapper: { type: String },
        showToolbar: { type: Boolean, default: false },
    },
    computed: {
        isShowToolbar: function() {
            return this.showToolbar
        },
        loadWrapperClass: function() {
            return (this.hasBorderScreenXs ? '' : 'border-xs-none ') + this.cssWrapperClass;
        }
    },
}
</script>

<style lang="scss" scoped></style>