const _daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const _weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const _weekdayLabels1= ['SUN','MON', 'TUE', 'WED', 'THU','FRI','SAT']
const _monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
const _today = new Date();
const _todayComps = {
  year: _today.getFullYear(),
  month: _today.getMonth() + 1,
  day: _today.getDate(),
};

Vue.component('calendar', { 
    template: `
        <div class='calendar'>
            <div class='header1'>
                <span class='title' @click='moveThisMonth'>
                    {{ header.label }}
                </span>
                <i class="material-icons arrow" @click='movePreviousMonth'>chevron_left</i>
                <i class="material-icons arrow" @click='moveNextMonth'>chevron_right</i>
            </div>
            <div class='weekdays'>
                <div class='weekday' v-for='weekday in weekdays'>
                    {{ weekday.label_3 }}
                </div>
            </div>
            <div class='week' v-for='week in weeks'>
                <div class='day' :class='{ today: day.isToday, "not-in-month": !day.inMonth }'v-for='day in week'>
                    {{ day[dayKey] }}
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            month: _todayComps.month,
            year: _todayComps.year,
            selectedDisplayOption: _displayOptions[1].value,
        };
    },
    props: {
  	    dayKey: { type: String, default: 'label' },
    },
    computed: {
        monthIndex() {
            return this.month - 1;
        },
        isLeapYear() {
			return (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0;
        },
        previousMonthComps() {
    	    if (this.month === 1) return {
      	        days: _daysInMonths[11],
      	        month: 12,
                year: this.year - 1,
            }
            return {
      	        days: (this.month === 3 && this.isLeapYear) ? 29 : _daysInMonths[this.month - 2],
      	        month: this.month - 1,
                year: this.year,
            };
        },
        nextMonthComps() {
    	    if (this.month === 12) return {
      	        days: _daysInMonths[0],
      	        month: 1,
                year: this.year + 1,
            };
            return {
      	        days: (this.month === 2 && this.isLeapYear) ? 29 : _daysInMonths[this.month],
      	        month: this.month + 1,
                year: this.year,
            };
        },
        months() {
            return _monthLabels.map((ml, i) => ({
                label: ml,
                label_1: ml.substring(0, 1),
                label_2: ml.substring(0, 2),
                label_3: ml.substring(0, 3),
                number: i + 1,
            }));
        },
        weekdays() {
            return _weekdayLabels.map((wl, i) => ({
                label: wl,
                label_1: wl.substring(0, 1),
                label_2: wl.substring(0, 2),
                label_3: wl.substring(0, 3),
                number: i + 1,
            }));
        },
        header() {
            const month = this.months[this.monthIndex];
            return {
                month: month,
                year: this.year.toString(),
                shortYear: this.year.toString().substring(2, 4),
                label: month.label + ' ' + this.year,
            };
        },
        firstWeekdayInMonth() {
            return new Date(this.year, this.monthIndex, 1).getDay() + 1;
        },
        daysInMonth() {
            if (this.month === 2 && this.isLeapYear) return 29;
            return _daysInMonths[this.monthIndex];
        },
        weeks() {
            const weeks = [];
            let previousMonth = true, thisMonth = false, nextMonth = false;
            let day = this.previousMonthComps.days - this.firstWeekdayInMonth + 2;
            let month = this.previousMonthComps.month;
            let year = this.previousMonthComps.year;
            for (let w = 1; w <= 6 && !nextMonth; w++) {
                const week = [];
            for (let d = 1; d <= 7; d++) {
                if (previousMonth && d >= this.firstWeekdayInMonth) {
                    day = 1;
                    month = this.month;
                    year = this.year;
                    previousMonth = false;
                    thisMonth = true;
				}
                week.push ({
                    label: (day && thisMonth) ? day.toString() : '',
                    day,
                    weekday: d,
                    week: w,
                    month,
                    year,
                    date: new Date(year, month - 1, day),
                    beforeMonth: previousMonth,
                    afterMonth: nextMonth,
                    inMonth: thisMonth,
                    isToday: day === _todayComps.day && month === _todayComps.month && year === _todayComps.year,
                    isFirstDay: thisMonth && day === 1,
                    isLastDay: thisMonth && day === this.daysInMonth,
                });
                if (thisMonth && day >= this.daysInMonth) {
                    thisMonth = false;
                    nextMonth = true;
                    day = 1;
                    month = this.nextMonthComps.month;
                    year = this.nextMonthComps.year;
                } 
                else {
          	        day++;
                }
            }
            weeks.push(week);
            }
                return weeks;
        },
    },
    methods: {
        moveThisMonth() {
            this.month = _todayComps.month;
            this.year = _todayComps.year;
        },
        moveNextMonth() {
            const { month, year } = this.nextMonthComps;
            this.month = month;
            this.year = year;
        },
        movePreviousMonth() {
            const { month, year } = this.previousMonthComps;
            this.month = month;
            this.year = year;
        },
        moveNextYear() {
            this.year++;
        },
        movePreviousYear() {
            this.year--;
        },
    },
});

const _displayOptions = [
  { id: 'label', value: 'label', label: 'Label' },
  { id: 'number', value: 'day', label: 'Day' },
  { id: 'weekday', value: 'weekday', label: 'Weekday' },
  { id: 'week', value: 'week', label: 'Week' },
  { id: 'month', value: 'month', label: 'Month' },
  { id: 'year', value: 'year', label: 'Year' },
  { id: 'beforeMonth', value: 'beforeMonth', label: 'Before Month' },
  { id: 'afterMonth', value: 'afterMonth', label: 'After Month' },
  { id: 'inMonth', value: 'inMonth', label: 'In Month' },
  { id: 'isToday', value: 'isToday', label: 'Is Today' },
  { id: 'isFirstDay', value: 'isFirstDay', label: 'Is First Day' },
  { id: 'isLastDay', value: 'isLastDay', label: 'Is Last Day' },
]

new Vue({
    el:"#app",
    props: {
        dayKey: { type: String, default: 'label' },
    },
    data() {
        return{
        displayOptions: _displayOptions,
        selectedDisplayOption: _displayOptions[1].value,
        showCustomUI: false,
        dateSelection: null,
        current: moment(),
        monthText: moment().format("MMMM YYYY"),
        tasks: [],
            month: _todayComps.month,
            year: _todayComps.year,
            selected:'Public',
            selected1:'Dosen\'t repeat',
            checked:'All day',
            selected2:'Slots with duration',
            edit: {
                status: false,
                index:0
            },
            task: {
                name: '',
                startDate: '',
                endDate: '',
                lab:'',
                full: ''
            },
            selectDate: '',
            selectDate1: ''
        }
    },
    computed: {
        // Our component exposes month as 1-based, but sometimes we need 0-based
        monthIndex() {
          return this.month - 1;
        },
        isLeapYear() {
                return (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0;
        },
        // Day/month/year components for previous month
        previousMonthComps() {
            if (this.month === 1) return {
              days: _daysInMonths[11],
              month: 12,
            year: this.year - 1,
          }
          return {
              days: (this.month === 3 && this.isLeapYear) ? 29 : _daysInMonths[this.month - 2],
              month: this.month - 1,
            year: this.year,
          };
        },
        // Day/month/year components for next month
        nextMonthComps() {
            if (this.month === 12) return {
              days: _daysInMonths[0],
              month: 1,
            year: this.year + 1,
          };
          return {
              days: (this.month === 2 && this.isLeapYear) ? 29 : _daysInMonths[this.month],
              month: this.month + 1,
            year: this.year,
          };
        },
        // State for calendar header (no dependencies yet...)
        months() {
          return _monthLabels.map((ml, i) => ({
            label: ml,
            label_1: ml.substring(0, 1),
            label_2: ml.substring(0, 2),
            label_3: ml.substring(0, 3),
            number: i + 1,
          }));
        },
        // State for weekday header (no dependencies yet...)
        weekdays() {
          return _weekdayLabels1.map((wl, i) => ({
            label: wl,
            label_1: wl.substring(0, 1),
            label_2: wl.substring(0, 2),
            label_3: wl.substring(0, 3),
            number: i + 1,
          }));
        },
        // State for calendar header
        header() {
          const month = this.months[this.monthIndex];
          return {
            month: month,
            year: this.year.toString(),
            shortYear: this.year.toString().substring(2, 4),
            label: month.label + ' ' + this.year,
          };
        },
        // Returns number for first weekday (1-7), starting from Sunday
        firstWeekdayInMonth() {
          return new Date(this.year, this.monthIndex, 1).getDay() + 1;
        },
        // Returns number of days in the current month
        daysInMonth() {
          // Check for February in a leap year
          if (this.month === 2 && this.isLeapYear) return 29;
          // ...Just a normal month
          return _daysInMonths[this.monthIndex];
        },
        weeks() {
          const weeks = [];
          let previousMonth = true, thisMonth = false, nextMonth = false;
          let day = this.previousMonthComps.days - this.firstWeekdayInMonth + 2;
          let month = this.previousMonthComps.month;
          let year = this.previousMonthComps.year;
          var dataValue = 1;
          // Cycle through each week of the month, up to 6 total
          for (let w = 1; w <= 6 && !nextMonth; w++) {
            // Cycle through each weekday
            const week = [];
            for (let d = 1; d <= 7; d++) {
                
              // We need to know when to start counting actual month days
              if (previousMonth && d >= this.firstWeekdayInMonth) {
                // Reset day/month/year counters
                day = 1;
                month = this.month;
                year = this.year;
                // ...and flag we're tracking actual month days
                previousMonth = false;
                thisMonth = true;
                        }
              
              // Append day info for the current week
              // Note: this might or might not be an actual month day
              //  We don't know how the UI wants to display various days,
              //  so we'll supply all the data we can
              week.push ({
                label: (day && thisMonth) ? day.toString() : '',
                day,
                weekday: d,
                week: w,
                month,
                year,
                date: new Date(year, month - 1, day),
                fullDate: moment(new Date(year, month - 1, day)).format("YYYY-MM-DD"),
                beforeMonth: previousMonth,
                afterMonth: nextMonth,
                inMonth: thisMonth,
                isToday: day === _todayComps.day && month === _todayComps.month && year === _todayComps.year,
                isFirstDay: thisMonth && day === 1,
                isLastDay: thisMonth && day === this.daysInMonth,
                dataValue,
              });
              
              // We've hit the last day of the month
              if (thisMonth && day >= this.daysInMonth) {
                thisMonth = false;
                nextMonth = true;
                day = 1;
                dataValue = 1;
                month = this.nextMonthComps.month;
                year = this.nextMonthComps.year;
              // Still in the middle of the month (hasn't ended yet)
              } else {
                  day++;
                  dataValue++;
              }
            }
            // Append week info for the month
            weeks.push(week);
          }
          return weeks;
        },
       
      },
    methods: {
        previous(){
            this.current = moment(this.current).subtract(1,'month')
        },
        next(){
            this.current = moment(this.current).add(1,'add')
        },
        moveThisMonth() {
            this.month = _todayComps.month;
            this.year = _todayComps.year;
        },
        moveNextMonth() {
            const { month, year } = this.nextMonthComps;
            this.month = month;
            this.year = year;
        },
        checkData: function(day, ts) {
            // return false
            var x = moment(day.fullDate)
            if(x.isSame(ts.startDate)){
                return true
            }
          // day.fullDate == ts.startDate
          // return true or false
        },
        movePreviousMonth() {
            const { month, year } = this.previousMonthComps;
            this.month = month;
            this.year = year;
        },
        moveNextYear() {
            this.year++;
        },
        movePreviousYear() {
            this.year--;
        },
        updateDate: function(day) {
            this.selectDate = moment(day.fullDate).format("YYYY-MM-DD")
            this.selectDate1 = moment(day.fullDate).format("YYYY-MM-DD")
        },
        pushValue(index) {
            this.task.startDate = this.selectDate
            this.task.endDate = this.selectDate1
            this.tasks.push(this.task)
            this.task = {}
            this.edit.status = true
            this.edit.index = index
        },

    },
    template:`
    <div>
        <section class="header">
            <div class="row">
                <div class="col-lg-3 align-self-center">
                    <div class="row">
                        <div class="col-lg-2">
                            <i class="material-icons menuIcon">menu</i>
                        </div>
                        <div class="col-lg-2">
                            <img class="calendarImage align-self-center" src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png">
                        </div>
                        <div class="col-lg-2">
                            <p>Calendar</p>
                        </div>
                        <div class="col-lg-6">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 align-self-center">
                    <div class="row">
                        <div class="col-lg-2 align-self-center">
                            <button class="btn btn-primary" type="button">Today</button>
                        </div>
                        <div class="col-lg-3 align-self-center">
                            <i class="material-icons headerIcon" @click='movePreviousMonth'>chevron_left</i>
                            <i class="material-icons headerIcon" @click='moveNextMonth'>chevron_right</i>
                        </div>
                        <div class="col-lg-5 align-self-center">
                            <h6>{{ header.label }}</h6>
                        </div>
                        <div class="col-lg-2">
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="row">
                        <div class="col-lg-1 align-self-center mt-1">
                            <i class="material-icons headerIcon">search</i>
                        </div>
                        <div class="col-lg-1 align-self-center">
                            <i class="material-icons headerIcon mt-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">settings</i>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Settings</a>
                                    <a class="dropdown-item" href="#">Trash</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Density and color</a>
                                    <a class="dropdown-item" href="#">Print</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Get add-ons</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Send Feedback</a>
                                    <a class="dropdown-item" href="#">Help</a>
                                </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="dropdown align-self-center">
                                <button class="btn btn-primary dropdown-toggle mt-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Month
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Day<span class="float-right">D</span></a>
                                    <a class="dropdown-item" href="#">Week<span class="float-right">D</span></a>
                                    <a class="dropdown-item" href="#">Month<span class="float-right">M</span></a>
                                    <a class="dropdown-item" href="#">Year<span class="float-right">Y</span></a>
                                    <a class="dropdown-item" href="#">Schedule<span class="float-right">A</span></a>
                                    <a class="dropdown-item" href="#">4 days<span class="float-right">X</span></a>
                                    <div class="dropdown-divider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="row">
                <div class="col-lg-3 flex-3">
                <section>
                <button class="btn btn-secondary createButton" type="button">
                    <svg width="36" height="36" viewBox="0 0 36 36">
                        <path fill="#34A853" d="M16 16v14h4V20z"></path>
                        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
                    </svg>
                Create</button>
                <div class="calendar-layout">
                    <calendar :day-key='selectedDisplayOption'></calendar>
                </div>
                <div class="row dropDown">
                    <div class="col-lg-11">
                        <input class="inputField" type="text" placeholder="Add calendar">
                    </div>
                    <div class="col-lg-1">
                        <div class="dropdown">
                        <i class="material-icons mt-2" id="dropdownMenuButton" style="vertical-align:middle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">more_vert</i>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2);border:0px;">
                                <a class="dropdown-item" href="#">Create new calendar</a>
                                <a class="dropdown-item" href="#">Browse resources</a>
                                <a class="dropdown-item" href="#">Browse calendars of interest</a>
                                <a class="dropdown-item" href="#">From URL</a>
                                <a class="dropdown-item" href="#">Import</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row dropDown1">
                    <div class="col-lg-12 mt-3">
                        <a class="btn btn-primary calendarCollapse" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                            <div class="row">
                                <div class="col-lg-11 padding-right">
                                    My calendars 
                                </div>
                                <div class="col-lg-1">
                                    <i class="material-icons float-right">expand_more</i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                            <div class="card card-body">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label" for="inlineCheckbox1">PNA Task</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label" for="inlineCheckbox1">Birthdays</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label" for="inlineCheckbox1">Reminders</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label" for="inlineCheckbox1">Tasks</label>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row dropDown1">
                    <div class="col-lg-12 mt-3">
                        <a class="btn btn-primary calendarCollapse" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                            <div class="row">
                                <div class="col-lg-11 padding-right-1">
                                    Other calendars
                                </div>
                                <div class="col-lg-1">
                                    <i class="material-icons float-right">expand_more</i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label" for="inlineCheckbox1">Holidays in India</label>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                </div>
                <div class="col-lg-9 flex-9 border-left-full">
                    <div class="calendar-layoutbig">
                    <div class='calendarbig'>
                    <div class='weekdaysbig'>
                        <div class='weekdaybig' v-for='weekday in weekdays'>
                            {{ weekday.label_3 }}
                        </div>
                    </div>
                    <div class='weekbig' v-for='week in weeks'>
                        <div class='daybig' v-for='(day,index) in week'>
                            <div :class='{ todaybig: day.isToday, "not-in-month": !day.inMonth }'><span data-toggle="modal" :data-target="'#exampleModal' + day.label" @click="updateDate(day)">{{ day[dayKey] }}
                                <div v-for="ts in tasks">
                                    <span v-if="checkData(day, ts)">
                                        {{ts.name}} 
                                    </span>
                                </div>
                            </span></div>
        
                        <!----------modal box---------->
                            <div class="modal fade" :id="'exampleModal' + day.label" tabindex="-1" role="dialog" :aria-labelledby="'exampleModalLabel' + day.label" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                            <div class="form-group">
                                                <input type="text" v-model="task.name" placeholder="Add title and time" class="form-control" id="recipient-name">
                        <!----------tab pills---------->
                                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                    <li class="nav-item">
                                                        <span class="nav-link active" data-toggle="tab" :data-target="'#pills-Event' + day.label">Event</span>
                                                    </li>
                                                    <li class="nav-item">
                                                        <span class="nav-link" data-toggle="tab" :data-target="'#pills-office' + day.label">Out of office</span>
                                                    </li>
                                                    <li class="nav-item">
                                                        <span class="nav-link" data-toggle="tab" :data-target="'#Remainder' + day.label">Remainder</span>
                                                    </li>
                                                    <li class="nav-item">
                                                        <span class="nav-link" data-toggle="tab" :data-target="'#Task' + day.label">Task</span>
                                                    </li>
                                                    <li class="nav-item">
                                                        <span class="nav-link" data-toggle="tab" :data-target="'#Appointment' + day.label">Appointment slots</span>
                                                    </li>
                                                </ul>
                                                <div class="tab-content" id="pills-tabContent">
                                                    <div class="tab-pane active" :id="'pills-Event' + day.label">
                                                        <div class="row">
                                                            <div class="col-1">
                                                                <i class="material-icons">access_time</i>
                                                            </div>
                                                            <div class="col-11 backGround">
                                                                <input type="date" :value="selectDate" v-modal="task.selectedDate" /> - <input type="date" :value="selectDate" v-modal="task.endDate" /><span class="button-display">Add time</span>
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                    <div class="tab-pane fade" :id="'pills-office' + day.label">
                                                        <div class="row">
                                                            <i class="material-icons">access_time</i>
                                                            <input type="date"><input type="time"> - <input type="time"><input type="date">
                                                        </div>
                                                        <div class="row">
                                                            <i class="material-icons">event_busy</i>
                                                            <input placeholder="Decline message"><br>
                                                        </div>
                                                        <div class="row">
                                                            <i class="material-icons">lock_outline</i>
                                                            <select v-model="selected">
                                                                <option>Public</option>
                                                                <option>Default visibility</option>
                                                                <option>Private</option>
                                                            </select>
                                                            <i class="material-icons">help_outline</i>
                                                        </div>
                                                        <div class="container">
                                                            <div class="row">
                                                                <i class="material-icons">report_problem</i>
                                                                <p>New and existing meetings during this time will be automatically declined</p>
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                    <div class="tab-pane fade" :id="'Remainder' + day.label">
                                                        <div class="row">
                                                            <i class="material-icons">access_time</i>
                                                            <input type="date">
                                                        </div>
                                                        <div class="row">
                                                            <i class="material-icons">refresh</i>
                                                            <select v-model="selected1">
                                                                <option>Dosen\'t repeat</option>
                                                                <option>Daily</option>
                                                                <option>Weekly on Thursday</option>
                                                                <option>Monthly on the second Thursday</option>
                                                                <option>Annually on April 11</option>
                                                                <option>Every weekday(Monday to Friday)</option>
                                                                <option>Custom...</option>
                                                            </select>
                                                            <input type="checkbox" id="checkbox">{{ checked }}
                                                        </div>
                                                    </div>
        
                                                    <div class="tab-pane fade" :id="'Task' + day.label">
                                                        <div class="row">
                                                            <i class="material-icons">access_time</i>
                                                            <input type="date">
                                                            <input type="checkbox" id="checkbox">{{ checked }}
                                                        </div>
                                                        <div class="row">
                                                            <i class="material-icons">subject</i>
                                                            <textarea placeholder="Add description"></textarea>
                                                        </div>
                                                        <div class="row">
                                                            <i class="material-icons">list</i>
                                                            <input type="text">
                                                        </div>
                                                    </div>
        
                                                    <div class="tab-pane fade" :id="'Appointment' + day.label">
                                                        <div class="row">
                                                            <i class="material-icons">access_time</i>
                                                            <input type="date">
                                                            <input type="time"> -
                                                            <input type="time">
                                                            <input type="date">
                                                        </div>
                                                        <div class="row">
                                                            <select v-model="selected2">
                                                                <option>Slots with duration</option>
                                                                <option>Single slot</option>
                                                            </select>
                                                            <input type="number">
                                                            <p>minutes</p>
                                                        </div>
                                                    </div>
                                                </div>
                        <!----------end of tab pills---------->
                                            </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" v-on:click="pushValue(index)" class="btn btn-primary">Save</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        <!----------end of modal box---------->
        
                        </div>
                    </div>
                </div>
                    </div>
                </div>
        </div>
    </div>
    `
})