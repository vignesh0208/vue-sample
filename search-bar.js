Vue.component('search-bar', {
    data: function () {
      return {
        contacts: [
            {msg: "UN rejects Saeed's plea for removal fro..", name: 'James', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png'},
            {msg: "Seeking ban on Pak despite ICC snub..", name: 'Fatima', img: 'https://semantic-ui.com/images/avatar2/large/molly.png'},
            {msg: "Hizbul behind Jammu grenade attack: ..", name: 'Xin', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png'},
            {msg: "Celebrate Women's Day", name: 'Timothy', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png'},
            {msg: "Apple CEO 'Tim Apple'", name: 'Ben', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png'},
            {msg: "UN rejects plea for removal fro..", name: 'Jamesro', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png'},
            {msg: "Seeking ban on despite ICC snub..", name: 'Fatimata', img: 'https://semantic-ui.com/images/avatar2/large/molly.png'},
            {msg: "Hizbul behind Jammu attack: ..", name: 'Xinta', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png'},
            {msg: "Celebrate Women Day", name: 'Timothyva', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png'},
            {msg: "Apple 'Tim Apple'", name: 'Benten', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png'}
        ],
        search: '',
        onType: true,
      }
    },
    computed: {
        filteredList() {
            return this.contacts.filter((opt) => {
                return opt.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },
        filterList() {
            return this.contacts.filter((opt) => {
                return opt.msg.toLowerCase().includes(this.search.toLowerCase())
            })
        },
        onTypevalue() {
            if(this.search == ''){
                return this.onType = true
            }
            else {
                return this.onType = false
            }
        }
    },
    methods: {
    },
    template: `
    <section>
        <input style="width: 100%" type="text" v-model="search" @change="onTypevalue" placeholder="Search title.."/>
        <div v-if="filteredList.length != 0">
            <h1 :class="{onType: onType}">Chats</h1>
            <div v-for="opt in filteredList">
                <p>{{ opt.name }}</p>
                <p>{{ opt.msg }}</p>
            </div>
            <hr :class="{onType: onType}">
        </div>
        <div v-if="filterList.length != 0">
            <h1 :class="{onType: onType}">Messages</h1>
            <div :class="{onType: onType}" v-for="opt in filterList">
                <p>{{ opt.name }}</p>
                <p>{{ opt.msg }}</p>
            </div>
        </div>
        <div v-if="(filteredList.length == 0) && (filterList.length == 0)">
            <h1>Not found this '{{ this.search }}'</h1>
        </div>
    </section>
    `
})
new Vue({ el: '#app' })