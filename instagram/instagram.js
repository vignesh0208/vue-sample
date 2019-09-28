var store = new Vuex.Store({
    state: {
        postsImage: null,
        profileInfo: null,
        suggestions: null,
        exploreGallery: null,
        instrgramFeed: null
    },
})
Vue.component('insta-header', {
    mounted() {
        axios
            .get('http://127.0.0.1:5500/instagram/header.json')
            .then(response => (this.$store.state.postsImage = response.data.postsImage))
        axios
            .get('http://127.0.0.1:5500/instagram/header.json')
            .then(response => (this.$store.state.suggestions = response.data.suggestions))
    },
    template:`
    <section class="insta-view">
        <div class="container insta-header">
            <div class="row">
                <div class="col-lg-4 col-sm-4">
                    <div class="row">
                        <div class="col-lg-2 col-sm-2">
                            <router-link to="/"><i class="fab fa-instagram float-right" style="padding:0px"></i></router-link>
                        </div>
                        <div class="col-lg-1 col-sm-1">
                            <router-link to="/"><center><div class="vl"></div></center></router-link>
                        </div>
                        <div class="col-lg-9 col-sm-9">
                            <router-link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                    <div class="row">
                        <div class="col-lg-12 col-sm-12">
                            <center><input class="inputField" type="text" placeholder= "Search"></center>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                    <div class="row">
                        <div class="col-sm-5 col-lg-5">
                        </div>
                        <div class="col-sm-7 col-lg-7">
                        <router-link to="/explore"><i class="far fa-compass header-icons"></i></router-link>
                        <i class="far fa-heart "></i>
                        <router-link to="/profile"><i class="far fa-user "></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
})

Vue.component('insta-footer', {
    template: `
    <ul>
        <li><a href="https://www.instagram.com/about/us/">About Us</a></li>
        <li><a href="https://help.instagram.com/">Support</a></li>
        <li><a href="https://instagram-press.com/">Press</a></li>
        <li><a href="https://www.instagram.com/developer/">API</a></li>
        <li><a href="https://www.instagram.com/about/jobs/">Jobs</a></li>
        <li><a href="https://www.instagram.com/legal/privacy/">Privacy</a></li>
        <li><a href="https://www.instagram.com/legal/terms/">Terms</a></li>
        <li><a href="https://www.instagram.com/explore/locations/">Directory</a></li>
        <li><a href="https://www.instagram.com/directory/profiles/">Profiles</a></li>
        <li><a href="https://www.instagram.com/directory/hashtags/">Hashtags</a></li>
        <li>Language</li>
    </ul>
    `
})

Vue.component('gallery', {
    computed: {
        postsImage() {
            return this.$store.state.postsImage;
        },
    },
    template: `
    <div class="contain">
        <div class="gallery">
            <div class="gallery-item" tabindex="0"  v-for="post in postsImage">
                <img :src="post.image" class="gallery-image" :alt="post.id">
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> {{ post.likes }}</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> {{ post.comment }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
})

Vue.component('explore-gallery', {
    computed: {
        exploreGallery() {
            return this.$store.state.exploreGallery;
        },
    },
    template: `
    <div class="contain">
        <div class="gallery">
            <div class="gallery-item" tabindex="0"  v-for="po in exploreGallery">
                <img :src="po.image" class="gallery-image" :alt="po.id">
                <div class="gallery-item-info">
                    <ul>
                        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> {{ po.likes }}</li>
                        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> {{ po.comment }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
})

Vue.component("carousel", {
    data() {
      return {
        currentOffset: 0,
        windowSize: 3,
        paginationFactor: 220,
        items: null
      }
    },
    computed: {
        atEndOfList() {
            return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
        },
        atHeadOfList() {
            return this.currentOffset === 0;
        },
    },
    mounted() {
        axios
            .get('http://127.0.0.1:5500/instagram/header.json')
            .then(response => (this.items = response.data.suggestions))
    },
    methods: {
      moveCarousel(direction) {
        if (direction === 1 && !this.atEndOfList) {
          this.currentOffset -= this.paginationFactor;
        } else if (direction === -1 && !this.atHeadOfList) {
          this.currentOffset += this.paginationFactor;
        }
      },
    },
    template: `
    <div class="card-carousel-wrapper">
        <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
        <div class="card-carousel">
            <div class="card-carousel--overflow-container">
                <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
                    <div class="card-carousel--card" v-for="pro in items">
                        <div class="card-carousel--card--footer text-center" style="width: 175px;">
                            <router-link :to="'/suggested-profile/' + pro.id" :key="pro.id"><img :src="pro.profileImage" class="img-demo"/></router-link>
                            <div class="hover">
                                <router-link :to="'/suggested-profile/' + pro.id" :key="pro.id">
                                <span class="stories-name">{{ pro.name }}</span><br>
                                <span class="stories-time">Followed by {{ pro.follwedBy }}</span>
                                </router-link>
                            </div>
                            <button class="follow-btn">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
    </div>
    `
})

Vue.component("stories", {
    data() {
      return {
        
      }
    },
    computed: {
        
    },
    methods: {
        
    },
    template: `

    `
})

const newsfeed = {
    data(){
        return {
            commentValue: ''
        }
    },
    computed: {
        instrgramFeed() {
            return this.$store.state.instrgramFeed;
        },
        suggestions() {
            return this.$store.state.suggestions;
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:5500/instagram/header.json')
            .then(response => (this.$store.state.instrgramFeed = response.data.instrgram))
    },
    methods: {
        likesInc: function(x) {
            this.instrgramFeed[x].like++
            this.instrgramFeed[x].color = "red"
        },
        pushValue: function(x){
            this.instrgramFeed[x].commentsCouny++
            this.instrgramFeed.push(this.commentValue)
            this.commentValue = ""
        }
    },
    template: `
        <section class="newsfeed">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <div class="card" style="margin-bottom:5rem;" v-for="(instra, index) in instrgramFeed">
                            <div class="card-header bg-transparent header-feed">
                                <div class="row justify-content-between">
                                    <div class="col-6">
                                        <router-link :to="'/suggested-profile/' + instra.id"><img class="git-img" :src="instra.image" :alt="instra.name">
                                        <span class="name">{{instra.name}}</span></router-link>
                                    </div>
                                    <div class="col-2">
                                        <button class="btn-profile" data-toggle="modal" :data-target="'#exampleModalCenter' + instra.instid">
                                            <i class="material-icons">more_horiz</i>
                                        </button>
                                        <div class="modal fade" style="text-align:center;" :id="'exampleModalCenter' + instra.instid" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document" style="border-radius: 10%; font-size: 16px;">
                                                <div class="card" style="width: 100%;">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">Report in appropriate</li>
                                                        <li class="list-group-item">Unfollow</li>
                                                        <li class="list-group-item">Goto post</li>
                                                        <li class="list-group-item">Embed</li>
                                                        <li class="list-group-item">Share</li>
                                                        <li class="list-group-item">Copy Link</li>
                                                        <li class="list-group-item">Cancel</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="image-tag">
                                <img class="card-image" width="100%" :src="instra.image" alt="Card image cap">
                                <div class="middle tooltip">
                                    <div class="tooltiptext"><router-link :to="'/suggested-profile/' + instra.taggerId">{{instra.taggerName}}</router-link></div>
                                </div>
                                <div class="end">
                                    <div class="end-value"><i class="fas fa-user"></i></div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row justify-content-between">
                                    <div class="col-4">
                                        <span v-on:click="likesInc(index)"><i class="fas fa-heart" :style="{ color: instra.color }"></i></span>
                                        <router-link :to="'/information/' + instra.instid"><i class="far fa-comment"></i></router-link>
                                        <button class="btn-body" data-toggle="modal" :data-target="'#exampleModal' + instra.instid"><i class="fas fa-share" style="font-weight: 900;"></i></button>
                                        <div class="modal fade" :id="'exampleModal' + instra.instid" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document" style="border-radius: 10%;font-size: 16px;">
                                                <div class="card" style="width: 100%;">
                                                    <div class="card">
                                                        <div class="card-header text-center">
                                                            Share
                                                        </div>
                                                        <div class="card-body">
                                                            <div class="row" style="margin-bottom: 1.25rem;">
                                                                <div class="col-1">
                                                                    <i class="fab fa-facebook"></i>
                                                                </div>
                                                                <div class="col-11">
                                                                    Share to Facebook
                                                                </div>
                                                            </div>
                                                            <div class="row" style="margin-bottom: 1.25rem;">
                                                                <div class="col-1">
                                                                    <i class="fab fa-facebook-messenger"></i>
                                                                </div>
                                                                <div class="col-11">
                                                                    Share to Messager
                                                                </div>
                                                            </div>
                                                            <div class="row" style="margin-bottom: 1.25rem;">
                                                                <div class="col-1">
                                                                    <i class="fab fa-twitter-square"></i>
                                                                </div>
                                                                <div class="col-11">
                                                                    Share to Twitter
                                                                </div>
                                                            </div>
                                                            <div class="row" style="margin-bottom: 1.25rem;">
                                                                <div class="col-1">
                                                                    <i class="far fa-envelope"></i>
                                                                </div>
                                                                <div class="col-11">
                                                                    Share Via Email
                                                                </div>
                                                            </div>
                                                            <div class="row" style="margin-bottom: 1.25rem;">
                                                                <div class="col-1">
                                                                    <i class="fas fa-link" style="font-weight: 900;"></i>
                                                                </div>
                                                                <div class="col-11">
                                                                    Copy Link
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-1">
                                                                </div>
                                                                <div class="col-11">
                                                                    Cancle
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <i class="far fa-bookmark" style="float:right;padding-right:0px;"></i>
                                    </div>
                                </div>
                                <p class="total-views" data-toggle="modal" :data-target="'#exampleMod' + instra.instid">{{instra.like}} Likes</p>
                                <div class="modal fade" :id="'exampleMod' + instra.instid" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document" style="border-radius: 10%; font-size: 16px;">
                                        <div class="card" style="width: 100%;">
                                            <div class="card-header text-center">
                                                Likes
                                            </div>
                                            <div class="padding-view">
                                                <div class="row" style="padding-bottom:16px;" v-for="li in instra.likes">
                                                    <div class="col-2">
                                                        <img class="stories-profile-img" :src="li.image" :alt="li.name">
                                                    </div>
                                                    <div class="col-6" style="padding-top: 10px;">
                                                        <span class="stories-name">{{li.name}}</span>
                                                    </div>
                                                    <div class="col-4 follow">
                                                        <button class="follow-btn">Follow</button>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <p class="content-post">{{instra.text}}</p>
                                <p class="total-comments"><router-link :to="'/information/' + instra.instid">View all {{instra.commentsCouny}} comments</router-link></p>
                                <p><span class="total-views">eric_delito</span> nice <span class="total-comments" style="float:right; font-size:8px; margin-right: -15px;"><i class="far fa-heart"></i></span></p>
                                <p class="total-comments">{{instra.time}}</p>
                            </div>
                            <div class="card-footer">
                                <input v-model="commentValue" type="text" class="inputtype">
                                <button class="btn-post" v-on:click="pushValue(index)">Post</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="right-side">
                            <div class="row">
                                <div class="col-3">
                                    <router-link to="/profile">
                                        <img class="profile-img" src="https://scontent-sin2-1.cdninstagram.com/vp/284e4594879aa23e5a44c971393a5bc2/5D2E553F/t51.2885-19/s150x150/54208009_271958070406649_956950998817964032_n.jpg?_nc_ht=scontent-sin2-1.cdninstagram.com" alt="">
                                    </router-link>
                                </div>
                                <div class="col-9">
                                    <router-link to="/profile">
                                        <span class="total-views">vignesh4283</span><br>
                                        <span class="total-comments">vignesh vigneshwaran</span>
                                    </router-link>
                                </div>
                            </div>
                            <div class="card" style="width: 30rem;">
                                <div class="card-body">
                                    <div class="row justify-content-between">
                                        <div class="col-4 stories">
                                            Stories
                                        </div>
                                        <div class="col-4 watch-all">
                                            Watch All
                                        </div>
                                    </div>
                                    <div class="stories-view">
                                        <div class="row">
                                            <div class="col-3">
                                                <img class="stories-profile-img" src="https://semantic-ui.com/images/avatar2/large/matthew.png" alt="">
                                            </div>
                                            <div class="col-9">
                                                <span class="stories-name">vignesh4283</span><br>
                                                <span class="stories-time">10 HOURS AGO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="width: 30rem;">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-8 stories">
                                            Suggestions For You
                                        </div>
                                        <div class="col-4 watch-all">
                                            <router-link to="/suggested">See All</router-link>
                                        </div>
                                    </div>
                                    <div class="stories-view">
                                        <div class="row" v-for="sug in suggestions">
                                            <div class="col-3">
                                                <router-link :to="'/suggested-profile/' + sug.id"><img class="stories-profile-img" :src="sug.profileImage" :alt="sug.fullName"></router-link>
                                            </div>
                                            <div class="col-6">
                                                <router-link :to="'/suggested-profile/' + sug.id"><span class="stories-name">{{ sug.name }}</span></router-link>
                                            </div>
                                            <div class="col-3 follow">
                                                Follow
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer" style="width: 30rem;">
                                <insta-footer></insta-footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

const profile = {
    computed: {
        profileInfo() {
            return this.$store.state.profileInfo;
        },
    },
    mounted() {
        axios
            .get('http://127.0.0.1:5500/instagram/header.json')
            .then(response => (this.$store.state.profileInfo = response.data.profileInfo))
    },
    template: `
    <section class="profile-view">
        <header v-for="profile in profileInfo">
            <div class="contain">
                <div class="profile">
                    <div class="profile-image">
                        <img :src="profile.profileImage" :alt="profile.name">
                    </div>
                    <div class="profile-user-settings">
                        <h1 class="profile-user-name">{{ profile.name }}</h1>
                        <button class="btn profile-edit-btn">Edit Profile</button>
                        <button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>
                    </div>
                    <div class="profile-stats">
                        <ul>
                            <li><span class="profile-stat-count">{{profile.posts}}</span> posts</li>
                            <li><span class="profile-stat-count">{{profile.followers}}</span> followers</li>
                            <li><span class="profile-stat-count">{{profile.following}}</span> following</li>
                        </ul>
                    </div>
                    <div class="profile-bio">
                        <p><span class="profile-real-name">Vignesh Vigneshwaran</span></p>
                    </div>
                </div>
            </div>
        </header>
        <main>
        	<gallery></gallery>
        </main>
        <div class="footer-info">
            <insta-footer></insta-footer>
        </div>
    </section>
    `
}

const suggestedprofile = {
    computed: {
        user() {
            var id = this.$route.params.id;
            return this.$store.state.suggestions.filter(function(c){
                return c.id === id;
            })[0];
        },
    },
    template: `
    <section class="profile-view">
        <header>
            <div class="contain">
                <div class="profile">
                    <div class="profile-image">
                        <img :src="user.profileImage" :alt="user.name">
                    </div>
                    <div class="profile-user-settings">
                        <h1 class="profile-user-name">{{ user.name }}</h1>
                        <button class="btn profile-edit-btn">Follow</button>
                        <button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>
                    </div>
                    <div class="profile-stats">
                        <ul>
                            <li><span class="profile-stat-count">{{user.posts}}</span> posts</li>
                            <li><span class="profile-stat-count">{{user.followers}}</span> followers</li>
                            <li><span class="profile-stat-count">{{user.following}}</span> following</li>
                        </ul>
                    </div>
                    <div class="profile-bio">
                        <p><span class="profile-real">Followed by {{user.follwedBy}}</span></p>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="contain">
                <div class="gallery">
                    <div class="gallery-item" tabindex="0"  v-for="po in user.post">
                        <img :src="po.image" class="gallery-image" :alt="po.id">
                        <div class="gallery-item-info">
                            <ul>
                                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> {{ po.likes }}</li>
                                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> {{ po.comment }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div class="footer-info">
            <insta-footer></insta-footer>
        </div>
    </section>
    `
}

const information = {
    computed: {
        user() {
            var id = this.$route.params.instid;
            return this.$store.state.instrgramFeed.filter(function(c){
                return c.instid === id;
            })[0];
        }
    },
    template: `
        <section class="information">
            <div class="info-padding">
                <div class="lib-panel">
                    <div class="row box-shadow">
                        <div class="col-md-7">
                            <img class="lib-img-show" :src="user.image">
                        </div>
                        <div class="col-md-5">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-10">
                                            <img :src="user.image" class="info-img">
                                            <span class="following">{{user.name}}</span> • <span class="following">Follow</span>
                                        </div>
                                        <div class="col-2">
                                            <button class="btn-profile" data-toggle="modal" :data-target="'#Center' + user.instid">
                                                <i class="material-icons">more_horiz</i>
                                            </button>
                                            <div class="modal fade" style="text-align:center;" :id="'Center' + user.instid" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered" role="document" style="border-radius: 10%">
                                                    <div class="card" style="width: 100%;">
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item">Report in appropriate</li>
                                                            <li class="list-group-item">Embed</li>
                                                            <li class="list-group-item">Share</li>
                                                            <li class="list-group-item">Copy Link</li>
                                                            <li class="list-group-item">Cancel</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row bottom" v-for="fun in user.commentBy">
                                        <div class="col-2">
                                            <img class="stories-profile-img" :src="fun.image" alt="">
                                        </div>
                                        <div class="col-9">
                                            <span class="stories-name">{{fun.name}}</span><br>
                                            <span class="stories-time">{{fun.comment}}</span>
                                        </div>
                                        <div class="col-1">
                                            <i class="far fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer-nav">
                                    <div class="row justify-content-between">
                                        <div class="col-5">
                                            <i class="far fa-heart"></i>
                                            <i class="far fa-comment"></i>
                                            <button class="btn-body" data-toggle="modal" :data-target="'#MoCenter' + user.instid"><i class="fas fa-share" style="font-weight: 900;"></i></button>
                                            <div class="modal fade" :id="'MoCenter' + user.instid" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered" role="document" style="border-radius: 10%">
                                                    <div class="card" style="width: 100%;">
                                                        <div class="card">
                                                            <div class="card-header text-center">
                                                                Share
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="row" style="margin-bottom: 1.25rem;">
                                                                    <div class="col-1">
                                                                        <i class="fab fa-facebook"></i>
                                                                    </div>
                                                                    <div class="col-11">
                                                                        Share to Facebook
                                                                    </div>
                                                                </div>
                                                                <div class="row" style="margin-bottom: 1.25rem;">
                                                                    <div class="col-1">
                                                                        <i class="fab fa-facebook-messenger"></i>
                                                                    </div>
                                                                    <div class="col-11">
                                                                        Share to Messager
                                                                    </div>
                                                                </div>
                                                                <div class="row" style="margin-bottom: 1.25rem;">
                                                                    <div class="col-1">
                                                                        <i class="fab fa-twitter-square"></i>
                                                                    </div>
                                                                    <div class="col-11">
                                                                        Share to Twitter
                                                                    </div>
                                                                </div>
                                                                <div class="row" style="margin-bottom: 1.25rem;">
                                                                    <div class="col-1">
                                                                        <i class="far fa-envelope"></i>
                                                                    </div>
                                                                    <div class="col-11">
                                                                        Share Via Email
                                                                    </div>
                                                                </div>
                                                                <div class="row" style="margin-bottom: 1.25rem;">
                                                                    <div class="col-1">
                                                                        <i class="fas fa-link" style="    font-weight: 900;"></i>
                                                                    </div>
                                                                    <div class="col-11">
                                                                        Copy Link
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-1">
                                                                    </div>
                                                                    <div class="col-11">
                                                                        Cancle
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <i class="far fa-bookmark" style="float:right;padding-right:0px;"></i>
                                        </div>
                                    </div>
                                    <span class="stories-name">1.5m</span><br>
                                    <span class="stories-time">time</span>
                                </div>
                                <div class="card-footer">
                                    <input type="text" class="inputtype">
                                    <button class="btn-post">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-info">
                <insta-footer></insta-footer>
            </div>
        </section>
    `
}

const suggested = {
    computed: {
        suggestions() {
            return this.$store.state.suggestions;
        },
    },
    mounted() {
        axios
            .get('http://127.0.0.1:5500/instagram/header.json')
            .then(response => (this.$store.state.suggestions = response.data.suggestions))
    },
    methods: {
        colorText: function(x){
            this.suggestions[x].color = "#FFFFFF"
            this.suggestions[x].text = "Following..."
            this.suggestions[x].fontColor = "#262626"
        }
    },
    template: `
        <section class="suggested-bg">
            <div class="suggested">
                <div class="suggested-text">
                    <h4>Suggested</h4>
                </div>
                <div class="suggested-list">
                    <div class="suggested-follow" v-for="(sug, index) in suggestions">
                        <div class="width-1">
                            <router-link :to="'/suggested-profile/' + sug.id" :key="sug.id"><img class="suggested-img" :src="sug.profileImage" :alt="sug.name"></router-link>
                        </div>
                        <div class="width-2">
                            <router-link :to="'/suggested-profile/' + sug.id" :key="sug.id">
                            <span class="stories-name">{{sug.name}}</span><br>
                            <span class="stories-time">{{sug.fullName}}</span><br>
                            <span class="stories-time">Followed by {{sug.follwedBy}}</span>
                            </router-link>
                        </div>
                        <div class="width-3">
                            <button class="follow-btn" :style="{background: sug.color, color: sug.fontColor}" v-on:click="colorText(index)">{{ sug.text }}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-suggested">
                <insta-footer></insta-footer>
            </div>
        </section>
    `
}

const explore = {
    computed: {
        exploreGallery() {
            return this.$store.state.exploreGallery;
        },
    },
    mounted() {
        axios
            .get('http://127.0.0.1:5500/instagram/header.json')
            .then(response => (this.$store.state.exploreGallery = response.data.explore))
    },
    template: `
        <section class="explore">
            <div class="explore-spacing">
                <h2 class="explore-text">Discover People <span class="sub-text"><router-link to="/suggested">See All</router-link></span></h2>
                <div class="explore-slider">
                    <h2 class="explore-suggestions">Suggestions For You <span class="sub-text"><router-link to="/suggested">See All</router-link></span></h2>
                    <carousel></carousel>
                </div>
                <h2 class="explore-text-1">Explore</h2>
                <main>
                    <explore-gallery></explore-gallery>
                </main>
                <div class="footer-info">
                    <insta-footer></insta-footer>
                </div>
            </div>
        </section>
    `
}

const router = new VueRouter({
    routes: [
        { path:"/", components: {
            a: newsfeed
        }},
        { path:"/profile", components: {
            a: profile
        }},
        { path:"/information/:instid", components: {
            a: information
        }},
        { path:"/suggested", components: {
            a: suggested
        }},
        { path:"/suggested-profile/:id", components: {
            a: suggestedprofile
        }},
        { path:"/explore", components: {
            a: explore
        }},
    ]
})

new Vue({
    el: '#app',
    store,
    router,
    data(){
        return{
            
        }
    },
    template:`
        <section>
            <insta-header></insta-header>
            <router-view name="a"></router-view>
        </section>
    `
})