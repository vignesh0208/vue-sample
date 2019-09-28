var app = new Vue({
    el:"#app",
    data:{
        userInput: "",
        items:[],
    },
    methods:{
        addTask: function(x) {
            this.items.push(x)
            this.userInput = ''
        },
        removeTask: function(){
            this.items.pop()
        }
    },
})