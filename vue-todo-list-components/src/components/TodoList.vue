<template>
    <ul class="items">
        <template v-for="(item,index) in todoList">
            <li :key="index" :class="item.status">
                <input name="status-toggle" type="checkbox" @change="toggleActive(index)">
                <a href="" class="text">{{item.content}}</a>
            </li>
        </template>
    </ul>
</template>

<script>

    export default {
        name: "todo-list",
        props:{
            todoList:Array
        },
        methods: {
            toggleActive: function (index) {
                this.$emit("toggleActive",index);
            }
        }
    }
</script>

<style scoped>

</style>
