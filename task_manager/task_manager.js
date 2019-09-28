var tasks=  []
var spare = []
var task=''
var tasksvalue=''
var index=''

var api = {
    data(){
        return{
            task:'',
            tasks:tasks
        }
    },
    template: `
        <section class="api-login">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="heading">
                            <h4>Prev Log</h4>
                        </div>
                        <div class="card-inner">
                            <h5>Sample</h5>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">API</th>
                                        <th scope="col">Monday</th>
                                        <th scope="col">Tuesday</th>
                                        <th scope="col">Wednesday</th>
                                        <th scope="col">Thursday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>hello</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>hello</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="heading">
                            <h4>Current Log</h4>
                        </div>
                        <div class="card-inner">
                            <h5>Sample</h5>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">API</th>
                                        <th scope="col">Monday</th>
                                        <th scope="col">Tuesday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Selection type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(task,index) in tasks">
                                        <th scope="row">{{index+1}}</th>
                                        <td>{{task.value}}</td>
                                        <td>{{task.selected}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    <li>{{task.value}}</li>
                </ul>
            </div>
        </section>
    ` 
}
var edit = {
    data() {
        return {
            tasks: [],
            tasksvalue: '',
            selected: 'Select One',
            option:'',
            remove:'',
            editValue:'',
            editNum:'',
            edit:{
                status: false,
                index:0,
                data: {}
            },
            options:[
                {text: "Select One", value: null},
                {text: "One", value: "1"},
                {text: "Two", value: "2"},
                {text: "Three", value: "3"}
            ],
            tasks:tasks
        }
    },
    methods: {
        onAdd: function(x){
            if(x == "") {
                alert("Enter input")
            }
            else{
                var tmp_obj = {
                    value: x,
                    selected: this.selected
                }
                this.tasks.push(tmp_obj)
                this.selected = ''
                this.tasksvalue = ""
            }
        },
        onRemove: function(y){
            this.tasks.splice(y, 1)
        },
        onEdit:function(index,task){
            this.edit.index = index
            this.edit.data = task
            this.edit.status = true
        },
        onUpdate:function(){
            this.edit.status = false
        }
    },
    template: `
        <section class="api-login-sample">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="offset-md-1 col-md-10">
                                <div class="card-inner-sample">
                                    <form class="text-center login-top p-3">
                                        <p class="h4 mb-4">Select</p>
                                        <div>
                                            <input type="text" v-model="tasksvalue" class="form-control     mb-4" placeholder="name" />
                                            <select class="form-control" v-model="selected">
                                            asdsad   <option v-for="option in options"   v-bind:value="option.value">{{option.text}}</option>
                                            </select>
                                            <input class="btn btn-info btn-block my-4" type="submit"    @click="onAdd(tasksvalue)" value="Update"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="heading">
                            <h4>Current Log</h4>
                        </div>
                        <div class="card-inner">
                            <h5>Sample</h5>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Selection type</th>
                                        <th scope="col">Delete</th>
                                        <th scope="col">Edit</th>
                                    </tr>
                  
                                    </thead>
                                <tbody>
                                    <tr v-for="(task,index) in tasks">
                                        <td>{{index+1}}</td>
                                        <td>
                                            <template v-if="edit.status && edit.index == index">
                                                <input type="text" v-model="edit.data.value">
                                            </template>
                                            <template v-else>
                                                <span>{{task.value}}</span>
                                            </template>
                                        </td>
                                        <td>
                                            <template v-if="edit.status && edit.index == index">
                                                <input type="text" v-model="task.selected">
                                            </template>
                                            <template v-else>
                                                <span>{{task.selected}}</span>
                                            </template>
                                        </td>
                                        <td @click="onRemove(index)">remove</td>
                                        <td>
                                            <span v-if="edit.status && edit.index == index" @click="onUpdate()">Update</span>
                                            <span v-else @click="onEdit(index, task)">Edit</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ` 
}
const routes = [
  { path: '/api', component: api, },
  { path: '/edit', component: edit, }
]
const router = new VueRouter({
  routes
})
var app = new Vue({
    components:{
        "api":api,
        "edit":edit
    },
  router
}).$mount('#app') 