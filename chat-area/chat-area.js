Vue.component('headerView', {
    template: `
        <section class="head">
            <div class="head-value">
                <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"><span>Chat Bot</span>
            </div>
        </section>
    `
})
Vue.component('chatView', {
    template:  `
        <section class="chat-bot">
            <div class="chat-bot-value">
                <div class="user-msg" style="margin-left:0px;">
                    <div class="user-text">
                        Hi
                    </div>
                </div>
                <div class="chat-value" style="margin-left:0px;">
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop">
                    <div class="chat-text">
                        Hi
                    </div>
                </div>
                <div class="user-msg" style="margin-left:0px;">
                    <div class="user-text">
                        How are you?
                    </div>
                </div>
                <div class="chat-value" style="margin-left:0px;">
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop">
                    <div class="chat-text">
                        Am doing good, how about you?
                    </div>
                </div>
                <div class="user-msg" style="margin-left:0px; margin-bottom: 0px;">
                    <div class="user-text">
                        Good
                    </div>
                </div>
                <div class="user-msg" style="margin-left:0px;">
                    <div class="user-text">
                        What is your company about?
                    </div>
                </div>
                <div class="chat-value" style="margin-left:0px;">
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop">
                    <div class="chat-text">
                        We're in the business of making our customers happy.
                    </div>
                </div>
                <div class="user-msg" style="margin-left:0px;">
                    <div class="user-text">
                        What is your company culture?
                    </div>
                </div>
                <div class="chat-value" style="margin-left:0px;">
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop">
                    <div class="chat-text">
                        Our culture is to succeed, but have fun while doing it.
                    </div>
                </div>
                <div class="user-msg" style="margin-left:0px;">
                    <div class="user-text">
                        Thanks for give information.
                    </div>
                </div>
                <div class="chat-value" style="margin-left:0px;">
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop">
                    <div class="chat-text">
                        Thanks.
                    </div>
                </div>
            </div>
        </section>
    `
})
Vue.component('footerView', {
    template: `
        <section class="footer">
            <div class="footer-value">
                <input type="text" placeholder="Text" class="footer-input"><button class="button" type="button">Send</button>
            </div>
        </section>
    `
})
Vue.component('buttonView', {
    data() {
        return {
            height: '',
            width: ''
        }
    },
    methods: { 
        changeHW: function() {
            var x = document.getElementById("chat")
            var y = "px"
            var heightValue = this.height.concat(y)
            var widthValue = this.width.concat(y)
            if((this.height == "") && (this.width == ""))
            {
                alert("Enter height and width")
            }
            else if(this.width < "350"){
                alert("Enter width a bow 350")
            }
            else if(this.height < "150"){
                alert("Enter height a bow 150")
            }
            else {
                x.style.height = heightValue
                x.style.width = widthValue
                this.height = ""
                this.width = ""
            }
        }
    },
    template:`
        <section class="button-view">
            <input type="number" placeholder="height" v-model="height">
            <input type="number" placeholder="width" v-model="width">
            <input type="button" value="update" v-on:click="changeHW()">
        </section>
    `
})
new Vue({ el: '#app' })