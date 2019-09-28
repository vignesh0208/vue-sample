var store = new Vuex.Store({
    state: {
        optState: null,
        optDist: null,
        optDistrict: null,
        optCity: null,
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
        option2: '',
        city: 'Select City',
        value: ''
      }
    },
    computed: {
        optState() {
            return this.$store.state.optState;
        },
        optDist() {
            return this.$store.state.optDist;
        },
        optDistrict() {
            return this.$store.state.optDistrict;
        },
        optCity() {
            return this.$store.state.optCity;
        }
    },
    mounted() {
        axios
            .get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json')
            .then(response => (this.$store.state.optState = response.data))
    },
    methods: {
        onSelect: function() {
            if (this.state == "Select State") {
                console.log("Select State")
            }
            else {
                this.$store.state.optDistrict = this.optState[this.state].states
                this.$store.state.optDist = Object.getOwnPropertyNames(this.$store.state.optDistrict)
                if(this.$store.state.optDist.lenght > 0){
                    this.$store.state.optDist.remove(this.$store.state.optDist.lenght-1)
                }
            }
        },
        onSelected: function() {
            if (this.dist == "Select Districts") {
                console.log("Select Districts")
            }
            else {
                var dst = this.$store.state.optDist[this.dist]
                this.$store.state.optCity = this.$store.state.optDistrict[dst]
            }
        }
    },
    template: `
    <section>
        <select class="form-control" @change="onSelect()" v-model="state">
            <option vlaue="Select State">Select State</option>
            <option v-for="(option, index) in optState" v-bind:value="index">
                {{ option.name }}
            </option>
        </select>
        <select class="form-control" @change="onSelected()" v-model="dist">
            <option vlaue="Select Districts">Select Districts</option>
            <option v-for="(option1, index) in optDist" v-bind:value="index">
                {{ option1 }}
            </option>
        </select>
        <select class="form-control" v-model="city">
            <option vlaue="Select City">Select City</option>
            <option v-for="(option2, index) in optCity" v-bind:value="index">
                {{ option2 }}
            </option>
        </select>
        <!-- <div>
            <p>{{state}}, {{dist}}, {{city}}</p>
        </div> -->
    </section>
    `
})
new Vue({ el: '#app',
    store })