const express=require("express");
const User = require("../models/user");
const router=express.Router();

router.get("/signin",(req,res)=>{
  return res.render("signin");
});

router.get("/signup",(req,res)=>{
  return res.render("signup");
});

router.post("/signup",async(req,res)=>{
   const{fullName,email,password}=req.body;
   await User.create({
     fullName,
     email,
     password,
   });
   return res.redirect("/");
});

router.post("/signin", async (req, res) => {
  try {
     const { email, password } = req.body;
     const token = await User.matchPasswordAndGenerateToken(email, password);

     if (!token) {
        console.log(" No token generated, invalid credentials.");
        return res.render("signin", { error: "Invalid Email or Password" });
     }

     console.log(" Token generated:", token);
     return res.cookie("token", token, { httpOnly: true }).redirect("/");
  } catch (error) {
     console.log(" Error in signin:", error.message);
     return res.render("signin", { error: "Invalid Email or Password" });
  }
});


router.get("/logout",(req,res)=>{
   res.clearCookie("token").redirect("/");
});

module.exports=router;