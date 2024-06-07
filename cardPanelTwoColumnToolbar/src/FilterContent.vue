<template>
    <div class="filter-content-wrapper" v-if="showFilter">
        <div class="min-height-120">
            <slot></slot>
        </div>
        <div class="row no-gutters">
            <div class="col-md-12 mt-3 pb-1 pr-4 mx-1">
                <div class="w-100 input-group justify-content-end">
                    <button type="button" class="btn btn-outline-primary mr-1 font-weight-normal z-index-auto">
                        Clear Filter
                    </button>
                    <button type="button" class="btn btn-primary btn-outline-primary mr-2 ml-1 font-weight-normal text-white z-index-auto">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        showFilter: { type: Boolean, default: false }
    },
    data() {
        return {
        }
    },
    computed: {},
    watch: {},
    methods: {},
    components: {},
};
</script>

<style lang="scss" scoped>


</style>