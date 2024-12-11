const todosApp = {
    data() {
        return {
            tasks: [],
            task: {
                done: false
            }
        }
    },
    methods: {
        addTask: function() {
            console.log(this.task)
            if(this.task.title) { 
                this.tasks.push(this.task)
                this.task = { done: false }
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            } else {
                alert('Task title is required!')
            }
        },

        cleanTask: function() {
            this.tasks = []
        },
    },
    created() {
        this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : this.todos
    },

    updated() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },

}

Vue.createApp(todosApp).mount('#app')