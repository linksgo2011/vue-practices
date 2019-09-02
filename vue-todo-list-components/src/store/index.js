export default {
    state: {
        todoList: [],
        currentFilter: 'all'
    },
    mutations: {
        createTodo: function (state, text) {
            state.todoList.push({
                status: 'all',
                text
            })
        },
        updateCurrentFilter: function (state, currentFilter) {
            state.currentFilter = currentFilter;
        },
        toggleActive: function (state, index) {
            state.todoList[index].status = state.todoList[index].status === 'active' ? 'complete' : 'active';
        }
    }
}
