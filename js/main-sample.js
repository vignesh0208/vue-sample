var app = new Vue({
    el: '#app',
    data: {
        tasks: [],
        x: '',
        tasksvalue: '',
        message: ['Foo','Bar','Part'],
        message1: ['Foo 1','Bar 1','Part 1'],
    },
    methods: {
        onAdd: function(x){
            if(x == "") {
                alert("Enter input")
            }
            else{
                this.tasks.push(x)
                this.tasksvalue = ""
            }
        },
        onClick: function(taskdetail){
            this.message1.push(this.message[taskdetail])
        },
        onRemove: function(taskdetail){
            this.message1.splice(taskdetail,1)
        },
        reMove: function(taskdetail){
            this.message.splice(taskdetail,1)
        },
        onMove: function(taskdetail){
            this.message.push(this.message1[taskdetail])
        },
        onLeft: function(taskdetail){
            this.message.push(this.tasks[taskdetail])
        },
        onRight: function(taskdetail){
            this.message1.push(this.tasks[taskdetail])
        }
    }
})