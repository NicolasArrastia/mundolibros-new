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
                    genre:['Cosmic Horror', 'Suspense'],
                    url:'img/background01.png'
                },
                {
                    name:'The Hobbit',
                    id:'78',
                    description:'An epic medieval history',
                    genre:['Fantasy', 'Medieval'],
                    url:'img/background02.png'
                }
            ]
        }
    }
})