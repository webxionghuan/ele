<template>
 <div class="app-container">
    <router-view></router-view>

    <!--3:底部tabbar-->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar" @click="home()">
         <span class="mui-icon mui-icon-home"></span>
         <span class="mui-tab-label" >首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat" @click="chat()">
          <span class="mui-icon mui-icon-navigate"></span>     
         <span class="mui-tab-label">发现</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact" @click="contact()">
         <span class="mui-icon mui-icon-compose mui-icon-extra-cart"></span>
         <span class="mui-tab-label">订单</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map" @click="map()">
         <span class="mui-icon mui-icon-contact"></span>
         <span class="mui-tab-label">我的</span>
      </a>
   </nav>
 </div>
</template>

<script>
export default {
   data(){
      return {}
   },
   methods:{
      home(){this.$router.push('/index')},
      chat(){this.$router.push('/explore')},
      contact(){this.$router.push('/order')},
      map(){this.$router.push('/user')}
   }
}
</script>

<style>
   .app-container{
     padding-bottom:50px;
     overflow-x:hidden;
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
