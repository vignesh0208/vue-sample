Vue.component('date-counter', {
    data() {
      return {
        styleObject:{
            float:'left',
            background: '#5ecc67',
            height: '50px',
            width: '50px',
            margin: '0px 5px 5px 0px'
        },
        apiDate:{
            
        },
        apiDateMargin:{

        }
      }
    },
    methods:{

    },
    template: `
    <section v-bind:style="apiDate">
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
    </section>`
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
        }
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