import { Router } from "express";

const route=Router();
route.get('/',(req,res)=>{
    res.send("stats route for GET Method")
})