<template>
    <div class="container">
        <div class="header">
            <img src="../../img/login2.png" alt="">   
        </div>
        <form class="main">
            <input class="type-text" type="text" placeholder="账号"><br>
             <input class="type-text" type="password" placeholder="密码"><br>
              <input class="type-text" type="email" placeholder="邮箱"><br>
               <input class="type-text" type="text" placeholder="电话"><br>
                <input class="type-text" type="text" placeholder="真实姓名"><br>
                <input class="sex" name="sex" type="radio" checked="checked">男
                <input class="sex" name="sex" type="radio">女 
        </form>
        <div class="footer">
            <button>注册</button>    
        </div>  
    </div>
</template>

<script>
export default {
    data(){
        return {}
    }
}
</script>

<style>
    div.container{
        width:90%;
    }
    div.header{
        text-align: center;
        margin-top:1.5rem;
    }
    div.header img{
        width:35%;height:100%;
    }
    form.main{
        margin-top:1rem;
    }
    form.main input.type-text{
       margin:0.8rem 0 0 0;
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
    form.main input.sex{
        width:10%;
        margin-top:0.5rem
    }
    .footer{
        margin-top:1rem;
    }
    .footer button{
    display: block;
    width: 100%;
    height: 3.2rem;
    margin:0 auto;
    border-radius: 0.25rem;;
    background: #4cd96f;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    line-height: 2rem;
}
</style>
