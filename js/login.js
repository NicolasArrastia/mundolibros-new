const login = new Vue({
    el:'#login',
    data:{
        username_input:'',
        password_input:'1243',
        show:false
    },
    methods:{
        verify_account:function(){
            if(this.username_input === 'DBlue' && this.password_input === '1234'){
                alert('Correcto');
            }
            else{
                alert('Incorrecto');
            }
        }
    }
})