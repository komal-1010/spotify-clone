import { Router } from "express";
import { getAdmin } from "../controller/admin.controller";

const route=Router();
route.get('/',getAdmin)
export default route