var store = new Vuex.Store({
    state: {
        task: [],
        val: []
    },
})
Vue.component('country', {
    data: function () {
      return {
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
    computed: {
        task() {
            return this.$store.state.task;
        },
        val() {
            return this.$store.state.val;
        }
    },
    methods: {
        onSelect: function() {
            this.$store.state.task.push(this.text)
            console.log(this.task[0].name)
            this.text = { name:'', date:moment()}
            if(this.task[0].name == "hello") {
                this.bot.value = "hi"
                this.$store.state.val.push(this.bot)
            }
            else {
                this.bot.value = "unable to understand"
                this.$store.state.val.push(this.bot)
            }
        },
    },
    template: `
    <div class="container">
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
                <i class="zmdi zmdi-camera"></i>
            </div>
            <div class="send-mic">
                <div class="circle-cont" @click="onSelect()">
                    <i class="zmdi zmdi-mic"></i>
                </div>
            </div>
        </div>
    </div>
    `
})
new Vue({ el: '#app',
    store })