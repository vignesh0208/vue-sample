Vue.component('googleCalender', {
    data() {
      return {
        today: moment(),
        dateValue: moment(),
        days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        arrDays: [],
      }
    },
    methods:{
        addMonth: function () {
            this.dateValue = moment(this.dateValue).add(1, 'month')
        },
        subtractMonth: function () {
            this.dateValue = moment(this.dateValue).subtract(1, 'month')
        }
    },
    computed: {
        daysInMonth: function (month) {
            var count =  daysInMonth(moment().month());
            var days = [];
            for (var i = 1; i < count+1; i++) {
              days.push(moment().month(month).date(i));
            }
            // var days = daysInMonth(moment().month());
            return days;
        },
        daysMonth: function () {
            this.dateValue = moment(this.dateValue).subtract(0, 'month')
            return this.dateValue.daysInMonth()
        },
        dateDisplay: function() {
            return this.dateValue.format('MMMM DD')
        },
        year: function () {
            return this.dateValue.format('MMMM YYYY')
        },
        currentDate: function () {
            return this.dateValue.get('date')
        },
        firstDayOfMonth: function () {
            var firstDay = moment(this.dateValue).subtract((this.currentDate - 1), 'days')
            return firstDay.weekday()
        },
    },
    template: `
    <section class="google-calendar">
        <div class="container">
            <div class="month-text">
                <h4 class="month-year">{{year}}</h4>
                <i class="material-icons month-year" v-on:click="subtractMonth()">navigate_before</i>
                <i class="material-icons month-year" v-on:click="addMonth()">navigate_next</i>
            </div>
            <div class="day-value">
                <div class="day">
                    <span class="days-letter" v-for="day in days">{{ day }}</span>
                </div>
                <div class="date-group">
                    <ul class="date-value">
                        <li style="float:left !important" v-for="blank in firstDayOfMonth">&nbsp;</li>
                        <li style="float:left !important" v-for="d in daysMonth">
                            {{ d }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>`
})
Vue.component('googleCal', {
    data() {
      return {
        today: moment(),
        dateValue: moment(),
        days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      }
    },
    methods:{
        addMonth: function () {
            this.dateValue = moment(this.dateValue).add(1, 'month')
        },
        subtractMonth: function () {
            this.dateValue = moment(this.dateValue).subtract(1, 'month')
        }
    },
    computed: {
        daysMonth: function () {
            this.dateValue = moment(this.dateValue).subtract(0, 'month')
            return this.dateValue.daysInMonth()
        },
        year: function () {
            return this.dateValue.format('MMMM YYYY')
        },
        currentDate: function () {
            return this.dateValue.get('date')
        },
        firstDayOfMonth: function () {
            var firstDay = moment(this.dateValue).subtract((this.currentDate - 1), 'days')
            return firstDay.weekday()
        },
    },
    template: `
    <section class="google-cal">
        <div class="container-fluid">
            <div class="day-value">
                <div class="day" v-for="day in days">
                    <span class="days-letter">{{ day }}</span>
                </div>
            </div>
            <div class="date-group">
                <div class="date-function">
                    <div class="inner-date" v-for="blank in firstDayOfMonth">
                        <div class="inner">
                            <div class="date-value">
                                <h2>&nbsp;</h2>
                            </div>
                        </div>
                    </div>
                    <div class="inner-date" v-for="date in daysMonth">
                        <div class="inner">
                            <div class="date-value">
                                <h2>{{ date }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
})

new Vue({ el: '#app' })