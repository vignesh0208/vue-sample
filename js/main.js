var tasks = []

var app = new Vue({
    el: '#app',
    data: {
        taskDetail: '',
        statementIsTrue: '',
        edit: {
            status: false,
            index: 0
        },
        tasks: tasks
    },
    methods: {
        onClick: function(task_detail) {
            if(this.edit.status) {
                this.tasks[this.edit.index] = task_detail
                Vue.set( this.tasks )
            } else {
                this.tasks.push(task_detail)
                this.taskDetail = ''
            }
        },
        deleteTask: function(index) {
            this.tasks.splice(index, 1)
            window.alert(index)
        },
        editTask: function(index){
            this.edit.status = true
            this.edit.index = index
            this.taskDetail = this.tasks[index]
        },
        updateTask: function(task, index) {
            this.tasks[index] = task
            Vue.set( this.tasks )
        }
    }
})