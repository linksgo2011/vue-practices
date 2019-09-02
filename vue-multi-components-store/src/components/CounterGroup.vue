<template>
    <div class="counter-group">
        <h2>
            Counter Number:
            <span>{{ counterNumber }}</span>
        </h2>
        <div class="counters">
            <Counter
                    v-for="(counter,index) in counters"
                    :index="index"
                    :value="counter.value"
                    :key="index"
            />
        </div>
        <CounterSum></CounterSum>
    </div>
</template>

<script>
    import Counter from './Counter.vue'
    import CounterSum from './CounterSum.vue'

    export default {
        name: 'counter-group',
        components: {
            Counter,
            CounterSum
        },
        computed: {
            counterNumber: function () {
                return this.$store.state.counterNumbers;
            },
            counters: function(){
                return this.$store.state.counters;
            }
        }
    }
</script>
