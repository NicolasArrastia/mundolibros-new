Vue.component('ml-header',{
    template:/*html*/`

    `
});

Vue.component('ml-footer',{
    template:/*html*/`
        <footer>
            <div>
                <ml-logo></ml-logo>
            </div>

            <div class="social-media">
                <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/nicolás-arrastía/"><i class="fab fa-linkedin-in"></i></a>
            </div>

            <div class="contact">
                <p><a href="#">info</a> • <a href="#">support</a> • <a href="#">Marketing</a></p>
                <p><a href="#">terms of use</a> • <a href="#">privacy policy</a></p>
                <p><a href="https://matias.ma/nsfw/"><span>ditto?</span></a></p>
            </div>

            <p id="copyright">© 2020 Mundo Libros!</p>
        </footer>`
});

Vue.component('ml-error',{
    template:/*html*/`
    <div class="error">
        <h2><i class="fas fa-exclamation-triangle"></i></h2>
        <h3>Coming Soon</h3>
        <p>The feature you are trying to access is unavailable or under construction.</p>
    </div>
    `
});

Vue.component('ml-logo',{
    template:/*html*/`
        <div :style=divStyle class="logo-prueba">
            <a href="index.html"><i :style=fontStyle class="far fa-image"></i></a>
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
        <p :style=fontStyle>This is a test Image</p>
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
                flexDirection:'column',
                width:'100%',
                minHeight:'50px',
                padding:'5%',
                backgroundColor:'#c2c2c2'
            },
            fontStyle:{
                color:'#353535',
                fontSize:'1.8rem'
            }
        }
    }
})