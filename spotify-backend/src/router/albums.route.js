import { Router } from "express";

const route=Router();
route.get('/',(req,res)=>{
    res.send("albums route for GET Method")
})