<template>
    <ul class="items">
        <template v-for="(item,index) in todoList">
            <li :key="index" :class="item.status" v-show="item.status === currentFilter || currentFilter === 'all'">
                <input name="status-toggle" type="checkbox" @change="toggleActive(index)">
                <a href="" class="content">{{item.content}}</a>
            </li>
        </template>
    </ul>
</template>

<script>
    import {mapState, mapMutations,mapActions} from "vuex";

    export default {
        name: "todo-list",
        computed: {
            ...mapState(['todoList','currentFilter'])
        },
        methods: {
            ...mapMutations(['toggleActive']),
            ...mapActions(['fetchTodos']),
        },
        created(){
            this.fetchTodos();
        }
    }
</script>

<style scoped>

</style>
