<template>
  <div class="exchange">
    <!--头div-->
    <div class="exchangeHead">
      <div class="exHeadLeft">
        <p>金币 0</p>
      </div>
      <div class="exHeadRight">
        <p>兑换记录</p>
      </div>
    </div>
    <!--轮播图-->
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item of navlist"><img :src="item.img_url"></mt-swipe-item>
      </mt-swipe>
    </div>
    <!--八宫格-->
    <ul class="sort8">
      <li v-for="tmp of gridlist">
        <a href="javascript:;">
          <img :src="tmp.img_url">
          <p>{{tmp.content}}</p>
        </a>
      </li>
    </ul>
    <!--三卡片-->
    <div class="cardThree">
      <div>
        <img src="../../img/exchange/zhineng.png">
      </div>
      <div>
        <img src="../../img/exchange/ddys.jpeg">
      </div>
      <div>
        <img src="../../img/exchange/jxjp.jpg">
      </div>
    </div>
    <!--表单列表-->
    <div class="exFooter">
      <div class="footHead">
        <p>大家都在兑</p>
      </div>
      <div class="tableList">
        <ul>
          <li v-for="tmp of tablelist">
            <a herf="javascript:;" @click="handleclick(tmp.id)">
              <p>{{tmp.title}}</p>
              <span>
                {{tmp.price}}
                <span> 金币</span>
              </span>
              <span>{{tmp.surp}}</span>
              <img :src="tmp.img_url">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--最后-->
    <div class="last1">
      <p>*兑换项和活动皆与设备生产商Apple Inc.无关</p>
      <p>合作请联系：ejifen@ele.me</p>
    </div>
    <!--<div>asdfasgd</div>
    <div>asdfasgd</div>-->
  </div>
</template>

<script>
export default {
  data(){
    return {
      navlist:[
        {id:1,img_url:require("../../img/exchange/swip1.webp")},
        {id:2,img_url:require("../../img/exchange/swip2.webp")},
        {id:3,img_url:require("../../img/exchange/swip3.webp")}
      ],
      gridlist:[
        {id:1,img_url:require("../../img/exchange/icon1.png"),content:"0元兑换"},
        {id:2,img_url:require("../../img/exchange/icon1.png"),content:"会员专区"},
        {id:3,img_url:require("../../img/exchange/icon2.jpg"),content:"红包专区"},
        {id:4,img_url:require("../../img/exchange/icon3.png"),content:"优惠礼券"},
        {id:5,img_url:require("../../img/exchange/icon4.png"),content:"数码家电"},
        {id:6,img_url:require("../../img/exchange/icon5.png"),content:"日常家居"},
        {id:7,img_url:require("../../img/exchange/icon6.png"),content:"食品饮料"},
        {id:8,img_url:require("../../img/exchange/icon7.png"),content:"个护美妆"},
      ],
      cardlist:[
        {id:1,img_url:require("../../img/exchange/zhineng.png")},
        {id:2,img_url:require("../../img/exchange/ddys.jpeg")},
        {id:3,img_url:require("../../img/exchange/jxjp.jpg")}
      ],
      tablelist:[
        {id:1,img_url:require("../../img/exchange/tb1.png"),title:"5元品质联盟专享红包",price:"150"},
        {id:2,img_url:require("../../img/exchange/tb2.png"),title:"6元品质联盟专享红包",price:"180"},
        {id:3,img_url:require("../../img/exchange/tb3.png"),title:"15元品质联盟专享红包",price:"450"},
        {id:4,img_url:require("../../img/exchange/tb4.jpg"),title:"移动电源1万毫安",price:"9",surp:" +39元 "},
        {id:5,img_url:require("../../img/exchange/tb5.png"),title:"PP会员15天体验",price:"9"},
        {id:6,img_url:require("../../img/exchange/tb6.jpg"),title:"电动按摩针灸按摩仪",price:"9",surp:" +56元 "},
        {id:7,img_url:require("../../img/exchange/tb7.jpg"),title:"空气加湿器",price:"9",surp:" +39元 "},
        {id:8,img_url:require("../../img/exchange/tb8.jpg"),title:"机械键盘",price:"9",surp:" +40元 "}
      ]
    }
  },
  methods:{
    handleclick(a){
      this.$router.push({path:"/productList?id="+a})
    }
  }
}
</script>

