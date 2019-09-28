var blogStore = {
    posts: []
}

function Post(obj) {
    this.title = obj.title || ''
    this.tags = obj.tags || []
    this.description = obj.description || ''
}

var app = new Vue({
    el:"#app",
    data:{
        Store: blogStore,
        post: {},
        error: '',
    },
    mounted() {
        this.post = new Post({})
        console.log(this.post)
    },
    template: `
        <div>
            <section class="blog-body">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-4" v-for="post in Store.posts">
                            <div class="card-blog">
                                
                                <div class="card-body">
                                    <h5 class="card-title">{{post.tags}}</h5>
                                    <h3 class="card-text">{{post.title}}</h3>
                                    <p>{{post.description}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <div class="create-post">
                    <div class="form-group mb-3">
                        <label>Title:</label>
                        <input class="form-control" type="text" v-model="post.title" /><span>{{error}}</span>
                    </div>
                    <div class="form-group mb-3">
                        <label>Tags: </label>
                        <input class="form-control" type="text" v-model="post.tags" /><span>{{error}}</span>
                    </div>
                    <div class="form-group mb-3">
                        <label>Description: </label>
                        <textarea style="resize: none;" class="form-control" v-model="post.description" /></textarea><span>{{error}}</span>
                    </div>
                    <button class="btn btn-secondarymb-3" v-on:click="addPost(post)">Create Post</button>
                </div>
            </div>
        </div>
    `,
    methods:{
        addPost: function(post){
            if(post.title==null || post.title==""){
                this.error = "error"
            }
            else if(post.tags==null || post.tags==""){
                this.error = "error"
            }
            else if(post.description==null || post.description==""){
                this.error = "error"
            }
            else{
                this.Store.posts.push(post)
                this.post = new Post({})
            }
        }
    }
})


/* <img src="/static/images/features/dashboard.png" class="img-responsive add-shadow card-img-top" alt="head with gears icon"> */