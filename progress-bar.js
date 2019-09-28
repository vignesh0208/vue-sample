var store = new Vuex.Store({
    state: {
       
    },
})
Vue.component('progress-bar', {
    data: function () {
      return {
        value: 0
      }
    },
    mounted() {
       
    },
    computed: {
        
    },
    methods: {
        onAdd: function() {
            for(i=0; i<100; i++){
                this.value++
                console.log(this.value)
            }
            if(this.value == 100){
                console.log('fill')
            }
        }
    },
    template: `
    <section>
        <div class="progress">
            <div class="progress-bar" :style="{width: value + '%'}">
            {{ value }}%
            </div>
        </div>
        <button type="button" @click="onAdd()">Run</button> 
    </section>
    `
})
new Vue({ el: '#app',
    store })