var tasks = []
var vals = []
var api = {
    data(){
        return{
            tasks:tasks,
            vals:vals,
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
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Birthday</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Blood Group</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(task, index) in tasks" :key="task.id">
                                <th scope="row"><router-link :to="'/user/' + task.id">{{task.id}}</router-link></th>
                                <td>{{task.value}}</td>
                                <td>{{task.age}}</td>
                                <td>{{task.birth}}</td>
                                <td>{{task.gender}}</td>
                                <td>{{task.selected}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="heading">
                        <h4>Current Log <span style="float:right">
                                <button type="button" class="btn btn-primary">Restart All</button>
                        </span></h4>
                    </div>
                    <div class="card-inner">
                        <h5>Sample <span style="float:right">
                                <button type="button" class="btn btn-secondary">Restart</button>
                        </span></h5>
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
                    </div>
                </div>
            </div>
        </div>
    </section>`
}
var edit = {
    data() {
        return {
            index: '',
            id: 1,
            tasks: [],
            vals: [],
            tasksvalue: '',
            age:'',
            gender: '',
            birth:'',
            selected: 'Select Blood Group',
            option: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            code: '',
            mobile: '',
            email: '',
            options: [
                { text: 'Select Blood Group', value: '0' },
                { text: 'A+', value: 'A+' },
                { text: 'B+', value: 'B+' },
                { text: 'O+', value: 'O+' },
                { text: 'AB+', value: 'AB+' },
                { text: 'A-', value: 'A-' },
                { text: 'B-', value: 'B-' },
                { text: 'O-', value: 'O-' },
                { text: 'AB-', value: 'AB-' }
            ],
            edit:{
                status: false,
                index: 0,
            },
            remove: true,
            RemoveAll: true,
            tasks:tasks,
            vals:vals,
        }
    },
    methods: {
        onAdd: function(x, z, g){
            if(this.edit.status) {
                //this.tasks[] = tasksvalue
                //this.tasks[index] = this.tasks
                Vue.set ( this.tasks )
                this.age = ""
                this.tasksvalue = ""
                this.gender = ""
                this.birth = ""
                this.selected = "Select Blood Group"
                this.RemoveAll = false
                this.edit.status = false
            }
            else if(x == "") {
                alert("Enter your name")
            }
            else if(z == ""){
                alert("Enter your age")
            }
            else if(g == ""){
                alert("Select your gender")
            }
            else {
                var tmp = {
                    id: this.id++,
                    value: x,
                    age: z,
                    birth: this.birth,
                    gender: this.gender,
                    selected: this.selected,
                    address1: this.address1,
                    address2: this.address2,
                    city: this.city,
                    state: this.state,
                    code: this.code,
                    mobile: this.mobile,
                    email: this.email

                }
                if (this.selected == "Select Blood Group") {
                    alert("Select Blood Group")
                }
                else {
                    this.tasks.push(tmp)
                    this.age = ""
                    this.tasksvalue = ""
                    this.gender = ""
                    this.birth = ""
                    this.selected = "Select Blood Group"
                    this.RemoveAll = false
                }
            }
        },
        onEdit: function(index){
            this.edit.status = true
            this.edit.index = index
            this.tasksvalue = this.tasks[index]
        },
        onRemove: function(y){
            if(y == ""){
                this.remove = false
                this.RemoveAll = true
                this.vals.push(this.tasks[y])
                this.tasks.splice(y,1)
            }
            else{
                this.remove = false
                this.RemoveAll = false
                this.vals.push(this.tasks[y])
                this.tasks.splice(y,1)
            }
        },
        onDelete: function(y){
            if(y == ""){
                this.vals.splice(y,1)
                this.remove = true
            }
            else{
                this.vals.splice(y,1)
                this.remove = false
            }
        },
        onRemoveAll: function(){
            this.RemoveAll = true
            this.remove = false
            this.vals = this.tasks.concat()
            this.tasks = []
        },
        undoAll: function(y){
            this.remove = true
            this.RemoveAll = false
            this.tasks = this.vals.concat(y)
            this.vals = []
        },
        onDeleteAll: function(){
            alert("You want deleted all value")
            this.vals = []
            this.remove = true
        },
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
                                        <input type="text" v-model="tasksvalue" class="form-control mb-4" placeholder="Name" />
                                        <input type="number" value="1" min="21" max="80" v-model="age" class="form-control mb-4" placeholder="Age" />
                                        <input type="date" v-model="birth" class="form-control mb-4" placeholder="Birthday" />
                                        <select class="form-control" v-model="selected">
                                            <option v-for="(option, index) in options" v-bind:value="option.text">
                                                {{ option.text }}
                                            </option>
                                        </select>
                                        <div class="custom-control custom-radio custom-control-inline radio-form">
                                            <input type="radio" class="custom-control-input" id="male" value="Male" v-model="gender">
                                            <label class="custom-control-label" for="male">Male</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline mb-4">
                                            <input type="radio" class="custom-control-input" id="female" value="Female" v-model="gender">
                                            <label class="custom-control-label" for="female">Female</label>
                                        </div>
                                        <input type="text" class="form-control mb-4" placeholder="Address Line 1" v-model="address1">
                                        <input type="text" class="form-control mb-4" placeholder="Address Line 2" v-model="address2">
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" placeholder="City" v-model="city">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" placeholder="State" v-model="state">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" placeholder="Zip Code" v-model="code">
                                            </div>
                                        </div>
                                        <input type="number" class="form-control mb-4"  placeholder="Mobile Number" v-model="mobile">
                                        <input type="email" class="form-control mb-4" placeholder="Email Id" v-model="email">
                                        <input class="btn btn-info btn-block my-4" type="submit" @click="onAdd(tasksvalue, age, gender, birth, address1, address2, city, state, code, mobile, email)" value="Update"/>
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
                        <h5>Sample <span style="float:right">
                        <button type="button" @click="onRemoveAll()" class="btn btn-primary" v-bind:class="{RemoveAll: RemoveAll}">Remove All</button>
                        </span></h5>
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Birthday</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Blood Group</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(task, index) in tasks">
                                    <th scope="row">{{task.id}}</th>
                                    <td>{{task.value}}</td>
                                    <td>{{task.age}}</td>
                                    <td>{{task.birth}}</td>
                                    <td>{{task.gender}}</td>
                                    <td>{{task.selected}}</td>
                                    <td><button type="button" @click="onEdit(index, tasks)" class="btn btn-primary"><i class="fas fa-user-edit"></i></button></td>
                                    <td><button type="button" @click="onRemove(index)" class="btn btn-primary"><i class="fas fa-user-times"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-inner">
                        <h5>Last Removed Value <span style="float:right">
                        <button type="button" @click="undoAll(tasks)" class="btn btn-primary" v-bind:class="{remove: remove}"><i class="fas fa-undo-alt"></i></button>
                        </span> <span style="float:right; padding-right:14px;">
                        <button type="button" @click="onDeleteAll()" class="btn btn-primary" v-bind:class="{remove: remove}"><i class="fas fa-trash-alt"></i></button>
                        </span></h5>
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Blood Group</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(val, index) in vals">
                                <th scope="row">{{val.id}}</th>
                                <td>{{val.value}}</td>
                                <td>{{val.selected}}</td>
                                <td @click="onDelete(index)">Delete</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
` }

var user = {
    data() {
        return {
            tasks:tasks,
            vals:vals
        }
    },
    computed: {
        user() {
            var index = parseInt(this.$route.params.index);
            return this.$edit.tasks.api.filter(function(c){
                return c.index === index;
            })[0];
        }
    },
    template: `
    <section class="api-profile" v-if="this.$route.params.id == this.id">
        <div class="container" v-for="(task, index) in tasks">
            <div class="row">
                <div class="col-3">
                    <img src="image/download.svg" alt="" class="img-thumbnail">
                </div>
                <div class="col-9">
                    <h1>{{task.value}}</h1>
                    <h2>IDPNA{{task.id}}</h2>
                    <h3>{{task.birth}}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <th scope="row">Age</th>
                                <td>{{task.age}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Address</th>
                                <td><p>425/302, trichy mail road,</p>
                                    <p>Dadagapatty</p>
                                    <p>Salem - 636 006</p></td>
                            </tr>
                            <tr>
                                <th scope="row">Mobile no</th>
                                <td>7397353514</td>
                            </tr>
                            <tr>
                                <th scope="row">Email id</th>
                                <td>vignesh@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    <section class="api-login">
        <div class="container">
            <div class="row">
                <div class="col-md">
                    <div class="heading">
                        <h4>Prev Log</h4>
                    </div>
                    <div class="card-inner">
                        <h5>Sample <span style="float:right">
                        <router-link to="/api"><input type="button"  class="btn btn-primary" value="Go Back"></router-link>
                        </span></h5>
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Birthday</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Selection type</th>
                                </tr>
                            </thead>
                            <tbody v-if="this.$route.params.id == this.id">
                                <tr v-for="(task, index) in tasks">
                                <td>{{task.value}}</td>
                                <td>{{task.age}}</td>
                                <td>{{task.birth}}</td>
                                <td>{{task.gender}}</td>
                                <td>{{task.selected}}</td>
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
  { path: '/api', component: api},
  { path: '/edit', component: edit},
  { path: '/user/:id', component: user}
]
const router = new VueRouter({
  routes,
  //mode: 'history'
})
var app = new Vue({
    components:{
        "api":api,
        "edit":edit,
        "user":user
    },
  router,
}).$mount('#app')