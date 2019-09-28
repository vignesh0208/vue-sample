const store = new Vuex.Store({
    state: {
        contacts: [
            {id: "UN rejects Saeed's plea for removal fro..", name: 'James', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
                {id: "Seeking ban on Pak despite ICC snub..", name: 'Fatima', img: 'https://semantic-ui.com/images/avatar2/large/molly.png',},
                {id: "Hizbul behind Jammu grenade attack: ..", name: 'Xin', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',},
                {id: "Celebrate Women's Day", name: 'Timothy', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
                {id: "Apple CEO 'Tim Apple'", name: 'Ben', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',},
                {id: "UN rejects  plea for removal fro..", name: 'Jamesro', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
                {id: "Seeking ban on despite ICC snub..", name: 'Fatimata', img: 'https://semantic-ui.com/images/avatar2/large/molly.png',},
                {id: "Hizbul behind Jammu attack: ..", name: 'Xinta', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',},
                {id: "Celebrate Women Day", name: 'Timothyva', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
                {id: "Apple 'Tim Apple'", name: 'Benten', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',}
        ],
        details:[
            {id:"1",day:"6 March",zone: "pm", name: 'James', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
            {id:"2",day:"4 March",zone: "am", name: 'Fatima', img: 'https://semantic-ui.com/images/avatar2/large/molly.png',},
            {id:"3",day:"1 March",zone: "am", name: 'Xin', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',},
            {id:"4",day:"27 Feburary",zone: "pm", name: 'Timothy', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
            {id:"5",day:"16 Feburary",zone: "am", name: 'Ben', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',},
            {id:"6",day:"6 Feburary",zone: "pm", name: 'James', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
            {id:"7",day:"4 Feburary",zone: "am", name: 'Fatima', img: 'https://semantic-ui.com/images/avatar2/large/molly.png',},
            {id:"8",day:"1 january",zone: "am", name: 'Xin', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',},
            {id:"9",day:"27 january",zone: "pm", name: 'Timothy', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
            {id:"10",day:"16 january",zone: "am", name: 'Ben', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',}
        ],
        
        
    }
});

const Contacts = {

    data() {
        return{
        showModal: false
        }
      },
    computed: {
        contacts() {
            return this.$store.state.contacts;
        }
    },
    methods:{
        
    },
    
    template: ` 
        <section>
            <div class="row roClass" v-for= "contact in contacts">
                <div class="col-sm-3">
                <img v-bind:src="contact.img" @click="showModal = true" class="imagecustom">
                </div>
                <div class="col-sm-9 textalign">
                <b><p><router-link :to="'/contacts/' + contact.id" >{{ contact.name }}</router-link></p></b>
                    <p><i class='fas fa-check'></i>  {{contact.id}}</p>
                </div>
                
            </div>
            
            <modal v-if="showModal" @close="showModal = false">
            
            </modal>
            <p class="bottom_phone_icon">
            <router-link class="tab menu" to = "/contactdetails"><i class="fas fa-comment"></i></router-link>
            
            </p>
            
        </section>
        
    `
};

const Sticky = {
    computed: {
        contacts() {
            return this.$store.state.contacts;
        }
    },
    
    template: `
        
<section>
   <div class="row header4" style="background:#006253;"  >
      <!-- header row start -->
      <div class="col-sm-8" >
         <h4 style="color: #ffffff;">
            <router-link to="/chats"><i class="fa fa-arrow-left"></router-link>
            selectcontacts <p class="countingcontacts">{{ contacts.length }} contacts</p>
         </h4>
      </div>
      <div class="col-sm-4 iconspos2" >
         <i class="fa fa-ellipsis-v"></i>
         <i class="fa fa-search"></i>
      </div>
   </div>
   <div class="row roClass" v-for= "contact in contacts">
      <div class="col-sm-3">
         <img v-bind:src="contact.img" class="imagecustom">
      </div>
      <div class="col-sm-9 textalign">
         <b>
            <p>
               <router-link :to="'/contacts/' + contact.id" >{{ contact.name }}</router-link>
            </p>
         </b>
         <p>{{contact.id}}</p>
      </div>
   </div>
</section> 
        
        
    `
};

const Contact = {
    data(){
       return{
            textchat:'',
            messages:[]
        }
    },
    computed: {
        contact() {
            const id = this.$route.params.id;
            return this.$store.state.contacts.filter(function(c) {
                return c.id === id;
            })[0];
            
        }, 
        
    },
    methods:{
        addlivechat(val){
            this.messages.push(val)
            this.textchat=''
            console.log(this.messages)
        }
        

    },
    
    template: `
    <div class="row margo">
    
    <div class="row chatheader">
       <div class="col-sm-6 chatcol1" >
          <p><router-link to="/chats"><i class="fa fa-arrow-left"></i><img v-bind:src="contact.img" class="imagecustom">
          <span class="nameschat">{{ contact.name }}</span>
          <router-link> </p>
       </div>
       <div class="col-sm-6 chatcol2">
          <i class="fa fa-ellipsis-v"></i>
          <i class="fas fa-phone" ></i>
          <i class="fa fa-video-camera"></i>
       </div>
    </div>
    <div class="row chatarea">
       <div class="col-sm-12 chatarea">
       
          <br><br><br>
          <p>hi how are you</p>
          <br><br><br><br><br>
          <p>hi how are you</p>
          
          <br><br><br><br>
          <p>hi how are you</p>
          <br><br><br><br><br><br>
          <br> <ul style="list-style:none;">
          <li v-for="message in messages">{{message}}</li>
         </ul>
          <br><br><br><br><br><br>
          <br><br><br><br><br>
          <p>hi how are you</p>
          <br><br><br><br><br><br>
          <p>hi how are you</p>
          <br><br><br><br><br>
          
          <div class="row mar">

             <div class="col-sm-2 chat"><i class="fa fa-smile-o"></i></div>

             <div class="col-sm-4 chat">
             </i><input type="text" class="form-control" placeholder="Text Message" v-model="textchat"/></div>

             <div class="col-sm-2 chat1"><i class="fa fa-camera"></i></div>

             <div class="col-sm-2 chat2"><i class="fa fa-paperclip"></i></div>

             <div class="col-sm-2"><i class="fas fa-location-arrow" v-on:click="addlivechat(textchat)"></i></div>
          </div>
       </div>
    </div>
    
</div>`
}

const status = {
    data(){
        return{
            details:[
                {day:"Today",zone: "pm", name: 'James', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
                {day:"Today",zone: "am", name: 'Fatima', img: 'https://semantic-ui.com/images/avatar2/large/molly.png',},
                {day:"Today",zone: "am", name: 'Xin', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',},
                {day:"Yesterday",zone: "pm", name: 'Timothy', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
                {day:"Yesterday",zone: "am", name: 'Ben', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',},
                {day:"Yesterday",zone: "pm", name: 'James', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
                {day:"Yesterday",zone: "am", name: 'Fatima', img: 'https://semantic-ui.com/images/avatar2/large/molly.png',},
                {day:"Yesterday",zone: "am", name: 'Xin', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',},
                {day:"Yesterday",zone: "pm", name: 'Timothy', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',},
                {day:"Yesterday",zone: "am", name: 'Ben', img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',}
            ]
        }
    },
    methods:{
        randomNO: function(){
            return Math.floor(Math.random()* (10 - 1 + 1)) +1;
        }
    },
    template: `
        <section>
            <div class="row roClass" v-for= "detail in details">
                <div class="col-sm-3">
                    <img v-bind:src="detail.img" class="imagecustom">
                </div>
                <div class="col-sm-9 textalign">
                <b> <p>{{detail.name}}</p></b>
                    <p>{{detail.day}}, {{randomNO()}} {{detail.zone}}</p>
                </div>
            </div>
            <p class="bottom_phone_icon2">
            <i class="fas fa-pen"></i>
            </p>
            
            <p class="bottom_phone_icon1">
            <i class="fa fa-camera"></i>
            </p>
        </section>
    `
}

const calls = {
    computed: {
        details() {
            return this.$store.state.details;
        }
    },
    methods:{
        randomNO: function(){
            return Math.floor(Math.random()* (10 - 1 + 1)) +1
        }
    },
    template: `
        <section>
            <div class="row roClass" v-for= "detail in details">
                <div class="col-sm-3">
                    <img v-bind:src="detail.img" class="imagecustom">
                </div>
                <div class="col-sm-9 textalign">
                <p><i class="fas fa-phone"></i><p>
                <b><p><router-link :to="'/details/' + detail.id" >{{ detail.name }}</router-link></p></b>
                    <p>{{detail.day}}, {{randomNO()}} {{detail.zone}}</p>
                    
                </div>
            </div>
            <p class="bottom_phone_icon">
            <router-link class="tab menu" to = "/allcontacts"><i class="fas fa-phone"></i></router-link>
            </p>
        </section>
    `
}

const Listcontactincalls = {
    computed: {
        details() {
            return this.$store.state.details;
        }
    },
    methods:{
        randomNO: function(){
            return Math.floor(Math.random()* (10 - 1 + 1)) +1
        }
    },
    
    template:`
    
    
    <section>
   <div class="row header4" style="background:#006253;"  >
      <!-- header row start -->
      <div class="col-sm-8 addment" >
         <h4 style="color: #ffffff;">
            <router-link to="/calls"><i class="fa fa-arrow-left"></router-link>
            selectcontacts <p class="countingcontacts">{{ details.length }} contacts</p>
         </h4>
         
      </div>
      <div class="col-sm-4 iconspos2" >
         <i class="fa fa-ellipsis-v"></i>
         <i class="fa fa-search"></i>
      </div>
   </div>

   <div class="row roClass" v-for= "detail in details">
                <div class="col-sm-3">
                    <img v-bind:src="detail.img" class="imagecustom">
                </div>
                <div class="col-sm-9 textalign1">
                <p><i class="fa fa-video-camera"></i></p>
                <p><i class="fas fa-phone"></i></p>
                    <b><p>{{detail.name}}</p></b>
                    <p>{{detail.day}}, {{randomNO()}} {{detail.zone}}</p>
                    
                </div>
            </div>
   
</section> 
    
    `

}

const onclkcalllist = {
    computed: {
        detail() {
            var id = this.$route.params.id;
            return this.$store.state.details.filter(function(c) {
                return c.id === id;
            })[0];
        }  
    },
    template: `
    <div class="row margo">
    
    <div class="row chatheader">
       <div class="col-sm-6 chatcol1" >
          <p><router-link to="/calls"><i class="fa fa-arrow-left"></i>
          <span class="nameschat">Call Info</span>
          <router-link> </p>
       </div>
       <div class="col-sm-6 chatcol2">
          <i class="fa fa-ellipsis-v"></i>
          <i class="fas fa-comment"></i>
       </div>
    </div>

    <div class="row" style="padding-top: 10px;">
       <div class="col-sm-6" >
          <p><img v-bind:src="detail.img" class="imagecustom">  {{ detail.name }}</p>
       </div>
       <div class="col-sm-6 chatcol3">
       <p><i class="fa fa-video-camera"></i></p>
       <p><i class="fas fa-phone"></i></p>
       </div>
    </div>
    
    
</div>`
}

const routes = [
    {path: '/chats', component: Contacts},
    {path: '/status', component: status},
    {path: '/calls', component: calls},
    {path: '/contacts/:id', component: Contact },
    {path: '/contactdetails', component: Sticky },
    {path: '/allcontacts', component: Listcontactincalls},
    {path: '/details/:id', component: onclkcalllist },
    //{path: '/contacts/:name', component: model }
    

    
    
]

const router = new VueRouter({
    routes
  })

new Vue({
    store,
    router,
    
    
}).$mount('#app')



Vue.component('modal', {

    
     template: `
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
       
          <div class="modal-header">
          </div>

          <div class="modal-body">
          </div>

          <div class="modal-footer">
          <button class="modal-default-button" @click="$emit('close')">close</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
    `
  })
  

  







