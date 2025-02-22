import { Router } from "express";
import { authcallback } from "../controller/auth.controller";

const route=Router();
route.post('/callback',authcallback)
export default route