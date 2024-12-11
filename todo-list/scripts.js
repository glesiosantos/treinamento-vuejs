var tasks = []

const todosApp = {
    data() {
        return {
            tasks: tasks,
            task: {
                done: false
            }
        }
    },
    methods: {
        addTask: function() {
            if(this.task.title) {
                this.tasks.push(this.task)
                this.task = {}
            } else {
                alert('required title')
            }
        },

        cleanTask: function() {
            this.tasks = []
        }
    },
}

Vue.createApp(todosApp).mount('#app')