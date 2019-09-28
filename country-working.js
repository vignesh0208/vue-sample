var store = new Vuex.Store({
    state: {
        optState: null,
        optDistrict: null,
    },
})
Vue.component('country', {
    data: function () {
      return {
        index: '',
        option: '',
        state: 'Select State',
        option1:'',
        dist: 'Select Districts',
      }
    },
    computed: {
        optState() {
            return this.$store.state.optState;
        },
        optDistrict() {
            return this.$store.state.optDistrict;
        },
    },
    mounted() {
        axios
            .get('http://127.0.0.1:5500/india.json')
            .then(response => (this.$store.state.optState = response.data.states))
    },
    methods: {
        onSelect: function() {
            if (this.state == "Select State") {
                console.log(this.state)
                console.log(this.optState[this.state].state)
                console.log(this.optState[0].state)
            }
            else {
                this.$store.state.optDistrict = this.optState[this.state].districts
                var dst = this.optState[this.state].districts
                console.log(dst)
                console.log(this.state)
                console.log(this.optState[this.state].state)
                console.log(this.optState[0].state)
            }
        },
    },
    template: `
    <section>
        <select class="form-control" @change="onSelect()" v-model="state">
            <option vlaue="Select State">Select State</option>
            <option v-for="(option, index) in optState" v-bind:value="index">
                {{ option.state }}
            </option>
        </select>
        <select class="form-control" v-model="dist">
            <option vlaue="Select Districts">Select Districts</option>
            <option v-for="option1 in optDistrict" v-bind:value="option1">
                {{ option1 }}
            </option>
        </select>
    </section>
    `
})
new Vue({ el: '#app',
    store })