<style>
  /*最后*/
  .last1{
    text-align: center;
    background: #f4f4f4;
    margin-bottom: 3rem;
  }
  .last1 p{
    padding: 0.05rem;
    font-size:0.5rem;
    color: rgb(143, 132, 132)
  }
  .last1 p:first-child{
    margin: 0;
  }
  /*表单列表*/
  .exFooter{
    clear: both;
    border-top:0.5rem solid #f4f4f4;
  }
  .exFooter .footHead{
    height: 2.8rem;
    border-bottom: 1px solid #eee;
  }
  .exFooter .footHead p{
    line-height: 2.5rem;
    font-size: 0.55rem;
    color:#666;
    margin-left:1rem
  }
  .tableList{
      zoom:1
  }
  .tableList:after{
      display:block;
      content:'';
      clear:both;
      height:0;
      overflow:hidden
  }
  .tableList ul{
    width: 100%;
    list-style: none;
  }
  .tableList ul li{
    width: 50%;
    height: 10.7rem;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    float: left;
  }
  .tableList ul li:nth-child(2n){
    border-right:0;
  }
  .tableList ul li a{
    display: inline-block;
  }
  .tableList ul li:nth-child(n){
    border-right: 1px solid #eee;
  }
  .tableList ul li a span:nth-child(3){
    margin-left: 0.8rem;
    width: 3rem;
    text-align: center;
    font-size:0.4rem;
    color:#fff;
    display: inline-block;
    background: #05b2c2;
    border-radius: 0.3rem;
  }
  .tableList ul li a span:nth-child(2){
    margin: 0rem 0 0 0.6rem;
    font-size:0.8rem;
    color:#ff6000;
  }
  .tableList ul li a span:nth-child(2) span{
    font-size: 0.55rem;
    color:#999;
  }
  .tableList ul li a p{
    margin: 0.5rem 0 0 0.6rem;
    color:#333;
    font-size: 0.8rem;
    line-height: 1.3rem;
  }
  .tableList ul li a img{
    margin: 0 0 0 0.6rem;
    width: 9.75rem;
    height: 6.1rem;
  }
  /*三卡片*/
  .cardThree{
    width: 100%;
    clear: both;
    border-top:0.5rem solid #f4f4f4;
    /*border-bottom:0.5rem solid #f4f4f4;*/
  }
  .cardThree div{
    float: left;
    box-sizing: border-box;
  }
  .cardThree div:first-child{
    width: 50%;
    height: 8rem;
  }
  .cardThree div:first-child img{
    height: 8rem;
    border-left:1px solid #eee ;
    border-top:1px solid #eee ;
  }
  .cardThree div:not(:first-child){
    width: 50%;
    height: 4rem;
  }
  .cardThree div:not(:first-child) img{
    height: 4rem;
    border-left:1px solid #eee ;
    border-top:1px solid #eee ;
  }
  /*八宫格*/
  .sort8 li{
    float: left;
    list-style:none;
    height: 5.3rem;
  }
  .sort8 li:nth-child(-n+4){
    margin-top: 1rem;
  }
  .sort8 li a{
    display:inline-block;
    width: 5.7rem;
    height: 3.8rem;
    text-align: center;
  }
  .sort8 li a img{
    width: 2.6rem;
  }
  .sort8 li a p{
    font-size: 0.7rem;
    color: #666;
  }
  /*轮播图*/
  .swipe{
    height:10.8rem;
    border-top: 0.5rem solid #f4f4f4;
  }
  .swipe .mint-swipe{
    height:10.3rem;
  }
  .swipe .mint-swipe img{
    width: 100%;
  }
  .swipe .mint-swipe .mint-swipe-indicator.is-active{
    background: #fff
  }
  /*头部*/
  .exchangeHead{
    position: relative;
    height: 2.6rem;
  }
  .exHeadLeft{
    width: 50%;
    height: 2.6rem;
    background: url(../../img/exchange/diamond1.png) no-repeat 3.2rem 0.7rem;
    background-size:1.2rem;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #e5e5e5;
  }
  .exHeadLeft p{
    line-height: 2.6rem;
    color: #000;
  }
  .exHeadRight{
    position: absolute;
    right:0;
    top:0;
    width: 50%;
    background: url(../../img/exchange/file1.png) no-repeat 2.5rem 0.7rem;
    background-size:1.2rem;
    text-align: center;
  }
  .exHeadRight p{
    line-height: 2.6rem;
    color: #000;
  }
</style>
