const chats = {
    props:['details', 'condition'],
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
                        <button type="button" class="btn btn-primary chat_image_cus" data-toggle="modal" data-target="#exampleModal"><img class="imagecustom" :src="detail.image"></button>

                            <!-- Modal -->
                            <div class="modal fade" id="one" tabindex="-1" role="dialog" aria-labelledby="oneLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                        <img class="cus-mod-pop-chat" :src="detail.image">
                                        <div class="ico-mod"><i class="fa fa-plus-circle"></i>
                                        <i class="fas fa-comment"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end of model-->
                        <div class="col-sm-10">
                            <div class="row">
                                <div class="col-sm-12 tex-cht-cus">
                                <p class="utarer">{{dateTime}}</p>
                                <p class="name">{{detail.name}}</p>
                                <p class="utdata">{{detail.message}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <p class="bottom-phone-icon"><a href="" class="tab menu"><i class="fas fa-comment"></i></a></p>
        </div>
    `
}
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
                    <img class="imagecustom1" src="https://semantic-ui.com/images/avatar2/large/matthew.png">
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
                        <div class="text_status">
                            <p class="name">{{detail.name}}</p>
                            10:30 am
                        </div>
                    </div>
                    </div>
                </router-link>
            </div>
            <div class="row recent">
                <p>Viewed updates</p>
                <div>
                    <span v-for="status in statusData"><img :src="status"></span>
                </div>
            </div>
            <p class="bottom_phone_icon2"><i class="fas fa-pen"></i></p>
            <p class="bottom_phone_icon1"><i class="fa fa-camera"></i></p>
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
        <section class="calls">
            <div class="row roClass" v-for="detail in details">
                <div class="col-sm-2">
                    <img class="imagecustom" :src="detail.image">
                </div>
                <div class="col-sm-8 call-cus">
                    <p class="name">{{detail.name}}</p>
                    <p>yesterday 10.30 pm</p>
                </div>
                <div class="col-sm-2 call-border">
                    <i class="material-icons" style="color:#165e54; font-size:28px;">call</i>
                </div>
            </div>
            <p class="bottom_phone_icon"><a href="#" class="tab menu"><i class="fas fa-phone"></i></a></p>
        </section>
    `
}

//statusLink page
const statusLink = {
    props:['details'],
    data(){
        return{
            value: 0,
            statusData:[]
        }
    },
    methods: {
        onAdd:function(x){
            for(i=0; i<100; i++){
                this.value++
            }
            setTimeout(() => {
                if(this.value==100){
                    router.go(-1)
                }
            }, 1000);
            this.statusData.push(x)
        }
    },
    computed:{
        statusImg(){
            var id = this.$route.params.id;
            return this.details.filter(function(c){
                return c.id === id;
            })[0]
        }
    },
    template:`
    <div class="back_status_cus">
        <div>
            <div class="progress">
                <div class="progress-bar" :style="{width: value + '%'}"></div>
            </div>
            <span @click="onAdd(statusImg.image)"><img :src="statusImg.image"  class="status_image"></span>
        </div>
    </div>
    `
}

//ellipsis dropdown components
const newgroup = {
    props:["details"],
    template:`
        <div>
            <div class="row roClass" v-for="detail in details">
                <div class="col-sm-2">
                    <img class="imagecustom" :src="detail.image">
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                        <p class="name">{{detail.name}}</p>
                        <p>{{detail.message}}</p>
                        </div>
                        <div class="col-sm-4 float-right">

                        </div>
                    </div>
                    <span class="msg"></span>
                </div>
            </div>
        </div>
    `
}
const newbroadCast = {
    props:["details"],
    template:`
        <div>
            <div class="row roClass" v-for="detail in details">
                <div class="col-sm-2">
                    <img class="imagecustom" :src="detail.image">
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                        <p class="name">{{detail.name}}</p>
                        <p>{{detail.message}}</p>
                        </div>
                        <div class="col-sm-4 float-right">

                        </div>
                    </div>
                    <span class="msg"></span>
                </div>
            </div>
        </div>
    `
}
const starredmessages = {
    template:`
        <section>
            <div class="row">
                <div class="col-6 offset-3">
                    <div class="starredmessages">
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="row startext">
                <div class="col-sm-2">
                </div>
                <div class="col-sm-8">
                    <p>Tap and hold on any message in any chat to star it, so you can easily find it later</p>
                </div>
                <div class="col-sm-2">
                </div>
            </div>
        </section>
    `
}
const settings = {
    template:`
        <div>
            <div class="row">
                <div class="col-sm-2">
                    <img class="imagecustom" src="https://semantic-ui.com/images/avatar2/large/matthew.png">
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">baTmaN</p>
                            <p>Available</p>
                        </div>
                    </div>
                </div>
            </div>
            <router-link to = "/settings/account"><div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons"></i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Account</p>
                            <p>Privacy, security, change number</p>
                        </div>
                    </div>
                </div>
            </div></router-link>
            <router-link to = "/settings/chats"><div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">chat</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Chats</p>
                            <p>Backup, history, wallpaper</p>
                        </div>
                    </div>
                </div>
            </div></router-link>
            <router-link to="/settings/notifications"><div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">notifications</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Notifications</p>
                            <p>Message, group & call tones</p>
                        </div>
                    </div>
                </div>
            </div></router-link>
            <router-link to="/settings/data-storage">
                <div class="row roClass">
                    <div class="col-sm-2">
                        <span class="imagecustom"><i class="material-icons">data_usage</i></span>
                    </div>
                    <div class="col-sm-10">
                        <div class="row">
                            <div class="col-sm-8">
                                <p class="name">Data and storage usage</p>
                                <p>Network usage, auto-download</p>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link to="/settings/help">
                <div class="row roClass">
                    <div class="col-sm-2">
                        <span class="imagecustom"><i class="material-icons">help_outline</i></span>
                    </div>
                    <div class="col-sm-10">
                        <div class="row">
                            <div class="col-sm-8">
                                <p class="name">Help</p>
                                <p>FAQ, contact us, privacy policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">group</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Invite a friend</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

//settingsDetails Component

const account = {
    data() {
        return {

        }
    },
    template:`
        <div>
            <router-link to="/settings/account/privacy"><div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">https</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Privacy</p>
                        </div>
                    </div>
                </div>
            </div></router-link>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">security</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Security</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">more_horiz</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Two-step verification</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">phonelink_setup</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Change number</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">description</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Request account info</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">delete</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Delete my account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
const settingsChats = {
    template:`
        <div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Enter is send</p>
                            <em>Enter key will send your message</em>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Media visibility</p>
                            <em>Show newly downloaded media in your phone's gallery</em>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Font size</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">App Language</p>
                            <em>Phone's language(English)</em>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">wallpaper</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Wallpaper</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">cloud_upload</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Chat backup</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-2">
                    <span class="imagecustom"><i class="material-icons">history</i></span>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-8">
                            <p class="name">Chat history</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
const notifications = {
    template:`
        <div>
            <div class="row roClass">
                <div class="col-sm-10">
                    <p class="name">Conversation tones</p>
                    <em>Play sounds for incoming and outgoing messages</em>
                </div>
                <div class="col-sm-2">
                </div>
            </div>
            <h5>Messages</h5>
            <div class="row roClass">
                <div class="col-sm-10">
                    <p class="name">Notification tone</p>
                    <em>Default ringtone(Opener)</em>
                    <p class="name">Vibrate</p>
                    <em>Default</em>
                    <p class="name">Popup notification</p>
                    <em>No popup</em>
                    <p class="name">Light</p>
                    <em>White</em> 
                </div>
                <div class="col-sm-2">
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-10">
                    <p class="name">Use high priority notifications</p>
                    <em>Show previews of notifications at the top of the screen</em>
                </div>
                <div class="col-sm-2">
                </div>
            </div>
            <h5>Groups</h5>
            <div class="row roClass">
                <div class="col-sm-10">
                    <p class="name">Notification tone</p>
                    <em>Default ringtone(Opener)</em>
                    <p class="name">Vibrate</p>
                    <em>Default</em>
                    <p class="name">Popup notification</p>
                    <em>No popup</em>
                    <p class="name">Light</p>
                    <em>White</em> 
                </div>
                <div class="col-sm-2">
                </div>
            </div>
            <div class="row roClass">
                <div class="col-sm-10">
                    <p class="name">Use high priority notifications</p>
                    <em>Show previews of notifications at the top of the screen</em>
                </div>
                <div class="col-sm-2">
                </div>
            </div>
            <h5>Calls</h5>
            <div class="row roClass">
                <div class="col-sm-10">
                    <p class="name">Ringtone</p>
                    <em>Default ringtone</em>
                    <p class="name">Vibrate</p>
                    <em>Default</em>
                </div>
            </div>
        </div>
    `
}

//account details

const privacy = {
    data() {
        return {
            picked:'',
            picked1:'',
            picked2:'',
            picked3:''
        }
    },
    template:`
        <div>
            <div class="row roClass">
                <div class="col-sm-12 privacy-setting-cus">
                    <p class="name">Who can see my personal info</p>
                    <p>If you don't share your Last Seen, you won't be able to see other people's Last Seen</p>
                </div>
            </div>
            <div classrow="roClass">
                <div class="col-sm-12 privacy-setting-cus">
                    <span data-toggle="modal" data-target="#exampleModal">Last seen</span><br>
                    <span class="selection-privacy">{{picked}}</span>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <input type="radio" id="one" value="Everyone" v-model="picked">
                                    <label for="one">Everyone</label>
                                    <br>
                                    <input type="radio" id="two" value="My contacts" v-model="picked">
                                    <label for="two">My contacts</label>
                                    <br>
                                    <input type="radio" id="two" value="Nobody" v-model="picked">
                                    <label for="three">Nobody</label>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classrow="roClass">
                <div class="col-sm-12 privacy-setting-cus">
                    <span data-toggle="modal" data-target="#exampleModal1">Profile photo</span><br>
                    <span class="selection-privacy">{{picked1}}</span>
                    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <input type="radio" id="one" value="Everyone" v-model="picked1">
                                    <label for="one">Everyone</label>
                                    <br>
                                    <input type="radio" id="two" value="My contacts" v-model="picked1">
                                    <label for="two">My contacts</label>
                                    <br>
                                    <input type="radio" id="two" value="Nobody" v-model="picked1">
                                    <label for="three">Nobody</label>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classrow="roClass">
                <div class="col-sm-12 privacy-setting-cus">
                    <span data-toggle="modal" data-target="#exampleModal2">About</span><br>
                    <span class="selection-privacy">{{picked2}}</span>
                    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <input type="radio" id="one" value="Everyone" v-model="picked2">
                                    <label for="one">Everyone</label>
                                    <br>
                                    <input type="radio" id="two" value="My contacts" v-model="picked2">
                                    <label for="two">My contacts</label>
                                    <br>
                                    <input type="radio" id="two" value="Nobody" v-model="picked2">
                                    <label for="three">Nobody</label>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classrow="roClass">
                <div class="col-sm-12 privacy-setting-cus">
                    <span data-toggle="modal" data-target="#exampleModal3">Status</span><br>
                    <span class="selection-privacy" >{{picked3}}</span>
                    <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <input type="radio" id="one" value="Everyone" v-model="picked3">
                                    <label for="one">Everyone</label>
                                    <br>
                                    <input type="radio" id="two" value="My contacts" v-model="picked3">
                                    <label for="two">My contacts</label>
                                    <br>
                                    <input type="radio" id="two" value="Nobody" v-model="picked3">
                                    <label for="three">Nobody</label>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classrow="roClass">
                <div class="col-sm-12 privacy-setting-cus">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <p>Read receipts</p>
                    <p>dummy comtebt area</p>
                </div>
                
            </div>
        </div>
    `
}
const security = {
    template:`
        <div>
            <div class="row">
                <div class="col-sm-6 offset-3">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <p>Your messages and calls are secured with end-to-end encryption, which means Bingo and third parties can't read or listen to them.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-11">
                    <h6>Show security notifications</h6>
                    <p>turn on this setting to receive notications when a contact's security code has changed. Your message and calls are encrypted regardless of this setting.</p>
                </div>
                <div class="col-sm-1">
                </div>
            </div>
        </div>
    `
}

const HeadersView = {
    template:`
    <section>
        <div class="row header">
            <div class="col-sm-8" >
                <h4>bingo</h4>
            </div>
            <div class="col-sm-4 iconspos" >
                <div class="btn-group dropleft">
                    <span data-toggle="dropdown">
                        <i class="fa fa-ellipsis-v"></i>
                    </span>
                    <div class="dropdown-menu">
                        <router-link to="/newgroup"><button class="dropdown-item" type="button">New group</button></router-link>
                        <router-link to="/newbroadcast"><button class="dropdown-item" type="button">New broadcast</button></router-link>
                        <router-link to="/starredmessages"><button class="dropdown-item" type="button">Starred messages</button></router-link>
                        <router-link to="/settings"><button class="dropdown-item" type="button">Settings</button></router-link>
                    </div>
                </div>
                <router-link to="/search"><i class="fa fa-search"></i></router-link>
            </div>
        </div>
        <div class="row tabmenu">
            <router-link to="/chats" class="textcus" >
                <div class="cus_menu">
                    CHATS
                </div>
            </router-link>
            <router-link to="/status" class="textcus">
                <div class="cus_menu">
                STATUS
                </div>
            </router-link>
            <router-link to="/calls" class="textcus" >
                <div class="cus_menu">
                CALLS
                </div>
            </router-link>
        </div>
    </section>
    `
}

const searchBar = {
    props: ['details'],
    data: function () {
      return {
        dateTime: moment().format('hh:mm a'),
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
        onGobackpage: function() {
            router.go(-1);
        },
    },
    template: `
    <section class="search-bar">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span v-on:click="onGobackpage" class="input-group-text group-text"><i class="fas fa-arrow-left"></i></span>
            </div>
            <input type="text" class="form-control" v-model="search" @change="onTypevalue" placeholder="Search title..">
        </div>
        <div v-if="filteredList.length != 0">
                <h1 :class="{onType: onType}">Chats</h1>
            <div class="row" v-for="opt in filteredList">
                <div class="col-sm-2">
                    <img class="imagecustom" :src="opt.image">
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-12 tex-cht-cus">
                        <p class="utarer">{{dateTime}}</p>
                        <p class="name">{{opt.name}}</p>
                        <p class="utdata">{{opt.message}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr :class="{onType: onType}">
        </div>
        <div v-if="filterList.length != 0">
            <h1 :class="{onType: onType}">Messages</h1>
            <div class="row" :class="{onType: onType}" v-for="opt in filterList">
                <div class="col-sm-2">
                    <img class="imagecustom" :src="opt.image">
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-12 tex-cht-cus">
                            <p class="utarer">{{dateTime}}</p>
                            <p class="name">{{opt.name}}</p>
                            <p class="utdata">{{opt.message}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="(filteredList.length == 0) && (filterList.length == 0)">
            <h1>Not found this '{{ this.search }}'</h1>
        </div>
    </section>
    `
}

// Help
const help = {
    methods: {
        goBack() {
            router.go(-1)
        }
    },
    template: `
    <section class="help">
        <div class="row bg-help">
            <div class="col-2">
                <i class="material-icons" v-on:click="goBack()">arrow_back</i>
            </div>
            <div class="col-10">
                <span>Help</span>
            </div>
        </div>
        <div class="help-body">
            <div class="row">
                <div class="col-sm-2">
                    <i class="material-icons">help_outline</i>
                </div>
                <div class="col-sm-10">
                    FAQ
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2 margin-top">
                    <i class="material-icons">group</i>
                </div>
                <div class="col-sm-10">
                    Contact us<br>
                    <span>Questions? Need help?</span>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">
                    <i class="material-icons">description</i>
                </div>
                <div class="col-sm-10">
                    Terms and Privacy Policy
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">
                    <i class="material-icons">info_outline</i>
                </div>
                <div class="col-sm-10">
                    App info
                </div>
            </div>
        </div>
    </section>
    `
}

// Data and Storage usage
const DataStorage = {
    methods: {
        goBack() {
            router.go(-1)
        }
    },
    template: `
    <section class="datastorage">
        <div class="row bg-datastorage">
            <div class="col-2">
                <i class="material-icons" v-on:click="goBack()">arrow_back</i>
            </div>
            <div class="col-10">
                <span>Data and storage usage</span>
            </div>
        </div>
        <div class="datastorage-body">
            <div class="datastorage-spacing">
                <p class="color">Usage</p>
                <div>
                    <p class="bottom-none">Network usage</p>
                    <p>9.4 GB sent . 42.1 GB received</p>
                </div>
                <div>
                    <p class="bottom-none">Storage usage</p>
                    <p class="border-bottom bottom-none">542.8 MB</p>
                </div>
                <p class="color margin-top">Media auto-download</p>
                <p>Voice messages are always auto-downloaded for the best communication experience</p>
                <div>
                    <p class="bottom-none">When using mobile data</p>
                    <p>No media</p>
                </div>
                <div>
                    <p class="bottom-none">When connected on Wi-Fi</p>
                    <p>No media</p>
                </div>
                <div>
                    <p class="bottom-none">When roaming</p>
                    <p class="border-bottom">No media</p>
                </div>
                <div class="row">
                    <div class="col-10">
                        <p class="color">Call settings</p>
                        <p class="bottom-none">Low data usage</p>
                        <p>Reduce the data used in a call</p>
                    </div>
                    <div class="col-2">
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
}

//Chat page
const chatPage = {
    props:['details'],
    data(){
        return{
            task: [],
            val: [],
            text: {
                name: '',
                date: moment().format('hh:mm a')
            },
            bot: {
                value: '',
                date: moment().format('hh:mm a')
            }
        }
    },
    methods: {
        onSelect: function() {
            this.task.push(this.text)
            console.log(this.task[0].name)
            this.text = { name:'', date:moment()}
            if(this.task[0].name == "hello") {
                this.bot.value = "hi"
                this.val.push(this.bot)
            }
            else {
                this.bot.value = "unable to understand"
                this.val.push(this.bot)
            }
        },
        goBackValue: function(){
            router.go(-1)
        }
    },
    computed:{
        chatPage(){
            var id = this.$route.params.id;
            return this.details.filter(function(c){
                return c.id === id;
            })[0]
        },
    },
    template:`
    <section class="chat-page">
        <div class="row chat-page-header">
            <div class="col-1" style="cursor: pointer">
                <i v-on:click="goBackValue()" class="material-icons" style="color: #ffffff;padding-left:8px !important;">arrow_back</i>
            </div>
            <div class="col-1">
                <img class="imagecustom" :src="chatPage.image">
            </div>
            <div class="col-7">
                <span style="color: #ffffff;">{{chatPage.name}}</span>
            </div>
            <div class="col-1">
                <i class="material-icons" style="color: #ffffff;">videocam</i>
            </div>
            <div class="col-1">
                <i class="material-icons" style="color: #ffffff;">call</i>
            </div>
            <div class="col-1">
                <i class="material-icons" style="color: #ffffff;">more_vert</i>
            </div>
        </div>
        <div class="">
            <div class="msg">
                <div class="bubble altfollow"  v-for="ta in task">
                    <div class="txt">
                        <span class="timestamp">{{ta.date}}</span>
                        <p class="message follow">{{ ta.name }}</p>
                    </div>
                    <div class="bubble-arrow alt"></div>
                </div>
            </div>
            <div class="msg">
                <div class="bubble" v-for="v in val">
                    <div class="txt">
                        <span class="name">Bot<span> ~ bot</span></span>
                        <span class="timestamp">{{ v.date }}</span>
                        <p class="message">{{ v.value }}</p>
                    </div>
                    <div class="bubble-arrow"></div>
                </div>
            </div>
            <div class="textarea">
                <div class="emoticons"></div>
                <textarea class="message" name="message" v-model="text.name" placeholder="Type a message"></textarea>
                <div class="photo">
                    <i class="material-icons">camera_alt</i>
                </div>
                <div class="send-mic">
                    <div class="circle-cont" @click="onSelect()">
                        <i class="material-icons">send</i>
                    </div>
                </div>
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
        { path:"/chats", components: {
            default: HeadersView,
            a: chats
        }},
        { path:"/status", components: {
            default: HeadersView,
            a: status
        }},
        { path:"/calls", components: {
            default: HeadersView,
            a: calls
        }},
        { path:"/search", components: {
            a: searchBar
        }},
        { path:"/statusLink/:id", components: {
            a: statusLink
        }},

        { path:"/chatPage/:id", components: { 
            a:chatPage 
        }},
        { path:"/newgroup", components:{
            a: newgroup
        }},
        { path:"/newbroadcast", components:{
            a: newbroadCast
        }},
        { path:"/starredmessages", components:{
            a: starredmessages
        }},
        { path:"/settings", components: {
            a: settings
        }},
        { path:"/settings/account", components: {
            a: account
        }},
        { path:"/settings/chats", components: {
            a: settingsChats
        }},
        { path:"/settings/notifications", components: {
            a: notifications
        }},
        { path:"/settings/account/privacy", components: {
            a: privacy
        }},
        { path:"/settings/account/security", components:{
            a: security
        }},
        { path:"/settings/data-storage", components:{
            a: DataStorage
        }},
        { path:"/settings/help", components:{
            a: help
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
        }
    },
    template:`
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-4 scl-setup scrollit">
                    <router-view></router-view>
                    <div class="row main_view">
                        <div class="col-sm-12" style="padding:0px;">
                            <router-view name="a" :details="details"></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
}).$mount("#app")