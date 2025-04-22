require('dotenv').config()
const express=require("express");
const path=require("path");

const app=express();
const PORT=process.env.PORT;
const mongoose=require("mongoose");

const cookieParser=require("cookie-parser");

const userRoute=require("./routes/user");
const blogRoute=require("./routes/blog");
const Blog=require("./models/blog");
//mongodb://127.0.0.1:27017/blogify
mongoose.connect(process.env.MONGO_URL)
.then((error)=>console.log("MongoDB connected"));

const { checkForAuthenticationCookie } = require("./middlewares/authentication");
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./Public")));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


app.use("/user",userRoute);
app.use("/blog",blogRoute);

app.get("/",async(req,res)=>{
   const allBlogs=await Blog.find({});
   console.log(allBlogs);
   return res.render("home",{
      user:req.user,
      blogs:allBlogs,
   });
});


app.listen(PORT,()=>console.log(`Server is started at ${PORT}`));