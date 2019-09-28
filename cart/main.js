new Vue({
    el:"#app",
    data() {
        return {
            product: "Socks",
            description: "A pair of warm, fuzzy socks",
            // image:"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
            altText: "a pair of socks",
            brand:"Nike",
            // inStock: true,
            inventory:100,
            selectedVariant:0,
            details:["80% cotton", "20% polyster", "Gender-neutral"],
            variants:[
                {
                    variantId: 2234,
                    variantColor:"#4aaa76",
                    variantImage:"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor:"#2f435c",
                    variantImage:"https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
                    variantQuantity: 0  
                }
            ],
            cart:0
        }
    },
    methods: {
        addToCart(){
            this.cart ++
        },
        updateProduct(index){
            this.selectedVariant = index
            // this.image = this.variants[index].variantImage
            console.log(index)
        }
    },
    computed: {
        title(){
            return this.brand + ' '+ this.product
        },
        image(){
           return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    },
})