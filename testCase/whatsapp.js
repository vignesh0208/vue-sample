const chats = {
    props: ['details', 'condition'],
    data() {
        return {
            dateTime: moment().format('hh:mm a'),
        }
    },
    methods:{
        
    },
    template:`
        <div>
            <div class="roClass" v-for="(detail, index) in details">
                <router-link :to="'/chatPage/' + detail.id" :key="detail.id">
                    <div class="row">
                        <div class="col-sm-2">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#one"><img class="imagecustom" :src="detail.image"></button>

                            <!-- Modal -->
                            <div class="modal fade" id="one" tabindex="-1" role="dialog" aria-labelledby="oneLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <img class="imagecustom" :src="detail.image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end of model-->
                        <div class="col-sm-10">
                            <div class="row">
                                <div class="col-sm-8">
                                <p class="name">{{detail.name}}</p>
                                <p>{{detail.message}}</p>
                                </div>
                                <div class="col-sm-4 float-right">
                                    <p>{{dateTime}}</p>
                                </div>
                            </div>
                            <span class="msg"></span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    `
}
//Chat page
// const chatPage={
//     props:['details'],
//     data(){
//         return{
//             task: [],
//             val: [],
//             text: {
//                 name: '',
//                 date: moment().format('hh:mm a')
//             },
//             bot: {
//                 value: '',
//                 date: moment().format('hh:mm a')
//             }
//         }
//     },
//     methods: {
//         onSelect: function() {
//             this.task.push(this.text)
//             console.log(this.task[0].name)
//             this.text = { name:'', date:moment()}
//             if(this.task[0].name == "hello") {
//                 this.bot.value = "hi"
//                 this.val.push(this.bot)
//             }
//             else {
//                 this.bot.value = "unable to understand"
//                 this.val.push(this.bot)
//             }
//         },
//     },
//     computed:{
//         chatPage(){
//             var id = this.$route.params.id;
//             return this.details.filter(function(c){
//                 return c.id === id;
//             })[0]
//         }
//     },
//     template:`
//     <section>
//         <div class="msg">
//             <div class="bubble altfollow"  v-for="ta in task">
//                 <div class="txt">
//                     <span class="timestamp">{{ta.date}}</span>
//                     <p class="message follow">{{ ta.name }}</p>
//                 </div>
//                 <div class="bubble-arrow alt"></div>
//             </div>
//         </div>
//         <div class="msg">
//             <div class="bubble" v-for="v in val">
//                 <div class="txt">
//                     <span class="name">Bot<span> ~ bot</span></span>
//                     <span class="timestamp">{{ v.date }}</span>
//                     <p class="message">{{ v.value }}</p>
//                 </div>
//                 <div class="bubble-arrow"></div>
//             </div>
//         </div>
//         <div class="textarea">
//             <div class="emoticons"></div>
//             <textarea class="message" name="message" v-model="text.name" placeholder="Type a message"></textarea>
//             <div class="photo">
//                 <i class="zmdi zmdi-camera"></i>
//             </div>
//             <div class="send-mic">
//                 <div class="circle-cont" @click="onSelect()">
//                     <i class="zmdi zmdi-mic"></i>
//                 </div>
//             </div>
//         </div>
//     </section>
//     `
// }
const status = {
    props:['details'],
    data() {
        return {

        }
    },
    methods: {
        
        
    },
    template:`
        <div>
            <div class="row roclass">
                <div class="col-sm-2">
                    <img class="imagecustom" src="https://semantic-ui.com/images/avatar2/large/matthew.png">
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p>My status</p>
                            <em>Tap to add status update</em>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row recent">
                <p>Recent updates</p>
            </div>
            <div class="roClass" v-for="(detail, index) in details">
                <router-link :to="'/statusLink/' + detail.id" :key="detail.id">
                    <div class="row">
                        <div class="col-sm-2">
                            <img class="imagecustoms" :src="detail.image">
                        </div>
                        <div class="col-sm-10">
                            <div class="row">
                                <div class="col-sm-8">
                                    <p class="name">{{detail.name}}</p>
                                </div>
                                <div class="col-sm-4 float-right">
                                </div>
                            </div>
                            <span class="msg"></span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="row recent">
                <p>Viewed updates</p>
            </div>
        </div>
    `
}
const calls = {
    props:["details"],
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    template:`
        <div>
            <div class="row roClass" v-for="detail in details">
                <div class="col-sm-2">
                    <img class="imagecustom" :src="detail.image">
                </div>
                <div class="col-sm-10">
                    <p class="name">{{detail.name}}</p>
                    <span class="msg"></span>
                </div>
            </div>
        </div>
    `
}

