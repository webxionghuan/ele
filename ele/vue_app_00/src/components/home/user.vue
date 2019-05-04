<template>
    <div class='app-user'>
        <!-- 页头注册 -->
        <div class="my-header">
            <img class="user_img1"  src="../../img/ele1.png" alt="">
            <div class="user_lr">
                <p>
                <router-link class="a_color" to="Login">登录</router-link>
                <span class="a_color">/</span>
                <router-link class="a_color" to="register">注册</router-link>
                </p>
                <p @click="jump()"><img src="../../img/ele2.png" alt="">登录后享受更多特权</p>
            </div>
            <img class="user_img2" src="../../img/ele3.png" alt="">
        </div>
        <!-- 红包 金币 -->
        <div class="hj">
            <div @click="jump()">
                <img  src="../../img/e2.png" alt="">
                <p >红包</p>
            </div>
            <div @click="jump()"> 
                <img src="../../img/e3.png" alt="">
                <p>金币</p>
            </div>
        </div>
        <!-- 主体部分 -->
        <div class="my-main">
            <div>
                <img src="../../img/e4.png" alt="">
                <span>我的地址</span>
                <img src="../../img/e11.png" alt="">
            </div>

            <div class="my_wddz">
                <img src="../../img/e5.png" alt="">
                <span>金币商城</span>
                <img src="../../img/e11.png" alt="">
            </div>

            <div>
                <img src="../../img/e6.png" alt="">
                <span>分享拿20元现金</span>
                <img src="../../img/e11.png" alt="">
            </div>

            <div class="my_wdkf">
                <img src="../../img/e7.png" alt="">
                <span>我的客服</span>
                <img src="../../img/e11.png" alt="">
            </div>

            <div>
                <img src="../../img/e8.png" alt="">
                <span>下载饿了么APP</span>
                <img src="../../img/e11.png" alt="">
            </div>

            <div>
                <img src="../../img/e9.png" alt="">
                <span>规则中心</span>
                <img src="../../img/e11.png" alt="">
            </div>
        </div>
        <p class="my-footer"><a href="javascript:;">隐私政策</a></p>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){

    },
    methods:{
        jump(){
            this.$router.push('Login')
        }
    }
}
</script>

<style>
/* .app-container{
 background-color: #ddd;
    width:100%;
    height:100%;
}
    .app-user{
      
       
    } */
    /*登陆注册*/
    .my-header{
        width: 100%;
        height:7rem;
        position: relative;
        background-image: linear-gradient(90deg,#0af,#0085ff);
       
    }
    .a_color{
        color: #fff;
        font-size:1.5rem;
        
    }
    .user_lr p{
        color:#fff;
        font-size: 0.9rem;
    }
    
    .user_img1{
        position: absolute;
        width:4.2rem;
        border-radius: 50%;
        top:16%;
        left:5%;
    }
    .user_lr{
        position: absolute;
        left:27%;
        top:29%;
    }
    .user_lr p img{
        position: absolute;
        width:0.5rem;
        left:-10%;
    }
    .user_img2{
        width:1rem;
        position: absolute;
        top:42%;
        right:5%
    }
    /*红包 金币*/
    .hj{
      display: flex;
      justify-content: space-around;
      height:6rem; 
      background: #fff;
    }
    .hj div{
        margin-top:3%;
    }
    .hj div p{
        color:#333;
        font-size:1rem;
    }
    .hj div img{
        width:100%;
    }
    /*主体 中间部分*/
    .my-main,.my_wddz,.my_wdkf{
        margin-top:0.5rem;
    }
    .my-main div{
        background: #fff;
        line-height: 1rem;
    }
    .my-main div::after{
        content: "";display: block;clear: both;
    }
    .my-main div img:first-child{
        width:5%;
        float: left;
        margin-left: 5%;
        margin-top:0.2rem;
    }
    .my-main div span{
        float: left;
        padding:0.5rem;
        font-size: 0.9rem;
    }
    .my-main div img:last-child{
        float: right;
        width:3%;
        margin-right: 5%;
        margin-top:0.5rem;
    }
    /*footer*/
    .my-footer{
        margin-top:1.5rem;
        text-align: center;
    }
</style>
