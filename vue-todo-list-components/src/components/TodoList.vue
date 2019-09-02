<template>
    <ul class="items">
        <template v-for="(item,index) in todoList">
            <li :key="index" :class="item.status" v-show="item.status === currentFilter || currentFilter === 'all'">
                <input name="status-toggle" type="checkbox" @change="toggleActive(index)">
                <a href="" class="text">{{item.text}}</a>
            </li>
        </template>
    </ul>
</template>

<script>
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "todo-list",
        computed: {
            ...mapState(['todoList','currentFilter'])
        },
        methods: {
            ...mapMutations(['toggleActive'])
        }
    }
</script>

<style scoped>

</style>
