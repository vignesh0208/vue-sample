Vue.component('calenderSetting', {
    data() {
      return {
        optState: null,
        state: '100',
        timeZone: null,
        time: 'IST',
      }
    },
    methods:{
       goBack: function() {
            route.go(-1);
       }
    },
    mounted() {
        axios
            .get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json')
            .then(response => (this.optState = response.data))
        axios
            .get('http://127.0.0.1:5500/google-calendar/timezone.json')
            .then(response => (this.timeZone = response.data))
    },
    computed: {
        
    },
    template: `
    <section class="calender-setting">
        <div class="header">
            <div class="setting">
                <div class="go-back" v-on:cilck="goBack()">
                    <i class="material-icons">arrow_back</i>
                </div>
                <div class="setting-text">
                    <span>Settings</span>
                </div>
            </div>
        </div>
        <div class="setting-body">
            <div class="sidenav">
                <div class="sidenav-bar">
                    <div class="sidenav-val">
                        <div class="sidenav-map">
                            <div>
                                <div class="sidenav-function">
                                    <div class="function-text">
                                        <div class="active">
                                            General
                                            <span class="arrow"><i class="material-icons">expand_more</i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="sidenav-overflow">
                                    <div class="overflow">
                                        <div class="overflow-text">
                                            Language and region
                                        </div>
                                    </div>
                                    <div class="overflow">
                                        <div class="overflow-text">
                                            Time zone
                                        </div>
                                    </div>
                                    <div class="overflow">
                                        <div class="overflow-text">
                                            World clock
                                        </div>
                                    </div>
                                    <div class="overflow">
                                        <div class="overflow-text">
                                            Event settings
                                        </div>
                                    </div>
                                    <div class="overflow">
                                        <div class="overflow-text">
                                            View options
                                        </div>
                                    </div>
                                    <div class="overflow">
                                        <div class="overflow-text">
                                            Events from Gmail
                                        </div>
                                    </div>
                                    <div class="overflow">
                                        <div class="overflow-text">
                                            Working Hours
                                        </div>
                                    </div>
                                    <div class="overflow">
                                        <div class="overflow-text">
                                            Main work location
                                        </div>
                                    </div>
                                    <div class="overflow">
                                        <div class="overflow-text">
                                            Keyboard shortcuts
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidenav-vals">
                <div class="main">
                    <div class="main-vals">
                        <div class="main-work">
                            <div class="work">
                                <h2>Language and region</h2>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Language</label>
                                        <select class="selection-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Country</label>
                                        <select class="selection-control" v-model="state">
                                            <option v-for="(option, index) in optState" v-bind:value="index">
                                                {{ option.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Data format</label>
                                        <select class="selection-control">
                                            <option>31/12/2019</option>
                                            <option>12/31/2019</option>
                                            <option>2019-12-31</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Time format</label>
                                        <select class="selection-control">
                                            <option>1:00pm</option>
                                            <option>13:00</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="work">
                                <h2>Time zone</h2>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                                            <label class="custom-control-label" for="customCheck1">Display secondary time zone</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="select-time-zone">
                                    <div class="selection-area">
                                        <div class="selection">
                                            <label class="label">Primary time zone</label>
                                            <select class="selection-control" v-model="time">
                                                <option v-for="(option, index) in timeZone" v-bind:value="option.abbr">
                                                    {{ option.text }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="selection-area">
                                        <div class="selection">
                                            <label class="label">Secondary time zone</label>
                                            <select class="selection-control" v-model="time">
                                                <option v-for="(option, index) in timeZone" v-bind:value="option.abbr">
                                                    {{ option.text }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck2">
                                            <label class="custom-control-label" for="customCheck2">Ask to update my primary time zone to current location</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="plan-txt">
                                    <label>Learn more about how Google Calendar works across time zones</label>
                                </div>
                            </div>
                            <div class="work">
                                <h2>World clock</h2>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck3">
                                            <label class="custom-control-label" for="customCheck3">Show world clock</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="plan-txt">
                                    <label>Add time zone</label>
                                </div>
                            </div>
                            <div class="work">
                                <h2>Event settings</h2>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Default duration</label>
                                        <select class="selection-control">
                                            <option>15 minutes</option>
                                            <option>30 minutes</option>
                                            <option>45 minutes</option>
                                            <option>60 minutes</option>
                                            <option>90 minutes</option>
                                            <option>120 minutes</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck4">
                                            <label class="custom-control-label" for="customCheck4">Speedy meetings</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="plan-txt">
                                    <label>End 30 minute meetings 5 minutes early and longer meetings 10 minutes early</label>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Default guest permission</label>
                                        <select class="selection-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Automatically add invitations</label>
                                        <select class="selection-control">
                                            <option>Yes</option>
                                            <option>Yes, but don't send event notifications unless I have responded "Yes" or "Maybe"</option>
                                            <option>No, only show invitations to which I have responded</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Notifications</label>
                                        <select class="selection-control">
                                            <option>Off</option>
                                            <option>Display notifications</option>
                                            <option>Alerts</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck5">
                                            <label class="custom-control-label" for="customCheck5">Play notification sounds</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="work">
                                <h2>View options</h2>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck6">
                                            <label class="custom-control-label" for="customCheck6">Show weekends</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck7">
                                            <label class="custom-control-label" for="customCheck7">Show declined events</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck8">
                                            <label class="custom-control-label" for="customCheck8">Show week numbers</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck9">
                                            <label class="custom-control-label" for="customCheck9">Reduce the brightness of past events</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck10">
                                            <label class="custom-control-label" for="customCheck10">View calendars side by side in Day View</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Start week on</label>
                                        <select class="selection-control">
                                            <option>Saturday</option>
                                            <option>Sunday</option>
                                            <option>Monday</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Set custom view</label>
                                        <select class="selection-control">
                                            <option>2 days</option>
                                            <option>3 days</option>
                                            <option>4 days</option>
                                            <option>5 days</option>
                                            <option>6 days</option>
                                            <option>7 days</option>
                                            <option>2 weeks</option>
                                            <option>3 weeks</option>
                                            <option>4 Weeks</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Alternate calendars</label>
                                        <select class="selection-control">
                                            <option>None</option>
                                            <option>Chinese Simplified</option>
                                            <option>Chinese Traditional</option>
                                            <option>Hebrew</option>
                                            <option>Hijri - Civil</option>
                                            <option>Hijri - Kuwaiti</option>
                                            <option>Hijri - Saudi</option>
                                            <option>Indian - Hindu (Saka)</option>
                                            <option>Korean</option>
                                            <option>Persian</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="work">
                                <h2>Events from Gmail</h2>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck11">
                                            <label class="custom-control-label" for="customCheck11">Automatically add events from Gmail to my calendar</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Visibility of Gmail events</label>
                                        <select class="selection-control">
                                            <option>Calendar default</option>
                                            <option>Private</option>
                                            <option>Only me</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="work">
                                <h2>Working Hours</h2>
                                <div class="plan-txt">
                                    <label>Enable working hours to let people know what times you're working and when you're available for meetings. This will warn people if they try to invite you to a meeting outside of these hours.</label>
                                </div>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck12">
                                            <label class="custom-control-label" for="customCheck12">Enable working hours</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Language</label>
                                        <select class="selection-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="work">
                                <h2>Main work location</h2>
                                <div class="selection-area">
                                    <div class="selection">
                                        <label class="label">Location</label>
                                        <select class="selection-control">
                                            <option>-</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="plan-txt">
                                    <label>Only your administrator has permissions to set your main work location.</label>
                                </div>
                            </div>
                            <div class="work">
                                <h2>Keyboard shortcuts</h2>
                                <div class="select">
                                    <div class="select-txt">
                                        <div class="custom-control custom-checkbox checkbox-padding">
                                            <input type="checkbox" class="custom-control-input" id="customCheck13">
                                            <label class="custom-control-label" for="customCheck13">Enable keyboard shortcuts</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="plan-txt">
                                    <label>Press “?” to show the list of available keyboard shortcuts</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
})
new Vue({ el: '#app' })