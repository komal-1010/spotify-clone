import { Router } from "express";

const route=Router();
route.get("",(req,res)=>{
    res.send("user route with GET method")
})