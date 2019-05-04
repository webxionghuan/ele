<template>
  <div id="explore">
    <!--上方块-->
    <div class="headTop">
      <div class="goldShop">
        <div class="goldShopText">
          <h4>金币商城</h4>
          <p>0元好物在这里</p>
        </div>
        <img src="../../img/explore/01.webp">
      </div>
      <div class="headRight">
        <div class="headRight1">
          <div class="headRightText">
            <h4>推荐有奖</h4>
            <p>10元现金拿不停</p>
          </div>
          <img src="../../img/explore/02.webp">
        </div>
        <div class="headRight2">
          <div class="headRightText">
            <h4>周边优惠</h4>
            <p>领取口碑好券</p>
          </div>
          <img src="../../img/explore/03.webp">
        </div>
      </div>
    </div>
    <!--下方块-->
    <div class="bodyBtm">
      <div class="activity-header">
        <span>—● </span>
        <span class="mui-icon-extra mui-icon-extra-outline"></span>
        <span> 限时好礼</span>
        <span> ●—</span>
        <br>
        <span>金币换豪礼</span>
      </div>
      <div class="activity-body">
        <a herf="javascript:;" class="body-food" v-for="tmp in list">
          <div class="bgcimg1" :style="{background:'url('+tmp.img+') 0% 0%/7rem'}">
            <p>{{tmp.title}}</p>
          </div>
          <!--<img :src="tmp.img">-->
          <p>{{tmp.detail}}</p>
          <span>{{tmp.price}}</span>
          <span><del> {{tmp.cost}}</del></span>
        </a>
      </div>
      <div class="exchange">
        <router-link href="javascript:;">
          查看更多
          <span class="mui-icon mui-icon-arrowright"></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {id:1,title:"限时优惠",img:require("../../img/explore/3yhq.webp"),detail:"3元品质联盟红包",price:"90金币",cost:"￥3"},
        {id:2,title:"特价换购",img:require("../../img/explore/cleanrb.webp"),detail:"扫地机器人",price:"9金币",cost:"￥99"},
        {id:3,title:"限时优惠",img:require("../../img/explore/watch.webp"),detail:"电动针灸按摩仪",price:"180金币",cost:"￥239"}
      ]
    }
  }
}
</script>

<style>
  html{
    background-color: #F4F4F4;
  }
  .app-container{
    margin: 0;padding: 0;
  }
  /*加载跟多*/
  .activity-foot{
    text-align: center
  }
  .activity-foot a{
    font-size:0.8rem;
    color:#999;
  }
  .activity-foot a .mui-icon{
    font-size:1rem;
  }
  /*下方块*/
  .activity-body{
    height: 12rem;
    margin: 1rem 0 0 0.8rem;
  }
  .body-food{
    display: inline-block;
    width: 30%;
    height: 12rem;
    position: relative;
  }
  .body-food span:nth-child(3){
    position: absolute;
    bottom: 1.5rem;
    color:#F84842;
    font-size:0.9rem;
  }
  .body-food span:nth-child(4){
    position: absolute;
    bottom: 1.5rem;
    left:3.5rem;
    color:#403C3B;
    font-size:0.4rem
  }
  .body-food .bgcimg1{
    position: absolute;
    width:7rem ;
    height: 7rem;
    top:0;
  }
  .body-food .bgcimg1 p:first-child{
    background-color: #403C3B;
    font-size:0.3rem;
    color:#fff;
    text-align: center;
    width: 3.5rem;
    line-height: 1.2rem;
  }
  .body-food p:nth-child(2){
    position: absolute;
    bottom:2.5rem;
    color:#000;
    font-size:0.8rem;
    color:#333;
    text-align: center;
    /*width: 3.5rem;
    line-height: 1.2rem;*/
  }
  .bodyBtm{
    top:11rem;
    height: 19rem;
    background-color: #fff;
  }
  .activity-header{
    text-align: center;
    position: relative;
  }
  .activity-header span:last-child{
    font-size: 0.3rem;
    color:#999;
    position: absolute;
    top:2.1rem;
    left:45%
  }
  .activity-header span:not(:last-child){
    line-height: 3rem;
  }
  .mui-icon-extra-outline:before{
    color:#F84842;
  }
  /*上方块*/
  .headTop{
    height:10rem;
    position: relative;
    /*margin-bottom:1rem;*/
    background-color: #fff;
    border-bottom:1rem solid #f4f4f4;
  }
  .headRight{
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;top:0;
  }
  .headRight1{
    height: 50%;
    border-bottom:1px solid #f4f4f4; 
    box-sizing: border-box;
    position: relative;
  }
  .headRight1>img{
    height: 3rem;
    position: absolute;
    right: 0.8rem;
    top:1rem
  }
  .headRightText{
    position: absolute;
    left:1rem;
    top:1.5rem
  }
  .headRightText>h4{
    margin:0;
    font-size:1rem;
    color:rgb(237, 102, 96)
  }
  .headRightText>p{
    font-size:0.6rem;
    margin-top:0.3rem
  }
  .headRight2{
    height: 50%;
    box-sizing: border-box;
    position: relative;
  }
  .headRight2>img{
    height: 3rem;
    position: absolute;
    right: 0.8rem;
    top:1rem
  }
  .goldShop{
    box-sizing: border-box;
    height: 100%;
    width: 50%;
    border-right:1px solid #f4f4f4;
    position: relative;
  }
  .goldShop>img{
    height: 5rem;
    position: absolute;
    right: 0.8rem;
    bottom:0rem
  }
  .goldShopText{
    position: absolute;
    left:1rem;
    top:1.5rem
  }
  .goldShopText>h4{
    margin:0;
    font-size:1rem;
    color:rgb(255, 153, 0)
  }
  .goldShopText>p{
    font-size:0.6rem;
    margin-top:0.3rem
  }
</style>
