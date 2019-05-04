<template>
    <div class="main">
        <img src="../../img/order.png" alt="">
        <p>登录后查看外卖订单</p>
        <button @click=jump()>立即登录</button>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){

    },
    methods:{
        jump(){
            this.$router.push('/login')
        }
    }

}
</script>

<style>
    .app-container{
        width:100%;
        height:100%;
    }
    .main{
        width:100%;
        height:20rem;
        text-align: center;
            margin-top: 26.666667vw;
    }
    img{
        width:60%;
        display: block;
        margin: 0 auto;
    }
    p{
      margin: 3.333333vw 0 2.666667vw;
    color: #6a6a6a;
    font-weight: 400;
    }
    .main button{
       border-radius: .533333vw;
    background-color: #56d176;
    color: #fff;
    text-align: center;
    width:35%;
    height:2.5rem;
    font-size: 0.8rem;
    font-family: inherit;
    }
</style>

