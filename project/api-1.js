var store = new Vuex.Store({
    state: {
        tasks: [],
        vals: [],
        model: []
    },
    getters: {
        tasks: state => state.tasks,
        vals: state => state.vals,
        model: state => state.model
    }
})
var api = {
    computed: {
        tasks() {
            return this.$store.getters.tasks;
        },
        vals() {
            return this.$store.getters.vals;
        },
        model() {
            return this.$store.getters.model;
        }
    },
    methods:{
        sortbyName: function(){
            this.$store.tasks.sort()
            console.log(this.tasks)
        }
    },
    template: `
    <section class="api-login">
        <div class="container">
            <div class="row">
                <!--<div class="col-md-6">
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
                                    <th scope="col">Marital Status</th>
                                    <th scope="col">Birthday</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Blood Group</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(task, index) in tasks" :key="task.id">
                                <th scope="row"><router-link :to="'/user/' + task.id">{{task.id}}</router-link></th>
                                <td>{{task.tasksvalue}}</td>
                                <td>{{task.status}}</td>
                                <td>{{task.birth}}</td>
                                <td>{{task.gender}}</td>
                                <td>{{task.selected}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>-->
                <div class="col-md-8">
                    <div class="heading">
                        <h4>Current Log <span style="float:right">
                        <select class="form-control">
                            <option value="value">value</option>
                            <option value="name" @click="sortbyName">Sort by Name</option>
                        </select> 
                        </span></h4>
                        <p @click="sortbyName">Sort by Name</p>
                    </div>
                    <br>
                    <br>
                    <div class="col-md-10 offset-md-1">
                        <div class="card" style="background-color: #e6e6e6; margin: 16px 0px;" v-for="(task, index) in tasks">
                            <div class="card-body row">
                                <div class="col-3">
                                    <router-link :to="'/user/' + task.id" :key="task.id">
                                        <img src="image/download.svg" class="img-fluid align-self-center mr-3" alt="alt">
                                    </router-link>
                                </div>
                                <div class="col-9 row">
                                    <div class="col-md-10 offset-md-1">
                                        <h3>Basic Detail</h3>
                                        <router-link :to="'/user/' + task.id" :key="task.id">
                                            <div class="row">
                                                <div class="col-7">
                                                    <p>{{task.tasksvalue}} {{task.fname}}</p>
                                                    <p>IDPNA{{task.id}}<p>
                                                    <p>Department</p>
                                                </div>
                                                <div class="col-5">
                                                    <p>{{task.birth}}</p>
                                                    <p>{{task.mobile}}</p>
                                                    <p>{{task.email}}</p>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="heading">
                        <h4>R <span style="float:right">
                        <select class="form-control">
                            <option value="name">Sort by Name</option>
                        </select> 
                        </span></h4>
                    </div>
                    <div class="card" v-for="(task, index) in tasks">
                        <div class="card-body row">
                            <div class="col-3">
                                <img src="image/download.svg" class="img-fluid align-self-center mr-3" alt="alt">
                            </div>
                            <div class="col-9">
                                <h5>{{task.tasksvalue}} {{task.fname}}</h5>
                                <p>IDPNA{{task.id}}<p>
                                <p>Department</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
}
var edit = {
    data() {
        return {
            count: '',
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
            newUser: {
                id: '',
                tasksvalue: '',
                fname: '',
                status:'',
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
                department: '',
                doh: '',
                report: '',
                type: '',
                country: 'India',
             },
            edit:{
                status: false,
                index: 0,
                newUser: {}
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
        },
        model() {
            return this.$store.getters.model;
        }
    },
    methods: {
        onAdd: function(){
            if(this.newUser.id == ""){
                alert("Enter Name")
            }
            else if(this.newUser.tasksvalue == ""){
                alert("Enter Name")
            }
            else if(this.newUser.fname == ""){
                alert("Enter Father")
            }
            else if(this.newUser.birth == ""){
                alert("Enter birthday")
            }
            else if(this.newUser.selected == "Select Blood Group"){
                alert("Select Blood Group")
            }
            else if(this.newUser.gender == ""){
                alert("Select Gender")
            }
            else if(this.newUser.status == ""){
                alert("Enter Marital Status")
            }
            else if(this.newUser.address1 == ""){
                alert("Enter Address")
            }
            else if(this.newUser.city == ""){
                alert("Enter City")
            }
            else if(this.newUser.state == ""){
                alert("Enter State")
            }
            else if(this.newUser.code == ""){
                alert("Enter Pincode")
            }
            else if(this.newUser.mobile == ""){
                alert("Enter Mobile number")
            }
            else if(this.newUser.email == ""){
                alert("Enter Email Id")
            }
            else if(this.edit.status) {
                this.$store.state.tasks[this.edit.newUser]
                Vue.set( this.$store.state.tasks )
                this.newUser = { selected: 'Select Blood Group' }
                this.RemoveAll = false
                this.edit.status = false
            }
            else {
                if(this.newUser.address2 == ""){
                    this.newUser.address2 = '-'
                    this.$store.state.tasks.push(this.newUser)
                    this.newUser = { selected: 'Select Blood Group' }
                    this.RemoveAll = false
                }
                else{
                    this.$store.state.tasks.push(this.newUser)
                    this.newUser = { selected: 'Select Blood Group' }
                    this.RemoveAll = false
                }
            }
        },
        onEdit: function(index){
            this.edit.status = true
            this.edit.newUser = index
            this.newUser = this.$store.state.tasks[index]
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
                                        <input type="number" class="form-control mb-4"  placeholder="Employee Id" v-model="newUser.id">
                                        <input type="text" v-model="newUser.tasksvalue" class="form-control mb-4" placeholder="Name" />
                                        <input type="text" v-model="newUser.fname" class="form-control mb-4" placeholder="Father Name" />
                                        <input type="date" v-model="newUser.birth" class="form-control mb-4" placeholder="Birthday" />
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" class="custom-control-input" id="male" value="Male" v-model="newUser.gender">
                                            <label class="custom-control-label" for="male">Male</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline mb-4">
                                            <input type="radio" class="custom-control-input" id="female" value="Female" v-model="newUser.gender">
                                            <label class="custom-control-label" for="female">Female</label>
                                        </div>
                                        <select class="form-control" v-model="newUser.selected">
                                            <option v-for="(option, index) in options" v-bind:value="option.text">
                                                {{ option.text }}
                                            </option>
                                        </select>
                                        <div class="custom-control custom-radio custom-control-inline radio-form">
                                            <input type="radio" class="custom-control-input" id="single" value="Single" v-model="newUser.status">
                                            <label class="custom-control-label" for="single">Single</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline mb-4">
                                            <input type="radio" class="custom-control-input" id="married" value="Married" v-model="newUser.status">
                                            <label class="custom-control-label" for="married">Married</label>
                                        </div>
                                        <input type="text" class="form-control mb-4" placeholder="Address Line 1" v-model="newUser.address1">
                                        <input type="text" class="form-control mb-4" placeholder="Address Line 2" v-model="newUser.address2">
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" placeholder="City" v-model="newUser.city">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" placeholder="State" v-model="newUser.state">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <input type="number" class="form-control" placeholder="Zip Code" v-model="newUser.code">
                                            </div>
                                        </div>
                                        <input type="number" class="form-control mb-4"  placeholder="Mobile Number" v-model="newUser.mobile">
                                        <input type="email" class="form-control mb-4" placeholder="Email Id" v-model="newUser.email">
                                        <input class="btn btn-info btn-block my-4" type="submit" @click="onAdd()" value="Update"/>
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
                                    <td>{{task.tasksvalue}}</td>
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
                                <td>{{val.tasksvalue}}</td>
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
        tasks() {
            return this.$store.getters.tasks;
        },
        vals() {
            return this.$store.getters.vals;
        },
        model() {
            return this.$store.getters.model;
        }
    },
    data() {
        return {
            count: '',
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
            edit:{
                status: false,
                index: 0,
                newUser: {}
            },
            tell: {
                id: '',
                company: '',
                jobTitle: '',
                from: '',
                to: ''
            },
            remove: true,
            RemoveAll: true,
        }
    },
    methods: {
        onAdd: function(){
            this.$store.state.tasks.push(this.user)
        },
        onEdit: function(index){
            this.edit.status = true
            this.edit.newUser = index
            this.newUser = this.$store.state.tasks[index]
        },
        onAddValue: function(){
            this.tell.id = this.$route.params.id;
            this.$store.state.model.push(this.tell)
            console.log(this.tell.id)
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
    computed: {
        user() {
            var id = this.$route.params.id;
            return this.$store.state.tasks.filter(function(c){
                return c.id === id;
            })[0];
        },
        model() {
            var id = this.$route.params.id;
            return this.$store.state.model.filter(function(d) {
                return d.id === id;                
            })[0];
        }
    },
    template: `
    <section class="api-profile">
        <div class="container">
            <div class="row">
                <div class="col-10 offset-1">
                    <div class="row">
                        <div class="col-3">
                            <img src="image/download.svg" alt="" class="img-thumbnail">
                        </div>
                        <div class="col-9">
                            <h1>{{user.tasksvalue}}</h1>
                            <p>- Designer</p>
                            <p><a href="mailto:vignesh@positivenaick.com">vignesh@positivenaick.com</a></p>
                            <p><i class="fas fa-mobile-alt"></i> {{user.mobile}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1">
                    <div class="card">
                        <div class="card-header">
                            <b>Basic Info</b> 
                            <span style="float:right">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Edit</button>
                            </span>
                            <div class="modal fade" id="myModal" role="dialog">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Basic Info</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>First Name</b>:</div>
                                                        <div class="col-8"><input type="text" class="form-control mb-4"  placeholder="Name" v-model="user.tasksvalue"></div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Father Name</b>:</div>
                                                        <div class="col-8"><input type="text" class="form-control mb-4"  placeholder="Father Name" v-model="user.fname"></div>
                                                    </div>   
                                                </div>
                                            </div>
                                            <div class="row row-top">
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>D.O.B</b>:</div>
                                                        <div class="col-8"><input type="date" class="form-control mb-4"  placeholder="Father Name" v-model="user.birth"></div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Blood Group</b>:</div>
                                                        <div class="col-8"><select class="form-control" v-model="user.selected"><option v-for="(option, index) in options" v-bind:value="option.text">{{ option.text }}</option></select></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row row-top">
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Employee Id</b>:</div>
                                                        <div class="col-8">IDPNA<input type="number" class="form-control mb-4"  placeholder="Employee id" v-model="user.id"></div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Mail Id</b>:</div>
                                                        <div class="col-8"><input type="mail" class="form-control mb-4"  placeholder="Employee id" v-model="user.email"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal" @click="onAdd()">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>First Name</b>:</div>
                                        <div class="col-8">{{user.tasksvalue}}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Father Name</b>:</div>
                                        <div class="col-8">{{user.fname}}</div>
                                    </div>   
                                </div>
                            </div>
                            <div class="row row-top">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>D.O.B</b>:</div>
                                        <div class="col-8">{{user.birth}}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Blood Group</b>:</div>
                                        <div class="col-8">{{user.selected}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-top">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Employee Id</b>:</div>
                                        <div class="col-8">IDPNA{{user.id}}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Mail Id</b>:</div>
                                        <div class="col-8"><a href="#">{{user.email}}</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <b>Work</b> 
                            <span style="float:right">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myWork">Edit</button>
                            </span>
                            <div class="modal fade" id="myWork" role="dialog">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Basic Info</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Department</b>:</div>
                                                        <div class="col-8"><input type="text" class="form-control mb-4"  placeholder="Department" v-model="user.department"></div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Date of Hire</b>:</div>
                                                        <div class="col-8"><input type="date" class="form-control mb-4"  placeholder="Date of Hire" v-model="user.doh"></div>
                                                    </div>   
                                                </div>
                                            </div>
                                            <div class="row row-top">
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Reporting To</b>:</div>
                                                        <div class="col-8"><input type="text" class="form-control mb-4"  placeholder="Reporting To" v-model="user.report"></div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Employee Type</b>:</div>
                                                        <div class="col-8"><input type="text" class="form-control mb-4"  placeholder="Employee Type" v-model="user.type"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal" @click="onAdd()">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Department</b>:</div>
                                        <div class="col-8">{{user.department}}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Date of Hire</b>:</div>
                                        <div class="col-8">{{user.doh}}</div>
                                    </div>   
                                </div>
                            </div>
                            <div class="row row-top">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Reporting To</b>:</div>
                                        <div class="col-8">{{user.report}}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Employee Type</b>:</div>
                                        <div class="col-8">{{user.type}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <b>Personal Details</b> 
                            <span style="float:right">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myPersonal">Edit</button>
                            </span>
                            <div class="modal fade" id="myPersonal" role="dialog">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Personal Details</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Address 1</b>:</div>
                                                        <div class="col-8"><input type="text" class="form-control mb-4"  placeholder="Address 1" v-model="user.address1"></div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Address 2</b>:</div>
                                                        <div class="col-8"><input type="text" class="form-control mb-4"  placeholder="Address 2" v-model="user.address2"></div>
                                                    </div>   
                                                </div>
                                            </div>
                                            <div class="row row-top">
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>City</b>:</div>
                                                        <div class="col-8"><input type="text" class="form-control mb-4"  placeholder="City" v-model="user.city"></div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Country</b>:</div>
                                                        <div class="col-8"><input type="text" class="form-control mb-4"  placeholder="Country" v-model="user.country"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row row-top">
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>State</b>:</div>
                                                        <div class="col-8"><input type="text" class="form-control mb-4"  placeholder="state" v-model="user.state"></div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Postal Code</b>:</div>
                                                        <div class="col-8"><input type="number" class="form-control mb-4"  placeholder="Postal Code" v-model="user.code"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row row-top">
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Gender</b>:</div>
                                                        <div class="col-8"><div class="custom-control custom-radio custom-control-inline"><input type="radio" class="custom-control-input" id="male" value="Male" v-model="user.gender"><label class="custom-control-label" for="male">Male</label></div><div class="custom-control custom-radio custom-control-inline mb-4"><input type="radio" class="custom-control-input" id="female" value="Female" v-model="user.gender"><label class="custom-control-label" for="female">Female</label></div></div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-4"><b>Marital Status</b>:</div>
                                                        <div class="col-8"><div class="custom-control custom-radio custom-control-inline radio-form"><input type="radio" class="custom-control-input" id="single" value="Single" v-model="user.status"><label class="custom-control-label" for="single">Single</label></div><div class="custom-control custom-radio custom-control-inline mb-4"><input type="radio" class="custom-control-input" id="married" value="Married" v-model="user.status"><label class="custom-control-label" for="married">Married</label></div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal" @click="onAdd()">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Address 1</b>:</div>
                                        <div class="col-8">{{user.address1}}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Address 2</b>:</div>
                                        <div class="col-8">{{user.address2}}</div>
                                    </div>   
                                </div>
                            </div>
                            <div class="row row-top">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>City</b>:</div>
                                        <div class="col-8">{{user.city}}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Country</b>:</div>
                                        <div class="col-8">India</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-top">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>State</b>:</div>
                                        <div class="col-8">{{user.state}}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Postal Code</b>:</div>
                                        <div class="col-8">{{user.code}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-top">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Gender</b>:</div>
                                        <div class="col-8">{{user.gender}}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4"><b>Marital Status</b>:</div>
                                        <div class="col-8">{{user.status}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <b>Work Experience</b> 
                            <span style="float:right">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myExperience">Edit</button>
                            </span>
                            <div class="modal fade" id="myExperience" role="dialog">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Work Experience</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="table-responsive-xl">
                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Previous Company</th>
                                                            <th scope="col">Job Title</th>
                                                            <th scope="col">From</th>
                                                            <th scope="col">To</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row"><input type="text" class="form-control" placeholder="Previous Company" v-model="tell.company"></th>
                                                            <td><input type="text" class="form-control" placeholder="Job Title" v-model="tell.jobTitle"></td>
                                                            <td><input type="date" class="form-control" placeholder="From" v-model="tell.from"></td>
                                                            <td><input type="date" class="form-control" placeholder="To" v-model="tell.to"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal" @click="onAddValue()">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive-xl">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Previous Company</th>
                                            <th scope="col">Job Title</th>
                                            <th scope="col">From</th>
                                            <th scope="col">To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr  v-for="mod in model">
                                            <th scope="row">{{mod.company}}</th>
                                            <td>{{mod.jobTitle}}</td>
                                            <td>{{mod.from}}</td>
                                            <td>{{mod.to}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button type="button" class="btn btn-primary" @click="onAddValue()"><i class="fas fa-plus"></i> Add Experience</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <b>Education</b> 
                            <span style="float:right">
                                <button type="button" class="btn btn-primary">Edit</button>
                            </span>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive-xl">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">School/College Name</th>
                                            <th scope="col">Degree</th>
                                            <th scope="col">Field(s) of Study</th>
                                            <th scope="col">Year of Complection</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">ABC FLY</th>
                                            <td>Designer</td>
                                            <td>2017-07-17</td>
                                            <td>2018-12-31</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button type="button" class="btn btn-primary"><i class="fas fa-plus"></i> Add Education</button>
                        </div>
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