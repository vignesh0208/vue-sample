const store = new Vuex.Store({
    state: {
        contacts: [
            {id: 1, name: 'John Doe', phone: '111-222-3333'},
            {id: 2, name: 'Jane Doe', phone: '111-222-4444'},
            {id: 3, name: 'Timmy Doe', phone: '111-222-5555'},
        ]
    }
})

const Contacts = {
    computed: {
        contacts() {
            return this.$store.state.contacts;
        }
    },
    template: ` 
    <div>
        <h2>Contacts</h2>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Phone</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" :key="contact.id">
                    <td><router-link :to="'/contacts/' + contact.id">{{ contact.name }}</router-link></td>
                    <td>{{ contact.phone }}</td>
                </tr>
            </tbody>
        </table>
    </div>`
}

const Contact = {
    computed: {
        contact() {
            const id = parseInt(this.$route.params.id);
            return this.$store.state.contacts.filter(function(c) {
                return c.id === id;
            })[0];
        }  
    },
    template: `
    <div>
        <h2>Contact</h2>
        <p>{{ contact.name }}</p>
        <p>{{ contact.phone }}</p>
        <p><router-link to="/">Back</router-link></p>
    </div>`
}

const routes = [
    {path: '/', component: Contacts},
    {path: '/contacts/:id', component: Contact }
]

const router = new VueRouter({
    routes
})

new Vue({
    store,
    router
}).$mount('#app');