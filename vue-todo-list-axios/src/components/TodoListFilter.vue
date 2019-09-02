<template>
    <div class="filter">
        <a @click.prevent="setFilter('all')" :class="{active:currentFilter=='all'}">ALL</a>
        <a @click.prevent="setFilter('active')" :class="{active:currentFilter=='active'}">Active</a>
        <a @click.prevent="setFilter('completed')" :class="{active:currentFilter=='completed'}">Completed</a>
    </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "todo-list-filter",
        computed: {
            ...mapState(['currentFilter'])
        },
        methods: {
            ...mapMutations(['updateCurrentFilter']),
            setFilter: function (currentFilter) {
                this.updateCurrentFilter(currentFilter);
            }
        }
    }
</script>

<style scoped>

</style>
