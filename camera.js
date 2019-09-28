var store = new Vuex.Store({
    state: {
       
    },
})
Vue.component('progress-bar', {
    data: function() {
        return {
          hasCameraPermission: false,
          type: Camera.Constants.Type.back,
        };
      },
      mounted: function() {
        Permissions.askAsync(Permissions.CAMERA)
          .then(status => {
            hasCameraPermission = status.status == "granted" ? true : false;
          }).catch((err)=>{
             console.log(err);
          });
      },
      components: { Camera },
    template: `
    <section>
    <view class="container">
    <camera class="container" :type="this.type"/>
  </view>
    </section>
    `
})
new Vue({ el: '#app',
    store })