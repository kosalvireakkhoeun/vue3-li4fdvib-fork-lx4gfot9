<template>
    <div class="filter-dropdown-wrapper">
        <div class="d-flex py-2" :class="cssFilter">
            <cw-dropdown
                :items="item.menuItems"
                class-wrapper="btn-group cw-dropdown--width-200 border border-sm-0"
                css-toggle="h-100 border-0"
                css-dropdown-menu="dropdown-menu--darker rounded-0 mt-2"
                :placeholder="item.label"
                :is-static-placeholder="true"
            >
            </cw-dropdown>
        </div>
    </div>
</template>

<script>
import CwDropdown from '~/dropdown/src/CwDropdown.vue';

export default {
    name: '',
    props: {
        item: { type: Object }
    },
    data() {
        return {
            showAdvancedFilter: false,
        }
    },
    computed: {
        cssFilter: function () {
            return [
                this.isGroupButton ? 'border-x' : 'border-left',
                !this.showAdvancedFilter ? 'bg-white' : 'bg-gray'
            ]
        }
    },
    watch: {},
    methods: {
        collapseAdvanceFilter: function () {
            this.showAdvancedFilter = !this.showAdvancedFilter;
            this.$emit('on-expand', this.showAdvancedFilter);
        },
    },
    components: {
        CwDropdown
    },
};

</script>

<style lang="scss" scoped>


</style>