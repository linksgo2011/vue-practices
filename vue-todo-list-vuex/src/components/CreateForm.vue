<template>
    <div class="input-form">
        <input type="input" v-model="inputtingItem">
        <button @click="createTodo(inputtingItem)">Add</button>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        name: "create-form",
        data: function () {
            return {
                inputtingItem: ""
            }
        },
        methods: {
            ...mapMutations(['createTodo'])
        }
    }
</script>

<style scoped>

</style>
