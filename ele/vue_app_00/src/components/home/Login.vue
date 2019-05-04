<template>
    <div class="container">
       <div class="login_header"><img src="../../img/login1.png"></div>
       <form action="" method="get" id="login">
           <section >
               
                   <input type="text" name="phone" placeholder="请输入手机号" v-model="phone">
                    <button>获取验证码</button>
               
              
                   <input type="password" name="upwd" placeholder="请输入密码" v-model="upwd">
              
           </section>
           <section class="login_footer">
               新用户登录即自动注册，并表示已同意
               <a href="javascript:;">《用户服务协议》</a>
           </section>
           <button class="btn" @click="btnLogin">登录</button>
       </form>
      <p> <a href="javascript:;" class="login_a">关于我们</a></p>
      
    </div>    
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            phone:"",
            upwd:""
            
        }
    },
    methods:{
       btnLogin(e){
           e.preventDefault()
           var phone=this.phone;
           var upwd=this.upwd;
            var myReg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if(!myReg.test(phone)){
                Toast("手机号格式不正确，请检查");
                return;
            }
             var reg=/^[a-z0-9_]{3,8}$/i;
            if(!reg.test(upwd)){
                Toast("密码格式不正确，请检查");
                return;
            }
             var url="http://127.0.0.1:3000/login?phone="+phone+"&upwd="+upwd;
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    Toast("登录成功")
                    this.$router.push('/index')
                }else{
                    Toast("手机号或密码错误")
                }
            })
       }
    }
}      
</script>
<style>

.app-container{width:100%;height:100%;}
*{
    margin:0;
    padding:0;
}
body{
    /* font-size: .14rem; */
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    /* background:url("127.0.0.1:3000/img/img.png"); */    
    background:#fff !important;
}
.container{
    width:100%;
    height:100%;
    margin:0 auto;
    }
.login_header{
    margin: 2rem 0 1rem 0;
    
}
.login_header img{
   
   display: block;
   margin: 0 auto;
   width: 8rem;
}
form#login>section{
    margin:1rem;
}
form#login>section button{
    top:-2rem;
    left:75%;
    border:0px;
    color:#ccc;
    margin:0px;
    padding:0px;
}
form#login>section input{
    margin:0px;
    width: 100%;
    height: 3rem;
    left: 0;
    padding-left: 0.6rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: #999;
    -webkit-appearance: none;
    font-size:0.8rem;
    bottom:0px;
}
#login>section.login_footer{
    font-size: 0.85rem;
    
    color:#999;
    line-height: 1.25rem;
}
.btn{
    display: block;
    width: 90%;
    height: 3.2rem;
    margin-top: 1.25rem;
    margin:0 auto;
    border-radius: 0.25rem;;
    background: #4cd96f;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    line-height: 2rem;
}
p .login_a{
    width:100%;
    height:100%;
    display: block;
    font-size:0.8rem;
    color:#999;
    text-align: center;
}
#login{
    margin-bottom:1.25rem;
}

</style>


