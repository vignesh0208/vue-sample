import { METHODS } from "http";

var tasks = []
var app = new Vue(
    {
        el: '#app',
        data: {
            taskDetail: '',
            tasks : tasks,
        }
        
    }
)