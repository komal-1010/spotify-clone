import { Router } from "express";

const route=Router();
route.get('/',(req,res)=>{
    res.send("auth route for GET Method")
})