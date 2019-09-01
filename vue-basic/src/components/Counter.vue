<template>
    <div class="counter">
        <button class="plus" @click="plus">+</button>
        <span class="value">{{counter}}</span>
        <button class="minus" @click="minus">-</button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data: () => {
            return {
                counter: 0
            }
        },
        methods: {
            minus: function () {
                this.counter--;
            },
            plus: function () {
                this.counter++;
            }
        }
    }
</script>
<style scoped>

</style>
