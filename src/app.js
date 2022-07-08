const express=require("express");
const path=require("path");
const app=express();
const port= process.env.PORT || 3000; //koi personal hostinger hase to aena par chalse baki  local 3000 port num par chalse
const hbs=require("hbs");

const staticpath=(path.join(__dirname,"../public"));
const template=(path.join(__dirname,"../template/views"));
const partials=(path.join(__dirname,"../template/partials"));


app.set("view engine","hbs");
app.set("views",template);
hbs.registerPartials(partials);

app.use(express.static(staticpath));  


//routing
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:" Opps! Page Not Found"
    });
});


app.listen(port,()=>{
    console.log(`listen ${port}`);
});
