var store = new Vuex.Store({
    state: {
       optState: []
    },
})
Vue.component('country', {
    data: function () {
      return {
        task:[],
        value: {
            msg: '',
            moment: moment().format('MMM Do YY, h:mm:ss a'),
            mass: ''
        },
        select: 'Selected',
        search: '',
      }
    },
    mounted() {
        axios
            .get('https://unpkg.com/emoji.json@11.0.1/emoji.json')
            .then(response => (this.$store.state.optState = response.data))
    },
    computed: {
        optState() {
            return this.$store.state.optState;
        },
        filteredList() {
            return this.optState.filter((opt) => {
                return opt.keywords.match(this.search)
            })
        }
    },
    methods: {
        updateHtml: function(e) {
            this.value.msg = e.target.innerHTML
          },
        onAdd: function() {
            this.task.push(this.value)
            this.value = { msg: '', moment: moment().format('MMM Do YY, h:mm:ss a') }
            console.log(this.task)
        },
        onSelect: function(x) {
            // document.getElementById("myText").value = x
            console.log(x)
        }
    },
    template: `
    <section>
        <!--<select v-model="select">
            <option value="Selected">Select</option>
            <option v-for="opt in optState" v-bind:value="opt.no">
            {{ opt.char }}
            </option>
        </select>-->
        <!--<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">Launch demo modal</button>

        <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="fun-select">
                            <input style="width: 100%" type="text" v-model="search" placeholder="Search title.."/>
                            <span @click="onSelect(opt.char)" class="fun" v-for="opt in optState">{{ opt.char }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->

        <!--<div class="fun-select">
            <span @click="onSelect(opt.char)" class="fun" v-for="opt in optState">{{ opt.char }}</span>
        </div>-->
        <button class="open-button" onclick="openForm()">Chat</button>
        <div id="myForm">
            <form class="form-container">
                <h5>Chat<span style="float:right" onclick="closeForm()"><i class="fas fa-minus"></i></span></h5>
                <div class="input-area">
                    <p class="input" v-for="tasks in task">{{tasks.msg}}</p>
                </div>
                <div class="input-group">
                    <button type="button" class="btn-send btn-outline-secondary"  data-toggle="modal" data-target="#exampleModalScrollable"><i class="fas fa-grin errspan"></i></button>
                        <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="fun-select">
                                            <input style="width: 100%" type="text" v-model="search" placeholder="Search title.."/>
                                            <span @click="onSelect(opt.char)" class="fun" v-for="opt in filteredList">{{ opt.char }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div contenteditable @focusout="updateHtml" v-html="value.msg" class="form-control"></div>
                    <div class="input-group-append">
                        <button class="btn-send btn-outline-secondary" @click="onAdd()" type="button"><img src="send.png" class="send-img"></button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    `
})
new Vue({ el: '#app',
    store })