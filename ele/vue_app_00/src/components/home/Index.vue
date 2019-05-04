<template>
    <div class="app-index">
        <!-- 顶部搜索框 -->
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item of lbtList">
                <img :src="item.img_url" alt="">
                
            </mt-swipe-item>
        </mt-swipe>
        <!-- 品质套餐 -->
        <div class="pztc">
            <a href="" class="pztc_a">
                <div class="pztc_font">
                    <h4>品质套餐</h4>
                    <div class='mui-ellipsis'>
                        <p>搭配齐全吃的好</p>
                        <span>立即抢购 > </span>
                    </div>
                </div>
                <div class="pztc_img">
                    <img :src="'http://127.0.0.1:3000/elmImg/f2/001.png'" alt="">
                </div>
            </a>
        </div>
        <!-- 超级会员按钮 -->
        <div class="cjhy">
            <ul class="cjhy_ul">
                <li>
                    <img :src="'http://127.0.0.1:3000/elmImg/f3/hg.png'" alt="">
                    <span class="span1">超级会员 .</span>
                    <span class="span2">已为我节省72元</span>
                </li>
                <li>
                    <span class="span3">30个奖励金 ></span>
                </li>
            </ul>
        </div>
        <!-- 推荐商家 -->
        <p class="tjsj">推荐商家</p>
        <!-- 轮播图套九宫格 -->        
                       
              <div class="jgg">      
                <a href="" class="jgg_a" v-for="item of gridList">
                    <img :src="item.img_url" alt="">
                    <p>{{item.title}}</p>
                </a>   
              </div>
              <div class="jgg">      
                <a href="" class="jgg_a" v-for="item of gridList">
                    <img :src="item.img_url" alt="">
                    <p>{{item.title}}</p>
                </a>   
              </div>
           
    </div>   
</template>
<script>
export default {
    data(){
        return{
            lbtList:[],
            gridList:[]
        }
    },
    created(){
        this.loadMore();
        this.loadGird();
        
    },
    methods:{
        loadMore(){
            var url="http://127.0.0.1:3000/lunbotu";
            this.axios.get(url).then(result=>{
                this.lbtList=result.data;
            })
        },
        loadGird(){
            var url="http://127.0.0.1:3000/elmGrid";
            this.axios.get(url).then(result=>{
                console.log(result.data);
               this.gridList=result.data; 
            })
        }
    }
}
</script>
<style>
/* 轮播图开始 */
.app-index .mint-swipe{
    height:100px;
}
.app-index .mint-swipe img{
    width:100%;
}
.app-index .mint-swipe .mint-swipe-indicator{
    width:10px;
    height:1px;
    background:#fff;
}
/* 轮播图结束 */
/* 品质套餐开始 */
.pztc .pztc_a {
    display:flex;
    justify-content:space-between;
    flex-wrap: nowrap;
    width:100%;
    padding:10px;
    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
}
.pztc .pztc_a .pztc_font{
    width:49%;
    flex-direction: column;
}
.pztc .pztc_a .pztc_font h4{
    font-size: 17px;
    font-weight: 700;
    margin-bottom: .133333rem;
    margin-bottom: 1.333333vw;
    color: #333;
}
.pztc .pztc_a .pztc_font p{
    color:#777777;
    font-size:13px;
}
.pztc .pztc_a .pztc_font span{
    color: #af8260;
    font-weight: 700;
    font-size:12px;
}
.pztc .pztc_a .pztc_img {
    width:49%;

}
.pztc .pztc_a .pztc_img img{
    width:75%;
    vertical-align: middle;
    
}
/* 品质套餐结束 */
/* 超级会员按钮开始 */
.cjhy{
    margin-top:2px;
}
.cjhy .cjhy_ul{
    background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
    height:40px;
    width:100%;
    list-style: none;
    display:block;
    padding-left:10px;
}
.cjhy .cjhy_ul li img{
    display: inline-block;
}
.cjhy .cjhy_ul li:first-child{
    float:left;
}
.cjhy .cjhy_ul li:first-child img{
    width:10%;
    vertical-align: middle;
    margin-right:5px;
}
.cjhy .cjhy_ul li:first-child .span1{
    font-size: .373333rem;
    font-weight: 700;
    line-height:40px;
    
}
.cjhy .cjhy_ul li:first-child .span2{
    color: #644f1b;
    font-size: .293333rem;
    line-height:40px;
    
}

.cjhy .cjhy_ul li:last-child {
    float:right;
    
    
}
.cjhy .cjhy_ul li:last-child .span3{
    color: #644f1b;
    font-size: .533333rem;
    line-height:40px;
     margin-right:10px;

}

/* 超级会员按钮结束 */

/* 推荐商家开始 */
p.tjsj{
    margin-top:1rem;
    text-align: center;
    color:#000;
    font-size: 0.9rem;
}
p.tjsj::before{
   content:"";
   background: #999;
   display: inline-block;
   width:1.5rem;
   height:1px;
   margin-right: 3.466667vw;
   vertical-align: middle;
}
p.tjsj::after{
   content:"";
   background: #999;
   display: inline-block;
   width:1.5rem;
   height:1px;
   vertical-align: middle;
   margin-left: 3.466667vw
}
/* 推荐商家结束 */
/* 九宫格开始 */
  /* .app-index .mt-swipe1{
    height:180px;
  }
  .app-index .mt-swipe1 .jgg{
    width: 100%;
  } */
.app-index .jgg{
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    padding:4px;
    text-align:center;
}
.app-index .jgg .jgg_a{
    display:flex;
    width:19.9%;
    margin:2px 0;
    padding:2px;
    flex-direction:column;
    align-items: center;
    color: #666;
    font-size: .32rem;
}
.app-index .jgg .jgg_a img{
    width:45px;
    height:45px;
    
}
/* 九宫格结束 */
</style>