//statusLink page
// const statusLink={
//     props:['details'],
//     data(){
//         return{
//             value: 0,
//             statusData:[]
//         }
//     },
//     methods: {
//         onAdd:function(x){
//             for(i=0; i<100; i++){
//                 this.value++
//             }
//             setTimeout(() => {
//                 if(this.value==100){
//                 router.go(-1)
//                 }
//             }, 1000);
//             this.statusData.push(x)
//             //console.log(this.statusData)
//         }
//     },
//     computed:{
//         statusImg(){
//             var id = this.$route.params.id;
//             return this.details.filter(function(c){
//                 return c.id === id;
//             })[0]
//         }
//     },
//     template:`
//     <div>
//         <div>
//             <div class="progress">
//                 <div class="progress-bar" :style="{width: value + '%'}"></div>
//             </div>
//             <span @click="onAdd(statusImg.image)"><img :src="statusImg.image"></span>
//         </div>
//     </div>
//     `
// }

//ellipsis dropdown components
// const newgroup = {
//     props:["details"],
//     template:`
//         <div>
//             <div class="row roClass" v-for="detail in details">
//                 <div class="col-sm-2">
//                     <img class="imagecustom" :src="detail.image">
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                         <p class="name">{{detail.name}}</p>
//                         <p>{{detail.message}}</p>
//                         </div>
//                         <div class="col-sm-4 float-right">

//                         </div>
//                     </div>
//                     <span class="msg"></span>
//                 </div>
//             </div>
//         </div>
//     `
// }
// const newbroadCast ={
//     props:["details"],
//     template:`
//         <div>
//             <div class="row roClass" v-for="detail in details">
//                 <div class="col-sm-2">
//                     <img class="imagecustom" :src="detail.image">
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                         <p class="name">{{detail.name}}</p>
//                         <p>{{detail.message}}</p>
//                         </div>
//                         <div class="col-sm-4 float-right">

//                         </div>
//                     </div>
//                     <span class="msg"></span>
//                 </div>
//             </div>
//         </div>
//     `
// }
// const starredmessages={
//     template:`
//         <section>
//             <div class="row">
//                 <div class="col-6 offset-3">
//                     <div class="starredmessages">
//                         <i class="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div class="row startext">
//                 <div class="col-sm-2">
//                 </div>
//                 <div class="col-sm-8">
//                     <p>Tap and hold on any message in any chat to star it, so you can easily find it later</p>
//                 </div>
//                 <div class="col-sm-2">
//                 </div>
//             </div>
//         </section>
//     `
// }
// const settings={
//     template:`
//         <div>
//             <div class="row">
//                 <div class="col-sm-2">
//                     <img class="imagecustom" src="https://semantic-ui.com/images/avatar2/large/matthew.png">
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">baTmaN</p>
//                             <p>Available</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <router-link to = "/settings/account"><div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons"></i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Account</p>
//                             <p>Privacy, security, change number</p>
//                         </div>
//                     </div>
//                 </div>
//             </div></router-link>
//             <router-link to = "/settings/chats"><div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">chat</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Chats</p>
//                             <p>Backup, history, wallpaper</p>
//                         </div>
//                     </div>
//                 </div>
//             </div></router-link>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">notifications</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Notifications</p>
//                             <p>Message, group & call tones</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">data_usage</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Data and storage usage</p>
//                             <p>Network usage, auto-download</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">help_outline</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Help</p>
//                             <p>FAQ, contact us, privacy policy</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">group</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Invite a friend</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
// }

//settingsDetails Component

// const account={
//     data() {
//         return {

