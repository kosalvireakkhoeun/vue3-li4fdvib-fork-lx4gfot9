<template>
    <div class="">
        <cw-card-panel-two-column-small-left-side
            css-wrapper-class="rounded border-xs-down"
            css-left-header-class="d-md-flex align-items-center d-none"
            css-main-body-class="p-0"
            css-right-header-class="d-md-flex align-items-center justify-content-between cec-pl-2 cec-pl-sm-6"
            css-right-body-wrapper="d-block"
            :hide-divider="true"
            :has-border-screen-xs="true"
            :show-toolbar="showToolbar"
        >
            <template #left-header>
                <cw-text v-if="title" size="22" weight="light" class="cec-ml-6">
                    {{ title }}
                </cw-text>
            </template>
            <template #right-header>
                <cw-text size="22" weight="light" class="cec-pl-sm-0 cec-pt-3 cec-pt-sm-0">
                    {{ selectedTab.title }}
                </cw-text>
                <div class="toolbar align-items-baseline">
                    <div v-if="selectedTab.search" class="search-box-wrapper border-left " :class="cssSearchBoxSize">
                        <div class="has-feedback has-search d-flex align-items-center py-2 cec-ml-3">
                            <cw-svg-icon
                                icon-url="search"
                                css-class="cw-icon-sm form-control-feedback"
                            ></cw-svg-icon>
                            <input
                                type="text"
                                class="field form-control d-inline-block border-0 w-100"
                                :placeholder="selectedTab.search.placeholder"
                                v-model="searchKeyword"
                                @keyup.enter.prevent="$emit('on-search', searchKeyword)"
                                @blur="$emit('on-search-blur')"
                                @focus="$emit('on-search-focus')"
                                @mousedown="$emit('on-search-focus')"
                            />
                            <a href="javascript:;"
                                @click="searchKeyword = ''"
                            >
                                <cw-svg-icon
                                    icon-url="circleClose"
                                    :class="[searchKeyword ? 'd-block' : 'd-none']"
                                    css-class="cw-icon-tn cec-mr-2 cursor-pointer text-gray"
                                ></cw-svg-icon>
                            </a>
                        </div>
                    </div>
                    <dropdown-filter
                        v-if="selectedTab.dropdownFilter"
                        :item="selectedTab.dropdownFilter">
                    </dropdown-filter>
                    <advanced-filter
                        v-if="selectedTab.advancedFilter"
                        :is-group-button="selectedTab.primaryButton"
                        @on-expand="expandFilter">
                    </advanced-filter>
                    <div v-if="selectedTab.primaryButton"
                        class="cec-pr-4 d-flex align-items-center d-none d-md-block"
                        :class="{'cec-pl-4': selectedTab.advancedFilter }">
                        <button class="btn btn-primary">
                            {{ selectedTab.primaryButton.label }}
                        </button>
                    </div>
                </div>
            </template>
            <template #mobile-toolbar>
                <div class="mobile-toolbar">
                    <slot name="mobile-toolbar" />
                </div>
            </template>
            <template #left-body>
                <div v-if="tabMenus" class="scroll-content cec-pt-3 d-md-block d-none">
                    <cw-button-link
                        v-for="tabMenu in tabMenus"
                        :key="'leftMenu' + tabMenu.key"
                        type="w-100 text-gray-darker"
                        css-icon="cw-icon-sm"
                        css-class=""
                        :css-wrapper="['cec-pl-6 bg-hover-gray-lighter-alt6', (tabMenu.key == selectedTab.key ? 'active' : '')]"
                        :label="tabMenu.title"
                        :icon-name="tabMenu.icon"
                        @action="clickTabMenu(tabMenu)"
                    ></cw-button-link>
                </div>
            </template>
            <template #bulk-toolbar>
                <div class="d-flex align-items-center w-100 justify-content-between">
                    <cw-text size="14" weight="light" >
                        {{ selectedNumber }} selected
                    </cw-text>
                    <div class="bulk-action d-flex align-items-center">
                        <slot name="bulk-action"></slot>
                        <cw-svg-icon
                            css-class="cec-ml-2 cec-ml-sm-4 cw-icon-lg text-black-darker cursor-pointer"
                            icon-url="close"
                            @click="onClose"
                        />
                    </div>
                </div>
            </template>
            <filter-content
                v-if="selectedTab.advancedFilter"
                :show-filter="showAdvancedFilter">
                <slot name="filter-content"></slot>
            </filter-content>
            <slot name="right-body"></slot>
        </cw-card-panel-two-column-small-left-side>
    </div>
</template>

<script>
import CwText from '~/text/src/CwText.vue';
import CwSvgIcon from '~/svgIcon/src/SvgIcon.vue';
import CwButtonLink from '~/buttonLink/src/CwButtonLink.vue';
import CwCardPanelTwoColumnSmallLeftSide from '~/cardPanelTwoColumnSmallLeftSide/src/CwCardPanelTwoColumnSmallLeftSide.vue';
import AdvancedFilter from './AdvancedFilter.vue';
import FilterContent from './FilterContent.vue';
import DropdownFilter from './DropdownFilter.vue';

export default {
    components: {
        CwCardPanelTwoColumnSmallLeftSide,
        CwText,
        CwSvgIcon,
        CwButtonLink,
        AdvancedFilter,
        FilterContent,
        DropdownFilter
    },
    props: {
        title: { type: String, default: '' },
        showToolbar: { type: Boolean, default: false },
        selectedNumber: { type: Number, default: 0 },
        tabMenus: { type: Array, default: () => []},
    },
    data: function() {
        return {
            selectedTab: {},
            showAdvancedFilter: false,
            searchKeyword: '',
        }
    },
    computed: {
        cssSearchBoxSize: function() {
            return [
                (this.selectedTab.search && this.selectedTab.search.size) ? 'search-box-' + this.selectedTab.search.size : 'search-box-sm'
            ]
        },
    },
    mounted: function() {
        this.selectedTab = this.tabMenus.filter(menu => menu.default === true)[0];
    },
    methods: {
        clickTabMenu(tabMenu) {
            this.selectedTab = tabMenu;
            this.$emit('on-click-tab-menu', tabMenu);
        },
        onClose: function() {
            this.$emit('on-close')
        },
        expandFilter: function(isExpand) {
            this.showAdvancedFilter = isExpand;
        }
    },
}
</script>

<style lang="scss" scoped>
.search-box-wrapper {
    &.search-box-sm {
        min-width: 210px;
    }

    &.search-box-lg {
        min-width: 350px;
    }

    &.search-box-xl {
        min-width: 500px;
    }
}
</style>