<template>
    <div class="counter-sum">
        <h2>Counter Sum:</h2>
        <span>{{counterSum}}</span>
    </div>
</template>

<script>
    export default {
        name: 'counter-sum',
        props: {
            counterSum: Number
        }
    }
</script>
<style scoped>

</style>
