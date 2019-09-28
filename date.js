Vue.component('date-counter', {
    data() {
      return {
        today: moment(),
        dateContext: moment(),
        dateContext1: moment(),
        dateContext2: moment(),
        days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        styleObject:{
            float:'left',
            background: '#5ecc67',
            height: '39px',
            width: '39px',
            margin: '0px 5px 5px 0px',
            textAlign: 'center',
            padding: '8px',
        },
        apiDate:{
            
        },
        apiDateMargin:{
            // marginRight: '65%',
        },
        count: 0,
        remove: true,
        tasks: [],
        newUser: {
            tasksvalue: '',
            date: 'select',
         },
         data: [],
         dataValue: '',
         d:{},
         values: [],
         obj: '',
        //  holidays: null,
      }
    },
    // mounted() {
    //     axios
    //         .get('http://127.0.0.1:5500/date.json')
    //         .then(response => (this.holidays = response.data))
    // },
    methods:{
        onAdd: function(){
            if(this.newUser.tasksvalue == ''){
                alert('Enter value')
            }
            else if(this.newUser.date == 'select'){
                alert('Select date')
            }
            // else if(this.newUser.selected == this.dateContext.format('DD')){
            //     alert('error')
            //     this.tasks.push(this.newUser)
            //     this.newUser = { selected: 'select', }
            // }
            else {
                this.d = this.dateContext.toObject()
                this.obj = Object.assign({}, this.d, this.newUser)
                this.tasks.push(this.obj)
                this.newUser = { date: 'select', }
                // this.data.push(this.dateContext.format('DD'))
                console.log(this.d)
            }
        },
        addCal: function(){},
        addMonth: function () {
            count = this.count--
            if(this.count == 0){
                this.remove = true
                this.dateContext = moment(this.dateContext).add(1, 'month')
                this.dateContext1 = moment(this.dateContext1).add(2, 'month')
                this.dateContext2 = moment(this.dateContext1).add(0, 'month')
            }
            else{
                this.dateContext = moment(this.dateContext).add(1, 'month')
                this.dateContext1 = moment(this.dateContext1).add(2, 'month')
                this.dateContext2 = moment(this.dateContext1).add(0, 'month')
                this.remove = false
            }
        },
        subtractMonth: function () {
            count = this.count++
            this.dateContext = moment(this.dateContext).subtract(1, 'month')
            this.dateContext1 = moment(this.dateContext1).subtract(0, 'month')
            this.dateContext2 = moment(this.dateContext2).subtract(-1, 'month')
            this.remove = false
        }
    },
    computed: {
        daysMonth2: function () {
            this.dateContext2 = moment(this.dateContext2).subtract(2, 'month')
            return this.dateContext2.daysInMonth()
        },
        daysMonth1: function () {
            this.dateContext1 = moment(this.dateContext1).subtract(1, 'month')
            return this.dateContext1.daysInMonth()
        },
        daysMonth: function () {
            // this.dataValue = moment(this.dateContext).format('DD')
            this.dateContext = moment(this.dataContext).subtract(0, 'month')
            return this.dateContext.daysInMonth()
        },
        year2: function () {
            return this.dateContext2.format('MMMM YYYY')
        },
        year1: function () {
            return this.dateContext1.format('MMMM YYYY')
        },
        year: function () {
            return this.dateContext.format('MMMM YYYY')
        },
        currentDate: function () {
            return this.dateContext.get('date')
        },
        firstDayOfMonth: function () {
            var firstDay = moment(this.dateContext).subtract((this.currentDate - 1), 'days')
            return firstDay.weekday()
        },
        currentDate1: function () {
            return this.dateContext1.get('date')
        },
        firstDayOfMonth1: function () {
            var firstDay = moment(this.dateContext1).subtract((this.currentDate1 - 1), 'days')
            return firstDay.weekday()
        },
        currentDate2: function () {
            return this.dateContext.get('date')
        },
        firstDayOfMonth2: function () {
            var firstDay = moment(this.dateContext2).subtract((this.currentDate2 - 1), 'days')
            return firstDay.weekday()
        },
        // initialDate: function () {
        //     return this.today.get('date')
        // },
        // initialMonth: function () {
        //     return this.today.format('MMMM')
        // },
        // initialYear: function () {
        //     return this.today.format('Y')
        // }
    },
    template: `
    <!--<section v-bind:style="apiDate">
        <div v-bind:style="apiDateMargin">
            <div v-bind:style="styleObject">
            </div>
            <div v-bind:style="styleObject">
            </div>
            <div v-bind:style="styleObject">
            </div>
            <div v-bind:style="styleObject">
            </div>
            <div v-bind:style="styleObject">
            </div>
            <div v-bind:style="styleObject">
            </div>
            <div v-bind:style="styleObject">
            </div>
            <div v-bind:style="styleObject">
            </div>
        </div>
    </section>-->
    <div class="container">
        <div class="list-group list-group-horizontal">
            <i class="fa fa-fw fa-chevron-left list-group-item" @click="subtractMonth()"></i>
            <h4 class="list-group-item">{{year2 + " to " + year}}</h4>
            <i class="fa fa-fw fa-chevron-right list-group-item" v-bind:class="{remove: remove}" @click="addMonth()"></i>
        </div>
        <div class="row">
            <div class="col-4">
                <h4>{{year2}}</h4>
                <ul>
                    <li class="v1" v-for="day in days">{{ day }}</li>
                </ul>
                <ul>
                    <li v-for="blank in firstDayOfMonth2" class="v2">&nbsp;</li>
                    <li v-for="date in daysMonth2">
                        <div v-bind:style="styleObject">
                            {{ date }}
                            <!--<div v-for="day in holidays">
                                <span v-if="date == day.date">
                                    {{ day.holiday }}
                                </span>
                            </div>-->
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-4">
                <h4>{{year1}}</h4>
                <ul>
                    <li class="v1" v-for="day in days">{{ day }}</li>
                </ul>
                <ul class="dates">
                    <li v-for="blank in firstDayOfMonth1" class="v2">&nbsp;</li>
                    <li v-for="date in daysMonth1">
                        <div v-bind:style="styleObject">
                            {{ date }}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-4">
                <h4>{{year}}</h4>
                <ul>
                    <li class="v1" v-for="day in days">{{ day }}</li>
                </ul>
                <ul class="dates">
                    <li v-for="blank in firstDayOfMonth" class="v2">&nbsp;</li>
                    <li v-for="date in daysMonth" @click="addCal()">
                        <div v-bind:style="styleObject">
                            <span v-for="task in tasks">{{ task.tasksvalue }}</span>
                            {{ date }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <select class="form-control" v-model="newUser.date">
                <option value="select">Select</option>
                <option v-for="option in daysMonth" v-bind:value="option">
                    {{ option }}
                </option>
            </select>
            <input type="text" v-model="newUser.tasksvalue" class="form-control mb-4" placeholder="Name" />
            <input class="btn btn-info btn-block my-4" type="submit" @click="onAdd()" value="Update"/>
        </div>
    </div>`
})
Vue.component('api-price', {
    data() {
      return {
        styleObject:{
            flex: '0 0 33.333333%',
            maxWidth: '33.333333%',
            position: 'relative',
            width: '100%',
            minHeight: '1px',
            paddingRight: '15px',
            paddingLeft: '15px'
        },
        apiDate:{
            display: 'flex',
            //margin: ' 0px -15px',
            flexWrap: 'wrap',
            padding: '8px'
        },
        fontColor:{
            padding: '4px',
            textAlign: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#dcecfd',
            margin: '16px 0px',
        },
        heading3:{
            fontWeight: '400',
        },
        linkTag:{
            color: '#a2abdd',
            textDecoration: 'none',
            fontSize: '14px',
        },
        holiday: null,
      }
    },
    methods:{

    },
    template: `
    <section style="">
        <div v-bind:style="apiDate">
            <div v-bind:style="styleObject">
                <div v-bind:style="fontColor">
                    <i class="fas fa-user-alt"></i>
                </div>
                <h4 v-bind:style="heading3"><sup>$</sup> 18,349</h4>
                <a v-bind:style="linkTag" href="#">View more</a>
            </div>
            <div v-bind:style="styleObject">
                <div v-bind:style="fontColor">
                        <i class="fas fa-user-alt"></i>
                    </div>
                    <h4 v-bind:style="heading3"><sup>$</sup> 18,349</h4>
                    <a v-bind:style="linkTag" href="#">View more</a>
                </div>
            <div v-bind:style="styleObject">
                <div v-bind:style="fontColor">
                    <i class="fas fa-star"></i>
                </div>
                <h4 v-bind:style="heading3"><sup>$</sup> 34,169</h4>
                <a v-bind:style="linkTag" href="#">View more</a>
            </div>
        </div>
    </section>`
})
new Vue({ el: '#demo' })