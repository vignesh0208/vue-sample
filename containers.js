var api = {
    data(){
        return {
            info: null
        }
    },
    created () {
        axios
            .get('http://127.0.0.1:5500/detail_all_container.json')
            .then(response => (this.info = response.data))
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
                                    <th scope="col">Status</th>
                                    <th scope="col">Full ID</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr v-for="task in info" :key="task.short_id" :task="task">
                                <td scope="row"><router-link :to="'/user/' + task.short_id">{{ task.short_id }}</router-link></td>
                                <td>{{ task.name }}</td>
                                <td>{{ task.status }}</td>
                                <td>{{ task.id }}</td>
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
        }
    },
    computed: {
        
    },
    methods: {
        
    },
    template: `
    
` }
var user = {
    data() {
        return {
            short_id: this.$route.params.short_id,
            info: null
        }
    },
    methods: {
        
    },
    created () {
        axios
            .get('http://127.0.0.1:5500/detail_all_container.json')
            .then(response => (this.info = response.data))
    },
    computed: {
        // user() {
        //     var id = this.$route.params.short_id;
        //     return this.$store.state.info.filter(function(g){
        //         return g.short_id === id;
        //     })[0];
        // },
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
                                    <th scope="col">Status</th>
                                    <th scope="col">Full ID</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td scope="row">{{ short_id }}</td>
                                <td>{{ name }}</td>
                                <td>{{ status }}</td>
                                <td>{{ id }}</td>
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
    { path: '/user/:short_id', component: user}
  ]
  const router = new VueRouter({
    routes,
    // mode: 'history'
  })
  var app = new Vue({
    // store,
    components:{
        "api":api,
        "edit":edit,
        "user":user
    },
    router,
  }).$mount('#app')