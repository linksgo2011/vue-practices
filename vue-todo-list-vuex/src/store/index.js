export default {
    strict: true,
    state: {
        todoList: [
            {status: 'complete', content: 'xxx'}
        ],
        currentFilter: 'all'
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations: {
        createTodo: function (state, content) {
            state.todoList.push({
                status: 'active',
                content
            })
        },
        updateCurrentFilter: function (state, currentFilter) {
            state.currentFilter = currentFilter;
        },
        toggleActive: function (state, index) {
            state.todoList[index].status = state.todoList[index].status === 'complete' ? 'active' : 'complete';
        }
    }
}
