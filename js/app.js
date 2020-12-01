// Guardar info de user con localStorage y recuperarla
const app = new Vue({
    el:'#app',
    data:{
        user:{
            firstName:'Vanina',
            lastName:'Ariño',
            password:'',
            loged:false
        },
        firstName:'userName Vani',
    },
    created:function(){
        let userData = JSON.parse(localStorage.getItem('user'));
        if(userData === null){
            this.user = {};
            console.log(this.userData);
        }
        else{
            this.user = datosDB
        }
        localStorage.setItem('user',JSON.stringify(this.user))
    }
});