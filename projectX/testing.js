var taskDetails ={
    lists:[]
}
function Card(obj){
    this.input = obj.input || []
    this.description = obj.description || ''
    this.comment = obj.comment || ''
}
new Vue({
    el:"#app",
    data() {
        return {
            details:[],
            cardDetails:[],
            input:'',
            cardDetails:taskDetails,
            list:{},
            //count: "one",
            show: true,
            rel: false,
            des: false,
        }
    },
    methods:{
        add: function(val){
            this.cardDetails.lists.push(val)
            this.list = new Card({})
            this.show = true
        },
        showText: function(y){
            this.show = false
            if(y.length > 0){
                this.des = true
            }
            
        },
        showInv: function(){
            this.show = true
        },
        checklen(x){
            if(x.length > 0){
                this.rel = true
            }
            else{
                this.rel = false
            }
        }
    },
    mounted() {
        this.list = new Card({})
    },
    template:`
        <div>
            <input type="text" v-model="list.input">
            <button type="submit" @click="add(list)">ADD</button>
            <ul>
                <li v-for ="(list,index) in cardDetails.lists" @click="showInv()"><button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#1' + index"><span v-if="rel"><i class="far fa-comments"></i></span> <span v-if="des"> <i class="fas fa-align-justify"></i></span> {{list.input}}</button>
                <div class="modal fade" :id="'1' + index" tabindex="-1" role="dialog" aria-labelledby="'1' + index" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="'1' + index">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>


                        <div class="modal-body">
                        <h2>Description</h2>
                        <template v-if="show">
                            <textarea type="text" v-model="list.description" @keyup.13 ="showText(list.description)"></textarea>
                        </template>
                        <template v-else>
                            <p @click="showInv()">{{list.description}}</p>
                        </template>
                        <h2>Comment</h2>
                            <textarea type="text" v-model = "list.comment" @keyup.13="checklen(list.comment)"></textarea>
                            <p>{{list.comment}}</p>
                        </div>

                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            </li>
            </ul>
            
        </div>
    `
})