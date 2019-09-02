export default {
    strict: true,
    state: {
        counters: [],
        counterNumbers: 3
    },
    getters: {
        counterSum: function (state) {
            let sum = 0;
            state.counters.forEach(element => {
                sum = sum + element.value;
            });
            console.log(14,sum);
            return sum;
        }
    },
    mutations: {
        createCounters: function (state) {
            for (let i = 0; i < state.counterNumbers; i++) {
                state.counters.push({
                    value: 0
                });
            }
        },
        increaseCounterValue: function (state, index) {
            state.counters[index].value++;
        },
        minusCounterValue: function (state, index) {
            state.counters[index].value--;
        }
    }
}
