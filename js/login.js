const login = new Vue({
    el:'#login',
    data:{
        login_username:'user',
        login_password:'1234',

        type_password:'password',

        login_lock_icon:'fas fa-lock',

        register_username:null,
        register_email:null,
        register_password:null,
        register_confirm:null,

        type_register_password:'password',
        type_register_confirm:'password',

        register_lock_icon:'fas fa-lock',
        confirm_lock_icon:'fas fa-lock'
    },
    methods:{
        verify_account:function(){
            if(this.login_username === 'user' && this.login_password === '1234'){
                alert('Correcto');
            }
            else{
                alert('Incorrecto');
            }
        },

        
        alternate_login:function(){
            if(this.type_password === 'password'){
                this.type_password = 'text'
                this.login_lock_icon = 'fas fa-lock-open'
            }
            else{
                this.type_password = 'password'
                this.login_lock_icon = 'fas fa-lock'
            }
        },


        alternate_signup_password:function(){
            if(this.type_register_password === 'password'){
                this.type_register_password = 'text'
                this.register_lock_icon = 'fas fa-lock-open'
            }
            else{
                this.type_register_password = 'password'
                this.register_lock_icon = 'fas fa-lock'
            }
        },


        alternate_signup_confirm:function(){
            if(this.type_register_confirm === 'password'){
                this.type_register_confirm = 'text'
                this.confirm_lock_icon = 'fas fa-lock-open'
            }
            else{
                this.type_register_confirm = 'password'
                this.confirm_lock_icon = 'fas fa-lock'
            }
        },



        register:function(){
                if(this.register_username && this.register_email){
                    if(this.register_password === this.register_confirm && this.register_password){
                        alert('perfecto')
                    }
                    else{
                        alert('error sign up')
                    }
                }
                else{
                    alert('error sign up')
                }
        }
    }
})