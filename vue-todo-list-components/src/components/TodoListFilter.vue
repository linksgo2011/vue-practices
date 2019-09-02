<template>
    <div class="filter">
        <a @click.prevent="setFilter('all')" :class="{active:currentFilter=='all'}">ALL</a>
        <a @click.prevent="setFilter('active')" :class="{active:currentFilter=='active'}">Active</a>
        <a @click.prevent="setFilter('complete')" :class="{active:currentFilter=='complete'}">Complete</a>
    </div>
</template>

<script>
    export default {
        name: "todo-list-filter",
        props: {
            currentFilter: String
        },
        methods: {
            setFilter: function (currentFilter) {
                this.$emit("updateFiler", currentFilter);
            }
        }
    }
</script>

<style scoped>

</style>
