<template>
    <div class="cw-dropdown" :class="classWrapper">
        <div class="form-control dropdown-toggle d-flex cursor-pointer align-items-center"
            :id="'cw-dropdown_' + uniqueId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :class="cssToggle">
            <cw-svg-icon
                v-if="showIcon && getSelectedItem"
                css-class="mr-2 mt-1"
                icon-url="close"
            ></cw-svg-icon>
            <div class="text-truncate" :class="getCssPlaceholder" data-toggle="tooltip" data-placement="top" :title="getTooltipLabel">
                <span v-if="$slots.placeholderIcon" class="mr-2">
                    <slot name="placeholderIcon"></slot>
                </span>
                <span v-if="isAppend" class="mr-2">{{ placeholder }}:</span>
                <span v-if="isStaticPlaceholder">{{ placeholder }}
                    <slot name="sub-placeholder"></slot>
                </span>
                <template v-else>
                    <div class="d-flex align-items-center">
                        <cw-svg-icon
                            v-if="selectedItemIcon"
                            css-class="mr-2"
                            :icon-url="selectedItemIcon"
                        ></cw-svg-icon>
                        <span>{{ selectedItemLabel }}</span>
                        <i v-if="includeCount">&nbsp;({{ (selectedItem ? selectedItem.count : count) }})</i>
                    </div>
                </template>
            </div>&nbsp;
            <i class="mt-1 d-md-none" v-if="itemCounts >= 0">({{ itemCounts }})</i>
            <span v-if="$slots.customIcon" class="text-body ml-auto">
                <slot name="customIcon" />
            </span>
            <span v-else class="text-body ml-auto">
                <cw-svg-icon :css-class="[changeIconOnMobile ? 'd-none d-md-inline' : '', 'dropdown-icon']" icon-url="dropdown"></cw-svg-icon>
                <cw-svg-icon v-if="changeIconOnMobile" css-class="dropdown-icon cw-icon-xs my-auto d-md-none" icon-url="down" :class="cssIconMobile"></cw-svg-icon>
            </span>
        </div>
        <dropdown-menu
            class="show"
            :css-wrapper="getStyleWrapper"
            :empty-state-text="emptyStateText"
            :get-label="getItemTooltipLabel"
            :item-class="itemClass"
            :items="items"
            :show-empty-state="showEmptyState"
            @onClick="change"
        >
        </dropdown-menu>
    </div>
</template>

<script>
import DropdownMenu from '~/dropdownMenu/src/DropdownMenu.vue';
import CwSvgIcon from '~/svgIcon/src/SvgIcon.vue';

export default {
    props: {
        classWrapper:{ type: String, required: false, default: '' },
        uniqueId:{ type: String, required: false, default: '' },
        cssDropdownMenu: { type: String, required: false, default: '' },
        cssIconMobile: { type: String, required: false, default: '' },
        cssSelectedItem: { type: String, required: false, default: '' },
        cssToggle:{ type: [String, Object, Array], required: false, default: ''},
        cssItemLabel: { type: String },
        isAppend:{ type: Boolean },
        itemClass: { type: String, required: false },
        itemCounts: { type: Number, required: false },
        items: { type: Array, default: () => ([]) },
        placeholder: { type: String, required: false },
        requireItem: { type: Boolean },
        requiredTranslate: { type: Boolean, required: false },
        isItemCheckbox: { type: Boolean },
        isStaticPlaceholder: { type: Boolean },
        value: { type: [String, Number] },
        showIcon: { type: Boolean },
        reload: { type: Boolean },
        showEmptyState: { type: Boolean, required: false, default: false },
        emptyStateText: { type: String, required: false, default: '' },
        closeOnSelect: { type: Boolean, default: true },
        changeIconOnMobile: { type: Boolean, default: true },
        cssPlaceholder: { type: String, default: '' },
        selectedItemIcon: { type: String, default: '' },
        isItemRadio: { type: Boolean },
        includeCount: { type: Boolean },
        count: { type: Number, default: 0 },
    },

    data() {
        return {
            selectedItem: null
        }
    },

    computed: {
        selectedItemLabel: function() {
            let label = this.getItemLabel(this.selectedItem) || this.getItemLabel(this.getItem());
            if (!label) {
                return (this.isAppend && this.requiredTranslate) ? this.placeholderDynamic : this.placeholderDynamic;
            }
            return this.requiredTranslate ? label : label;
        },
        placeholderDynamic: function() {
            return (this.isAppend) ? this.items[0].value : this.isStaticPlaceholder ? this.placeholder : this.placeholder;
        },
        isNotSelected: function() {
            return !this.selectedItem && !this.value;
        },
        getSelectedItem: function() {
            return this.selectedItem || this.getItem();
        },
        getStyleWrapper: function() {
            return 'w-100 mt-0 mw-100 ' + this.cssDropdownMenu;
        },
        getCssPlaceholder: function() {
            const cssClass = this.isNotSelected ? 'text-body ' : '';
            return cssClass + this.cssPlaceholder;
        },
        getTooltipLabel: function() {
            if (this.includeCount) {
                return this.concatCount(
                    this.selectedItemLabel,
                    !this.isNotSelected && this.selectedItem ? this.selectedItem.count : this.count
                );
            }
            return this.selectedItemLabel;
        },
    },

    watch: {
        reload: function() {
            this.selectedItem = null;
        },
        items: function() {
            if (!this.selectedItem) return;
            const item = this.selectedItem;
            this.selectedItem = this.getItem((item.id || item.key || item.value || item.title || item));
        },
    },

    methods: {
        getItemLabel: function(item) {
            return item ? item.label || item.value || item.text || item.title || item.name : item;
        },
        propagateMenu: function() {
            event.stopPropagation();
            $('.dropdown-menu').removeClass('show');
            $('.dropdown-icon').addClass("rotate");
        },
        getItemTooltipLabel: function(item) {
            if (this.includeCount) {
                return this.concatCount(this.getItemLabel(item), item.count);
            }
            return this.getItemLabel(item);
        },
        concatCount: function(label, count) {
            return label
                .concat('<i>')
                .concat('&nbsp;(')
                .concat(count)
                .concat(')')
                .concat('</i>');
        },
        change: function(item, event) {
            if (!this.closeOnSelect) {
                event.stopPropagation();
            }
            if (!item.disabled) {
                this.selectedItem = item;
                this.$emit('change', this.requireItem ? item : item.id || item.key || item.value);
            }
        },
        getItem: function(value) {
            const tempValue = value || this.value;
            return (this.items || []).find(item => (item.id || item.key || item.value || item.title || item) == tempValue);
        },
        getCssSelected: function() {
            let css = '';
            css = (this.isNotSelected) ? 'text-body ' : '';
            return css + this.cssSelectedItem;
        },
        getStyleItemLabel: function(item) {
            if (!item.color) return;
            else return { backgroundColor: item.color }
        }
    },
    components: {
        DropdownMenu
    },
};

</script>

<style lang="scss" scoped>

</style>