<template>
    <div id="app">
        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>
        <div class="input-form">
            <input type="input" v-model="inputtingItem">
            <button @click="createTodo">Add</button>
        </div>

        <ul class="items">
            <template v-for="(item,index) in items">
                <li :key="index" :class="item.status" v-show="item.status === currentFilter || item.status === 'all'">
                    <input name="status-toggle" type="checkbox" @change="toggleActive(item)">
                    <a href="" class="text">{{item.text}}</a>
                </li>
            </template>
        </ul>

        <div class="filter">
            <a @click.prevent="setFilter('all')" :class="{active:currentFilter=='all'}">ALL</a>
            <a @click.prevent="setFilter('active')" :class="{active:currentFilter=='active'}">Active</a>
            <a @click.prevent="setFilter('complete')" :class="{active:currentFilter=='complete'}">Complete</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        data: function () {
            return {
                inputtingItem: "",
                currentFilter: "all",
                items: []
            }
        },
        methods: {
            createTodo: function () {
                this.items.push({
                    status: 'active',
                    text: this.inputtingItem
                })
            },
            toggleActive: function (item) {
                item.status = item.status === 'active' ? 'complete' : 'active';
            },
            setFilter: function (status) {
                this.currentFilter = status;
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

    .items li.complete {
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