//         }
//     },
//     template:`
//         <div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">https</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Privacy</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">security</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Security</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">more_horiz</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Two-step verification</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">phonelink_setup</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Change number</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">description</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Request account info</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">delete</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Delete my account</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
// }
// const settingsChats={
//     template:`
//         <div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Enter is send</p>
//                             <em>Enter key will send your message</em>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Media visibility</p>
//                             <em>Show newly downloaded media in your phone's gallery</em>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Font size</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">App Language</p>
//                             <em>Phone's language(English)</em>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">wallpaper</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Wallpaper</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">cloud_upload</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Chat backup</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row roClass">
//                 <div class="col-sm-2">
//                     <span class="imagecustom"><i class="material-icons">history</i></span>
//                 </div>
//                 <div class="col-sm-10">
//                     <div class="row">
//                         <div class="col-sm-8">
//                             <p class="name">Chat history</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
// }
const searchBar = {
    props: ['details'],
    data: function () {
      return {
        search: '',
        onType: true,
        onFill: false,
      }
    },
    computed: {
        filteredList() {
            return this.details.filter((opt) => {
                return opt.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },
        filterList() {
            return this.details.filter((opt) => {
                return opt.message.toLowerCase().includes(this.search.toLowerCase())
            })
        },
        onTypevalue() {
            if(this.search == ''){
                return this.onType = true
            }
            else {
                return this.onType = false
            }
        },
        onFillter() {
            if(this.contacts == 0){
                return this.onFill = true
            }
            else {
                return this.onFill = false
            }
        }
    },
    methods: {
        
    },
    template: `
    <section>
        <input style="width: 100%" type="text" v-model="search" @change="onTypevalue" placeholder="Search title.."/>
        <div v-if="filteredList.length != 0">
                <h1 :class="{onType: onType}">Chats</h1>
            <div v-for="opt in filteredList">
                <p>{{ opt.name }}</p>
                <p>{{ opt.message }}</p>
            </div>
            <hr :class="{onType: onType}">
        </div>
        <div v-if="filterList.length != 0">
            <h1 :class="{onType: onType}">Messages</h1>
            <div :class="{onType: onType}" v-for="opt in filterList">
                <p>{{ opt.name }}</p>
                <p>{{ opt.message }}</p>
            </div>
        </div>
        <div v-if="(filteredList.length == 0) && (filterList.length == 0)">
            <h1>Not found this '{{ this.search }}'</h1>
        </div>
    </section>
    `
}

const HeadersView = {
    template:`
    <section>
        <div class="row header">
            <div class="col-sm-8">
                <h4>bingo</h4>
            </div>
            <div class="col-sm-4 iconspos">
                <router-link to="/search"><i class="fas fa-search" @change="onDispalyvalue()"></i></router-link>
                <div class="btn-group dropleft">
                    <span type="button" class="btn btn-secondary"  data-toggle="dropdown">
                        <i class="fa fa-ellipsis-v"></i>
                    </span>
                    <div class="dropdown-menu">
                        <router-link to="/newGroup"><button class="dropdown-item" type="button">New group</button></router-link>
                        <router-link to="/newbroadCast"><button class="dropdown-item" type="button">New broadcast</button></router-link>
                        <router-link to="/starredmessages"><button class="dropdown-item" type="button">Starred messages</button></router-link>
                        <router-link to="/settings"><button class="dropdown-item" type="button">Settings</button></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row tabmenu">
            <div class="col-sm-4 activation">
                <router-link to="/chats"><a class="tabs-menus">CHATS</a></router-link>
            </div>
            <div class="col-sm-4 inactivation">
                <router-link to="/status"><a class="tabs-menus">STATUS</a></router-link>
            </div>
            <div class="col-sm-4 inactivation">
                <router-link to="/calls"><a class="tabs-menus">CALLS</a></router-link>
            </div>
        </div>
    </section>
    `
}

const router = new VueRouter({
    routes: [
        { path:"/", components: {
            default: HeadersView,
        }},
        {path:"/chats", components: {
            default: HeadersView,
            a: chats
        }},
        {path:"/status", components: {
            default: HeadersView,
            a: status
        }},
        {path:"/calls", components: {
            default: HeadersView,
            a: calls
        }},
        {path:"/search", components: {
            a: searchBar
        }},
    ]
})
const app = new Vue({
    router,
    data(){
        return{
            details:[
                {name:'rob',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'UN rejects Saeed\'s plea for removal fro..',id:'1',time:'',date:'', statusImgage:''},
                {name:'sansa',image:'https://semantic-ui.com/images/avatar2/large/molly.png',message:'Seeking ban on Pak despite ICC snub..',id:'2',time:'',date:'', statusImgage:''},
                {name:'arya',image:'https://semantic-ui.com/images/avatar2/large/molly.png',message:'Hizbul behind Jammu grenade attack: ..',id:'3',time:'',date:'', statusImgage:''},
                {name:'jon',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Celebrate Women\'s Day',id:'4',time:'',date:'', statusImgage:''},
                {name:'bran',image:'https://semantic-ui.com/images/avatar2/large/elyse.png',message:'Apple CEO \'Tim Apple\'',id:'5',time:'',date:'', statusImgage:''},
                {name:'ned',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'UN rejects  plea for removal fro..',id:'6',time:'',date:'', statusImgage:''},
                {name:'tyrion',image:'https://semantic-ui.com/images/avatar2/large/elyse.png',message:'Hizbul behind Jammu attack: ..',id:'7',time:'',date:'', statusImgage:''},
                {name:'robert',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Seeking ban on despite ICC snub..',id:'8',time:'',date:'', statusImgage:''}
            ],
            onType: true,
            onFill: false,
        }
    },
    computed: {
        
    },
    methods:{
        
    },
    template:`
        <div>
            <div class="container">
                <div class="row mainvalue">
                    <div class="col-sm-4 offset-sm-4">
                        <router-view></router-view>
                        <div class="row">
                            <div class="col-sm-12" style="padding:0px;">
                                <router-view name="a" :details="details"></router-view>
                                <!--<router-view :details="details" name="newGroup"></router-view>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}).$mount("#app")