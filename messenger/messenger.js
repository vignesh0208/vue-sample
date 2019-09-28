var store = new Vuex.Store({
    state: {
        chatInfo: null
    }
})

// Vue.component('resizable-textarea', {
//     methods: {
//       resizeTextarea (event) {
//         event.target.style.height = 'auto'
//         event.target.style.height = (event.target.scrollHeight) + 'px'
//       },
//     },
//     mounted () {
//       this.$nextTick(() => {
//         this.$el.setAttribute('style', 'height:' + (this.$el.scrollHeight) + 'px;overflow-y:hidden;')
//       })
  
//       this.$el.addEventListener('input', this.resizeTextarea)
//     },
//     beforeDestroy () {
//       this.$el.removeEventListener('input', this.resizeTextarea)
//     },
//     render () {
//       return this.$slots.default[0]
//     },
// })

Vue.component('leftNav', {
    data(){
        return {
            selected: undefined,
        }
    },
    mounted () {
        axios
            .get('http://127.0.0.1:5500/messenger/messenger.json')
            .then(response => (this.$store.state.chatInfo = response.data))
    },
    // methods: {
    //     onFunction(y){
    //         if(y == this.$store.state.chatInfo.id){
    //             this.isActive = true
    //         }
    //     }
    // },
    computed: {
        chatInfo() {
            return this.$store.state.chatInfo;
        },
    },
    template: `
        <section class="side-nav">
            <div class="side-header">
                <p>Messenger</p>
            </div>
            <div class="scroll">
                <ul class="nav nav-tabs">
                    <li class="left-side-view" :class="{highlight:chat.id == selected}" @click="selected = chat.id" v-for="chat in chatInfo" :data-target="'#tab' + chat.id" data-toggle="tab" :click="isActive = !isActive">
                        <div class="left-view">
                            <img :src="chat.image" class="chat-img">
                        </div>
                        <div class="side-text">
                            <div class="text-area">
                                <h4 class="name">{{ chat.name }}<span class="time">{{ chat.time }}</span></h4>
                            </div>
                            <span class="msg">Hello World</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    `
})
var mainMsg = {
    computed: {
        chatInfo() {
            return this.$store.state.chatInfo;
        },
    },
    template: `
    <div class="messenger tabbable">
        <left-nav></left-nav>
        <section class="main tab-content">
            <span v-for="chat in chatInfo" class="tab-pane" :id="'tab' + chat.id">
            <div class="main-header">
                <p>{{ chat.name }}</p>
            </div>
            <div class="main-body">
                <div class="msg-area">
                    <div class="body">
                        <div class="bot-msg" v-for="msgInfo in chat.message">
                            <div class="msg-bot">
                                <div class="msg">
                                    {{ msgInfo.recMsg }}
                                </div>
                            </div>
                            <div class="msg-bot" style="margin-left:0px;">
                                <img :src="chat.image" class="chat-img">
                                <div class="msg" style="border-radius: 0px 24px 24px 24px;">
                                    {{ msgInfo.recMsg2 }}
                                </div>
                            </div>
                        </div>
                        <div class="bot-msg" v-for="msgInfo in chat.message">
                            <div class="user-msg">
                                <div class="msg-user">
                                    {{ msgInfo.sendMsg }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <!--<resizable-textarea>-->
                            <textarea rows="1" type="text" class="footer-input" placeholder="Type a message..."></textarea>
                        <!--</resizable-textarea>-->
                        <button class="footer-btn">send</button>
                    </div>
                </div>
                <div class="info-area">
                    <div>
                        <div class="left-side-view">
                            <div class="left-view">
                                <img :src="chat.image" class="chat-img">
                            </div>
                            <div class="side-text">
                                <div class="text-area">
                                    <h4 class="name">{{chat.name}}</h4>
                                </div>
                                <span class="msg">{{ chat.active }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </span>
        </section>
    </div>
    `
}

const router = new VueRouter({
    routes: [
        { path:"/", components: {
            a: mainMsg
        }},
    ]
})

new Vue({ 
    el: '#app',
    store,
    router,
    data(){
        return{
            
        }
    },
    template:`
        <section>
            <router-view name="a"></router-view>
        </section>
    ` 
})