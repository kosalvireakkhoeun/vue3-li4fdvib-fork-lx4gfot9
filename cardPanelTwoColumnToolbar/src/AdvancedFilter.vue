<template>
    <div class="advanced-filter-dropdown-wrapper py-2 pl-3" :class="cssFilter">
        <button
            @click="collapseAdvanceFilter"
            class="btn btn--width-110 btn-action sm-down--width-100 d-flex align-items-center justify-content-between font-weight-normal">
                Filters
            <i :class="{ 'icon-chevron-up': showAdvancedFilter, 'icon-chevron-down': !showAdvancedFilter }"></i>
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

    name: '',
    props: {
        isGroupButton: { type: Boolean, default: false }
    },
    data() {
        return {
            showAdvancedFilter: false,
        }
    },

    computed: {
        cssFilter: function() {
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

    components: {},

    setup() {

        return {



        }

    }

});

</script>

<style lang="scss" scoped></style>