Vue.component('calendar-header',{
    template:`
        <section class="header">
            <div class="row">
                <div class="col-lg-3 align-self-center">
                    <div class="row">
                        <!-- new-1 -->
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
                            <i class="material-icons headerIcon">chevron_left</i>
                            <i class="material-icons headerIcon">chevron_right</i>
                        </div>
                        <div class="col-lg-5 align-self-center">
                            <h6>March 2019</h6>
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
    `
})

Vue.component('calendar-leftnav',{
    data() {
        return {
            color: ["#f0f8ff","#faebd7","#00ffff","#7fffd4","#f0ffff","#f5f5dc","#ffe4c4","#000000","#ffebcd","#0000ff","#8a2be2","#a52a2a"],
            picked: '',
            picked1: '',
            picked2: '',
            picked3: '',
            selectedDisplayOption: _displayOptions[1].value,
        }
    },
    template:`
        <section>
            <button class="btn btn-secondary createButton" type="button">
                <svg width="36" height="36" viewBox="0 0 36 36">
                    <path fill="#34A853" d="M16 16v14h4V20z"></path>
                    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
                </svg> Create</button>
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
                        <div class="dropdown-menu" style="box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2);border:0px;" aria-labelledby="dropdownMenuButton">
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
                            <div class="col-lg-11 padding-right">My calendars</div>
                            <div class="col-lg-1"><i class="material-icons float-right">expand_more</i></div>
                        </div>
                    </a>
                </div>
                <!--new-2 --><div class="collapse multi-collapse" id="multiCollapseExample1">
                    <div class="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" class="custom-control-input" :id="'customControlAutosizing' + picked">
                        <label v-bind:style="{ borderColor: picked, backgroundColor: picked }" class="custom-control-label padding-right-1 font-value" :for="'customControlAutosizing' + picked">PNA Task</label>
                        <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="float:right">more_vert</i>
                        <div class="dropdown-menu" style="min-width: 0px;float: left;">
                            <div v-for="clr in color" class="custom-control custom-radio margin-size">
                                <input type="radio" class="custom-control-input" :id="'defaultChecked' + clr" :value="clr" name="defaultExampleRadios" v-model="picked">
                                <label class="custom-control-label roll" :value="clr" :for="'defaultChecked' + clr" v-bind:style="{ background: clr }">&nbsp;</label>
                            </div>
                        </div>
                    </div>
                    <div class="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" class="custom-control-input" id="customControlAutosizing2">
                        <label v-bind:style="{ borderColor: picked1, backgroundColor: picked1 }" class="custom-control-label padding-right-1 font-value" for="customControlAutosizing2">Birthdays</label>
                        <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="float:right">more_vert</i>
                        <div class="dropdown-menu">
                            <div v-for="clr in color" class="custom-control custom-radio margin-size">
                                <input type="radio" class="custom-control-input" :id="'defaultChecked1' + clr" :value="clr" name="defaultExampleRadios1" v-model="picked1">
                                <label class="custom-control-label roll" :value="clr" :for="'defaultChecked1' + clr" v-bind:style="{ background: clr }">&nbsp;</label>
                            </div>
                        </div>
                    </div>
                    <div class="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" class="custom-control-input" id="customControlAutosizing3">
                        <label v-bind:style="{ borderColor: picked2, backgroundColor: picked2 }" class="custom-control-label padding-right-1 font-value" for="customControlAutosizing3">Reminders</label>
                        <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="float:right">more_vert</i>
                        <div class="dropdown-menu">
                            <div v-for="clr in color" class="custom-control custom-radio  margin-size">
                                <input type="radio" class="custom-control-input" :id="'defaultChecked2' + clr" :value="clr" name="defaultExampleRadios2" v-model="picked2">
                                <label class="custom-control-label roll" :value="clr" :for="'defaultChecked2' + clr" v-bind:style="{ background: clr }">&nbsp;</label>
                            </div>
                        </div>
                    </div>
                    <div class="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" class="custom-control-input" id="customControlAutosizing4">
                        <label v-bind:style="{ borderColor: picked3, backgroundColor: picked3 }" class="custom-control-label padding-right-1 font-value" for="customControlAutosizing4">Tasks</label>
                        <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="float:right">more_vert</i>
                        <div class="dropdown-menu">
                            <div v-for="clr in color" class="custom-control custom-radio margin-size">
                                <input type="radio" class="custom-control-input" :id="'defaultChecked3' + clr" :value="clr" name="defaultExampleRadios3" v-model="picked3">
                                <label class="custom-control-label roll" :value="clr" :for="'defaultChecked3' + clr" v-bind:style="{ background: clr }">&nbsp;</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row dropDown1">
                <div class="col-lg-12 mt-3">
                    <a class="btn btn-primary calendarCollapse" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <div class="row">
                            <div class="col-lg-11 padding-right-1">Other calendars</div>
                            <div class="col-lg-1"><i class="material-icons float-right">expand_more</i></div>
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
    `
})

const _daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const _weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const _weekdayLabels1= ['SUN','MON', 'TUE', 'WED', 'THU','FRI','SAT']
const _monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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

Vue.component('calendarbig', {
    template: `
        <div class='calendarbig'>
            <div class='weekdaysbig'>
                <div class='weekdaybig' v-for='weekday in weekdays'>
                    {{ weekday.label_3 }}
                </div>
            </div>
            <div class='weekbig' v-for='week in weeks'>
                <div class='daybig' v-for='day in week'>
                    <span  :class='{ todaybig: day.isToday, "not-in-month": !day.inMonth }'>{{ day[dayKey] }}</span>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            month: _todayComps.month,
            year: _todayComps.year,
        };
    },
    props: {
        dayKey: { type: String, default: 'label' },
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
        var weeks = [];
        let previousMonth = true, thisMonth = false, nextMonth = false;
        let day = this.previousMonthComps.days - this.firstWeekdayInMonth + 2;
        let month = this.previousMonthComps.month;
        let year = this.previousMonthComps.year;
        var dateValue = 1;
        // Cycle through each week of the month, up to 6 total
        for (var w = 1; w <= 6 && !nextMonth; w++) {
          // Cycle through each weekday
          var week = [];
          for (var d = 1; d <= 7; d++) {
              
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
              beforeMonth: previousMonth,
              afterMonth: nextMonth,
              inMonth: thisMonth,
              isToday: day === _todayComps.day && month === _todayComps.month && year === _todayComps.year,
              isFirstDay: thisMonth && day === 1,
              isLastDay: thisMonth && day === this.daysInMonth,
              dateValue
            });
            
            // We've hit the last day of the month
            if (thisMonth && day >= this.daysInMonth) {
              thisMonth = false;
              nextMonth = true;
              day = 1;
              dateValue = 1
              month = this.nextMonthComps.month;
              year = this.nextMonthComps.year;
            // Still in the middle of the month (hasn't ended yet)
            } else {
                day++;
                dateValue++;
            }
          }
          // Append week info for the month
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
];

new Vue({
    el:"#app",
    data: {
        displayOptions: _displayOptions,
        selectedDisplayOption: _displayOptions[1].value,
        showCustomUI: false,
        dateSelection: null,
    }
})