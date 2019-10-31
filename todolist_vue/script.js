var app = new Vue({
    el:"#app",
    data:{
        userInput: "",
        items:[],
        status: true,
        index: ''
    },
    methods:{
        addTask: function(x) {
            this.items.push(x)
            this.userInput = ''
        },
        removeTask: function(index) {
            this.items.splice(index, 1)
        },
        editTask: function(index) {
            this.status= false
            this.userInput = this.items[index]
            this.index = index
        },
        updateTask: function(x) {
            this.status= true
            this.items.splice(this.index, 1, x)
            this.userInput = ''
        }
    },
})