var store = new Vuex.Store({
    state: {
        lists:[]
    },
})
function List(obj) {
    this.name = obj.name || ''
    this.date = obj.date || ''
    this.cards = obj.cards || []
}
function Card(obj){
    this.data = obj.data || ''
}
Vue.component('cardDetails', {
    props: ['list','index', 'Store'],
    data() {
        return {
            cbox: false,
            dbox: false,
            show: true,
            card: {},
        }
    },
    computed: {
        lists: {
            get() {
              return this.$store.state.lists
            },
            set(value) {
              this.$store.commit('updateMsg', value)
            }
        }
    },
    methods:{
        onAdd() {
            console.log(this.cards.comment)
        },
        addCard(card){
            console.log(card)
            this.list.cards.push(card)
            console.log(this.$store.state.lists)
            this.card = { data:'', comment:'' }
        },
        checklen(x, y){
            if(x.length && y.length > 0){
            this.cbox = true
            this.dbox = true
            }
            else if(x.length > 0){
                this.cbox = true
                this.dbox = false
            }
            else if(y.length > 0){
                this.cbox = false
                this.dbox = true
            }
            else{
                this.cbox = false
                this.dbox = false
            }
        },
        showText(){
            this.show = false
        },
        showInv(){
            this.show = true
        },
    },
    mounted() {
        this.card = new Card({})
    },
    template: `
    <div>
        <input type="text" v-model="card.data">
        <button type="submit" @click="addCard(card)">ADD</button>
        <ul>
            <li v-for ="(list, index) in list.cards" @click="showInv()"><button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#1' + index">{{list.data}}</button>
        
            <div class="modal fade" :id="'1' + index" tabindex="-1" role="dialog" :aria-labelled-by="'1' + index" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" :id="'1' + index">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <textarea type="text" v-model="list.comment"></textarea>
                            <p>{{ list.comment }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" @click="onAdd()" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            </li>
        </ul>
    </div>
    `,
})

Vue.component('headerdetails',{
    data(){
        return{
            dashboard : "dashboard",
            status:false,
            listTitle:'',
            edit:{
                index:0,
                status:false
            },
            active: false,
            listStatus: false,
        }
    },
    computed: {
        lists() {
            return this.$store.state.lists;
        },
    },
    methods: {
        add(list){
            this.$store.state.lists.push(list)
            this.list = new List({})
            this.listStatus = false
        },
        change(index){
            this.edit.status = true
            this.edit.index = index
        },
        update(){
            this.edit.status = false
        },
        task_change(index){
            this.edit1.status = false
            this.edit1.index = index
        },
        completed(index){
            index.active = true
        },
        showListComponents(){
            this.listStatus = true
        },
    },
    mounted() {
        this.list = new List({})
    },
    template:`
    <div>
        <div class="container-fluid"><h3>{{listTitle}}</h3>
            <div class="row" mb-3>
                <div class="col-lg-9">
                    <h3>
                        <template v-if="status">
                            <input type="text" v-model="dashboard" v-on:keyup.13="status=false">
                        </template>
                        <template v-else>
                            <span @click="status=true">{{dashboard}}</span>
                        </template>
                    </h3>
                    <button type="submit" @click="showListComponents()">Add a list</button>
                </div>
                <div class="col-lg-3">
                    <template v-if="listStatus">
                        <h6>List</h6>
                        <input type="text" placeholder="Enter list title..." v-model="list.name">
                        <h6>date</h6>
                        <input type="date" placeholder="date" v-model="list.date">
                        <button type="submit" @click="add(list)">Add list</button> 
                    </template>
                </div>
            </div>
        </div>
        <div class = "container">
            <div class="row">
                <div class="col-lg-12">   
                
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4" v-for="(list, index) in lists">
                    <h1>
                        <template v-if="edit.status && edit.index == index">
                            <input type="text" v-model="list.name" @keyup.13="update()">
                        </template>
                        <template v-else>
                            <span @click="change(index)">{{list.name}}</span>
                        </template>
                    </h1>
                    <h4>
                        <template v-if="edit.status && edit.index == index">
                            <input type="date" v-model="list.date" @keyup.13="update()">
                        </template>
                        <template v-else>
                            <span @click="change(index)">{{list.date}}</span>
                        </template>
                    </h4>
                        <cardDetails :list="list" :index="index"></cardDetails>
                </div>
            </div>
        </div>
    </div>
    `   
})

new Vue({
    el:"#app",
    store,
})