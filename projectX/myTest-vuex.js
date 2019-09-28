var store = new Vuex.Store({
    state: {
        comment: [{name:'message'}, {name:'message1'}, {name:'message2'}]
    },
    // mutations: {
    //     updateMessage (state, name) {
    //         state.comment.name = name
    //     }
    // }
})

Vue.component('carddetails', {
    data() {
        return {
            
        }
    },
    computed: {
        comment: {
            get(){
                return this.$store.state.comment
            },
            set(value){
                this.$store.commit('updateMessage', value)
            }
        }
    },
    methods:{
        // updateMessage(e) {
        //     this.$store.commit('updateMessage', e.target.value)
        // }
    },
    template: `
    <section>
        <div v-for="(cmd, index) in comment">
            <textarea type="text" v-model="cmd.name"></textarea>
            <p>{{ cmd.name }}</p>
        </div>
    </section>
    `,
})

new Vue({
    el:"#app",
    store,
})