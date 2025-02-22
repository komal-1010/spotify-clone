import { Router } from "express";

const route=Router();
route.get('/',(req,res)=>{
    res.send("admin route for GET Method")
})