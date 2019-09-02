<template>
    <div class="input-form">
        <input type="input" @change="handleInput">
        <button @click="createTodo(inputtingItem)">Add</button>
    </div>
</template>

<script>
    export default {
        name: "create-form",
        data: function () {
            return {
                inputtingItem: ""
            }
        },
        methods: {
            handleInput: function (event) {
                this.inputtingItem = event.target.value;
            },
            createTodo(content) {
                this.$emit("createTodo", content);
            }
        }
    }
</script>

<style scoped>

</style>
