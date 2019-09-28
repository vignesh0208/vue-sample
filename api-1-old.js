var store = new Vuex.Store({
    state: {
        tasks: [],
        vals: []
    },
    getters: {
        tasks: state => state.tasks,
        vals: state => state.vals
    }
})
var api = {
    computed: {
        tasks() {
            return this.$store.getters.tasks;
        },
        vals(){
            return this.$store.getters.vals;
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
            id: 1,
            tasksvalue: '',
            age:'',
            gender: '',
            birth:'',
            option: '',
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
            address1: '',
            address2: '',
            city: '',
            state: '',
            code: '',
            mobile: '',
            email: '',
            fname: '',
            edit:{
                status: false,
                index: 0,
            },
            remove: true,
            RemoveAll: true,
        }
    },
    computed: {
        tasks() {
            return this.$store.getters.tasks;
        },
        vals() {
            return this.$store.getters.vals;
        }
    },
    methods: {
        onAdd: function(x, f, z, g){
            if(this.edit.status) {
                // this.tasks[] = tasksvalue
                // this.tasks[index] = this.tasks
                // Vue.set ( this.tasks )
                this.age = ""
                this.tasksvalue = ""
                this.gender = ""
                this.birth = ""
                this.selected = "Select Blood Group"
                this.address1 = ""
                this.address2 = ""
                this.city = ""
                this.state = ""
                this.code = ""
                this.email = ""
                this.mobile = ""
                this.fname = ""
                this.RemoveAll = false
                this.edit.status = false
            }
            else if(x == "") {
                alert("Enter your name")
            }
            else if(f == ""){
                alert("Enter your father name")
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
                    fname: f,
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
                    this.$store.state.tasks.push(tmp)
                    this.fname = ""
                    this.age = ""
                    this.tasksvalue = ""
                    this.gender = ""
                    this.birth = ""
                    this.selected = "Select Blood Group"
                    this.address1 = ""
                    this.address2 = ""
                    this.city = ""
                    this.state = ""
                    this.code = ""
                    this.email = ""
                    this.mobile = ""
                    this.RemoveAll = true
                }
            }
        },
        onEdit: function(index){
            this.edit.status = true
            this.edit.index = index
            this.tasksvalue = this.$store.state.tasks[index]
        },
        onRemove: function(y){
            if(y == ""){
                this.remove = false
                this.RemoveAll = true
                this.$store.state.vals.push(this.$store.state.tasks[y])
                this.$store.state.tasks.splice(y,1)
            }
            else{
                this.remove = false
                this.RemoveAll = false
                this.$store.state.vals.push(this.tasks[y])
                this.$store.state.tasks.splice(y,1)
            }
        },
        onDelete: function(y){
            if(y == ""){
                this.$store.state.vals.splice(y,1)
                this.remove = true
            }
            else{
                this.$store.state.vals.splice(y,1)
                this.remove = false
            }
        },
        onRemoveAll: function(){
            this.RemoveAll = true
            this.remove = false
            this.$store.state.vals = this.$store.state.tasks.concat()
            this.$store.state.tasks = []
        },
        undoAll: function(y){
            this.remove = true
            this.RemoveAll = false
            this.$store.state.tasks = this.$store.state.vals.concat(y)
            this.$store.state.vals = []
        },
        onDeleteAll: function(){
            alert("You want deleted all value")
            this.$store.state.vals = []
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
                                        <input type="text" v-model="fname" class="form-control mb-4" placeholder="Father Name" />
                                        <input min="21" max="60" type="number" v-model="age" class="form-control mb-4" placeholder="Age" />
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
                                        <input type="text" class="form-control mb-4" placeholder="Address Line 1" v-model="address1" required>
                                        <input type="text" class="form-control mb-4" placeholder="Address Line 2" v-model="address2">
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" placeholder="City" v-model="city" required>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" placeholder="State" v-model="state" required>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <input type="number" class="form-control" placeholder="Zip Code" v-model="code" required>
                                            </div>
                                        </div>
                                        <input type="number" class="form-control mb-4"  placeholder="Mobile Number" v-model="mobile" required>
                                        <input type="email" class="form-control mb-4" placeholder="Email Id" v-model="email" required>
                                        <input class="btn btn-info btn-block my-4" type="submit" @click="onAdd(tasksvalue, fname, age, gender, birth, address1, address2, city, state, code, mobile, email)" value="Update"/>
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
                                    <th scope="col">Birthday</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(task, index) in tasks">
                                    <th scope="row">IDPNA{{task.id}}</th>
                                    <td>{{task.value}}</td>
                                    <td>{{task.birth}}</td>
                                    <td>{{task.gender}}</td>
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
                                <th scope="col">Birthday</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(val, index) in vals">
                                <th scope="row">IDPNA{{val.id}}</th>
                                <td>{{val.value}}</td>
                                <td>{{val.birth}}</td>
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
    computed: {
        user() {
            var id = parseInt(this.$route.params.id);
            return this.$store.state.tasks.filter(function(c){
                return c.id === id;
            })[0];
        }
    },
    template: `
    <section class="api-profile">
        <div class="container">
            <h1>Employee Info</h1>
            <div class="col-6">
                <div class="row">
                    <div class="col-5">
                        <img src="image/download.svg" alt="" class="img-thumbnail">
                    </div>
                    <div class="col-7">
                        <h2>{{user.value}} {{user.fname}}</h2>
                        <h3>IDPNA{{user.id}}</h3>
                        <h4>{{user.birth}}</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <table class="table table-striped">
                            <tbody>
                                <tr>
                                    <th scope="row">Gender</th>
                                    <td>{{user.gender}}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Blood Group</th>
                                    <td>{{user.selected}}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Age</th>
                                    <td>{{user.age}}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Address</th>
                                    <td><p>{{user.address1}} {{user.address2}},</p>
                                        <p>{{user.city}}</p>
                                        <p>{{user.state}} - {{user.code}}</p></td>
                                </tr>
                                <tr>
                                    <th scope="row">Mobile no</th>
                                    <td>{{user.mobile}}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email id</th>
                                    <td>{{user.email}}</td>
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
    // mode: 'history'
  })
  var app = new Vue({
    store,
    components:{
        "api":api,
        "edit":edit,
        "user":user
    },
    router,
  }).$mount('#app')