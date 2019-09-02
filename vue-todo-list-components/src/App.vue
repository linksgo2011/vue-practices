<template>
    <div id="app">
        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>

        <CreateForm @createTodo="handleCreateTodo"/>
        <TodoList :todoList="filteredTodoList" @toggleActive="handleToggleActive"/>
        <TodoListFilter :currentFilter="currentFilter" @updateFiler="handleUpdateFiler"/>
    </div>
</template>

<script>
    import CreateForm from './components/CreateForm.vue'
    import TodoList from './components/TodoList.vue'
    import TodoListFilter from './components/TodoListFilter.vue'

    export default {
        name: 'app',
        components: {
            CreateForm,
            TodoList,
            TodoListFilter,
        },
        data: function () {
            return {
                /**
                 * 定义了 todo item 中属性为 {content:'吃饭',status:'active'}
                 * 定义了 todo 的两种状态 completed、active，默认为 active
                 */
                todoList: [],
                currentFilter: 'all'
            }
        },
        computed: {
            filteredTodoList: function () {
                let filteredList = [];
                for (let i = 0; i < this.todoList.length; i++) {
                    if (this.todoList[i].status === this.currentFilter || this.currentFilter === 'all') {
                        filteredList.push(this.todoList[i])
                    }
                }
                return filteredList;
            }
        },
        methods: {
            handleCreateTodo: function (content) {
                this.todoList.push({
                    status: 'active',
                    content: content
                })
            },
            handleToggleActive: function (index) {
                console.log(52, index);
                this.todoList[index].status = this.todoList[index].status === 'active' ? 'completed' : 'active';
            },
            handleUpdateFiler: function (filter) {
                this.currentFilter = filter;
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }
</style>
