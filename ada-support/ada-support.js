Vue.component('logoImage', {
    template: `
        <section>
            <i class="fas fa-archway"></i>
        </section>
    `
})
Vue.component('selectLanguage', {
    data(){
        return {
            language: [
                { text: 'zh', value: '简体中文' },
                { text: 'zh-tw', value: '繁體中文' },
                { text: 'nl', value: 'Nederlands' },
                { text: 'de', value: 'Deutsch' },
                { text: 'en', value: 'English' },
                { text: 'fr', value: 'Français' },
                { text: 'hi', value: 'हिन्दी' },
                { text: 'in', value: 'bahasa Indonesia' },
                { text: 'it', value: 'Italiano' },
                { text: 'ja', value: '日本語' },
                { text: 'no', value: 'Norsk' },
                { text: 'pt', value: 'Português' },
                { text: 'pa', value: 'ਪੰਜਾਬੀ' },
                { text: 'ru', value: 'русский язык' },
                { text: 'es', value: 'Español' },
                { text: 'tl', value: 'Pilipino' },
                { text: 'tr', value: 'Türkçe' }
            ],
            selected: "en",
        }
    },
    template:  `
        <select class="select" v-model="selected">
            <option v-for="la in language" class="Select-option" :value="la.text">{{ la.value }}</option>
        </select>
    `
})
Vue.component('resizable-textarea', {
    methods: {
      resizeTextarea (event) {
        event.target.style.height = 'auto'
        event.target.style.height = (event.target.scrollHeight) + 'px'
      },
    },
    mounted () {
      this.$nextTick(() => {
        this.$el.setAttribute('style', 'height:' + (this.$el.scrollHeight) + 'px;overflow-y:hidden;')
      })
  
      this.$el.addEventListener('input', this.resizeTextarea)
    },
    beforeDestroy () {
      this.$el.removeEventListener('input', this.resizeTextarea)
    },
    render () {
      return this.$slots.default[0]
    },
})  
Vue.component('buttonView', {
    data() {
        return {
            openNavClass: {
                right: "-400px",
                visibility: "hidden"
            },
            openNavClass1: {
                right: "-400px",
                visibility: "hidden"
            },
            backColor: "white",
        }
    },
    methods: { 
        openNav() {
            this.openNavClass = {
                right: "0px",
                visibility: "visible"
            }
            document.body.style.backgroundColor = "#d7d7d7";
        },
        closeNav() {
            this.openNavClass = {
                right: "-400px",
                visibility: "hidden"
            }
            document.body.style.backgroundColor = "#ffffff";
        },
        openNavbar() {
            this.openNavClass1 = {
                right: "0px",
                visibility: "visible"
            }
        },
        closeNavbar() {
            this.openNavClass1 = {
                right: "-400px",
                visibility: "hidden"
            }
        }

    },
    template: `
        <div>
        <section id="mySidenav" class="sidenav" :style="openNavClass">
            <div class="head">
                <h3><logo-image></logo-image>
                    <span><i class="fas fa-user-cog" v-on:click="openNavbar()"></i><i class="fas fa-times closebtn" v-on:click="closeNav()"></i></span>
                </h3>
            </div>
            <div class="body">
                <div class="bot-msg">
                    <div class="msg-bot">
                        <div class="msg">
                            Happy to share more about our platform!
                        </div>
                    </div>
                    <div class="msg-bot" style="margin-left:0px;">
                        <h4><logo-image></logo-image></h4>
                        <div class="msg">
                            First, what's your name?
                        </div>
                    </div>
                </div>
                <div class="bot-msg">
                    <div class="user-msg">
                        <div class="msg-user">
                            Nevermind
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <resizable-textarea>
                    <textarea rows="1" type="text" class="footer-input" placeholder="Ask me something"></textarea>
                </resizable-textarea>
                <button class="footer-btn"><i class="fas fa-arrow-circle-up"></i></button>
                <p>This bot was built on <a href="https://yekaliva.ai">yekaliva.ai</a></p>
            </div>
        </section>
        <section id="mySidenavOver" class="mySidenavOver" :style="openNavClass1">
            <div class="head">
                <h2 class="font-text"><i class="fas fa-arrow-left closebtn"  v-on:click="closeNavbar()"></i> Setting</h2>
            </div>
            <div class="body" style="height: calc(100vh - 66px); top: 48px;">
                <div class="body-val" style="min-height: calc(100vh - 176px); margin-bottom: 24px;">
                    <div class="general">
                        <h2>General</h2>
                        <div class="language">
                            <label>Language</label>
                            <select-language></select-language>
                        </div>
                    </div>
                    <div class="general">
                        <h2>Chat Transcript</h2>
                        <div class="language">
                            <label>Email Address</label>
                            <div class="general-input">
                                <input class="general-email" placeholder="Enter Email" type="email">
                                <button class="general-send"><i class="fas fa-paper-plane"></i> send</button>
                            </div>
                            <div style="text-align:center"><a href="#" class="general-link">Download Transcript</a></div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="footer-logo">
                        <i class="fas fa-brain"></i>
                    </div>
                    <p>© 2018 Yekaliva.ai</p>
                    <a href="#" class="links">Terms Privacy</a>
                    <a href="#" class="links">Policy</a>
                </div>
            </div>
        </section>
        <section id="buttonView" class="button-view">
            <span style="font-size:30px;" v-on:click="openNav()"><i class="far fa-paper-plane"></i></span>
        </section>
        </div>
    `
})
new Vue({ el: '#app' })