Vue.component('mlheader',{
    template:/*html*/`

    `
});

Vue.component('mlfooter',{
    template:/*html*/`
    <footer></footer>
    `
});

Vue.component('ml-error',{
    template:/*html*/`
    <div class="error">
        <h2><i class="fas fa-exclamation-triangle"></i></h2>
        <h3>Coming Soon</h3>
        <p>The characteristic you are trying to access is under process.</p>
    </div>
    `
});

Vue.component('ml-logo',{
    template:/*html*/`
        <div :style=divStyle class="logo-prueba">
            <i :style=fontStyle class="far fa-image"></i>
        </div>
    `,
    data(){
        return{
            fontStyle:{
                color:'black',
                fontSize:'3rem'
            },
            divStyle:{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'50px',
                height:'50px',
                backgroundColor:'#fff',
                borderRadius:'50%',
                cursor:'pointer'
            }
        }
    }
})

Vue.component('ml-img',{
    template:/*html*/`
    <div class="testimg" :style=divStyle>
        <i class="fas fa-images" :style=iconStyle></i>
    </div>
    `,
    data(){
        return{
            iconStyle:{
                fontSize:'6rem'
            },
            divStyle:{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'100%',
                padding:'5%',
                backgroundColor:'#ddd'
            }
        }
    }
})