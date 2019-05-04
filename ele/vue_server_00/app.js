const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const bodyParser=require("body-parser");
const session = require("express-session");

var pool=mysql.createPool({
    host:'127.0.0.1',
    user:"root",
    password:'',
    database:"ele"
});

var server=express()
server.listen(3000)

// 配置允许访问列 脚手架8080
server.use(cors({
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    credentials:true
  }));

  server.use(session({
    secret:"128位随机字符串",
    resave:false,
    saveUninitialized:true,
    cookie:{
      maxAge:1000*60*60
    }
  }))
  
server.use(express.static("public"));
//配置json是否是自动转换
server.use(bodyParser.urlencoded({extended:false}))

//功能一:用户登录  get
server.post("/login",(req,res)=>{
  var ph=req.query.phone;
  var p=req.query.upwd;
  var sql="select uid from ele_user where phone=? and upwd=?";
  pool.query(sql,[ph,p],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"});
    }else{
        
        res.send({code:1,msg:"登录成功"})
    }
  })
})

//功能二：
server.get("/lunbotu",(req,res)=>{
  rows=[
      {id:1,img_url:"http://127.0.0.1:3000/elmImg/lbt/1.png"},
      {id:2,img_url:"http://127.0.0.1:3000/elmImg/lbt/2.png"},
      {id:3,img_url:"http://127.0.0.1:3000/elmImg/lbt/3.png"},
      {id:4,img_url:"http://127.0.0.1:3000/elmImg/lbt/4.png"},
      {id:5,img_url:"http://127.0.0.1:3000/elmImg/lbt/5.png"}
  ];
  res.send(rows);
})
// 2-九宫格
server.get("/elmGrid",(req,res)=>{
  var rows=[
      {id:1,title:"美食",img_url:"http://127.0.0.1:3000/elmImg/0/00.png"},
      {id:2,title:"水果",img_url:"http://127.0.0.1:3000/elmImg/0/01.png"},
      {id:3,title:"鲜花",img_url:"http://127.0.0.1:3000/elmImg/0/02.png"},
      {id:4,title:"晚餐",img_url:"http://127.0.0.1:3000/elmImg/0/03.png"},
      {id:5,title:"超市",img_url:"http://127.0.0.1:3000/elmImg/0/04.png"},
      {id:6,title:"医药",img_url:"http://127.0.0.1:3000/elmImg/0/05.png"},
      {id:7,title:"跑腿",img_url:"http://127.0.0.1:3000/elmImg/0/06.png"},
      {id:8,title:"汉堡",img_url:"http://127.0.0.1:3000/elmImg/0/07.png"},
      {id:9,title:"厨房",img_url:"http://127.0.0.1:3000/elmImg/0/08.png"},
      {id:10,title:"炸鸡",img_url:"http://127.0.0.1:3000/elmImg/0/09.png"},
     
  ];
  res.send(rows);

})
