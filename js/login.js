const login = new Vue({
    el:'#login',
    data:{
        username_input:'',
        password_input:'',
        show_password:'password',
        lock_icon:'fas fa-lock',
        show:false
    },
    methods:{
        verify_account:function(){
            if(this.username_input === 'user' && this.password_input === '1234'){
                alert('Correcto');
            }
            else{
                alert('Incorrecto');
            }
        },
        alternate_password:function(){
            if(this.show_password==='password'){
                this.show_password='text'
                this.lock_icon='fas fa-lock-open'
            }
            else{
                this.show_password='password'
                this.lock_icon='fas fa-lock'
            }
        }
    }
})