const apiUrl = 'http://5b4dcb2aec112500143a2311.mockapi.io/api';
import axios from "axios";

export default {
    state: {
        todoList: [],
        currentFilter: 'all'
    },
    mutations: {
        fetchTodos: function (state, todos) {
            state.todoList = todos;
        },
        createTodo: function (state, content) {
            state.todoList.push({
                status: 'all',
                content
            })
        },
        updateCurrentFilter: function (state, currentFilter) {
            state.currentFilter = currentFilter;
        },
        toggleActive: function (state, index) {
            state.todoList[index].status = state.todoList[index].status === 'active' ? 'completed' : 'active';
        }
    },
    actions: {
        async fetchTodos({dispatch, commit}) {
            const todos = await axios.get(`${apiUrl}/todos`)
            commit("fetchTodos", todos.data);
        },
        async createTodo({commit, dispatch}, content) {
            const response = await axios
                .post(`${apiUrl}/todos`, {
                    id: Date.now(),
                    content: content,
                    status: 'active'
                });
            dispatch('fetchTodos');
        }
    }
}
