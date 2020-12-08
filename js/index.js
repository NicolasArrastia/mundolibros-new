// quiero hacer una dedicatoria a la programadora Vanina Ariño por haberme inspirado a meterme en este mundo tan hermoso llamado programación web, la que me ayudó a crecer como persona y como desarrollador, la que me ayudó a tener fe en mi mismo cada día para ser lo que soy ahora. También suele ser la solución a mis problemas, como la vez en que no andaba nada y con solo venir todo se resolvió magicamente jaja. Gracias por todo Vani ♥


// !!! Guardar info de user con localStorage y recuperarla

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