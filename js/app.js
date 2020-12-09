const app = new Vue({
    el:'#app',
    data:{
        user:{
            first_name:'Vanina',
            last_name:'Ariño',
            cart:[
                {
                    name:'Lovecraft Vol.II',
                    id:'56',
                    description:'This is the second volume of the greatest Lovecraft\'s stories',
                    genres:['Cosmic Horror', 'Suspense', 'Gore'],
                    url:'img/background01.png'
                },
                {
                    name:'The Hobbit',
                    id:'78',
                    description:'An epic medieval history',
                    genres:['Fantasy', 'Medieval'],
                    url:'img/background02.png'
                }
            ],
            favlist:[]
        }
    },
    methods:{
        addToCart:function(item){
            this.user.cart.push(item)
        },
        addToFav:function(item){
            this.user.favlist.push(item)
        },
        deleteFromFav:function(item){
            this.user.favlist.shift(item)
            // alert(item)
        }
    }
})