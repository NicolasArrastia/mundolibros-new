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
                    genres:['Cosmic Horror', 'Suspense'],
                    url:'img/background01.png'
                },
                {
                    name:'The Hobbit',
                    id:'78',
                    description:'An epic medieval history',
                    genres:['Fantasy', 'Medieval'],
                    url:'img/background02.png'
                }
            ]
        }
    },
    methods:{
        addToCart:function(title,id,desc){
            // this.user.cart=[{name:title,id:id,description:desc}]
            this.user.cart.push({name:title,id:id,description:desc,url:'img/Psicología-del-color_-el-azul.png'})
        }
    }
})