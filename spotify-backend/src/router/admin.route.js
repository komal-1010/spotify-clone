import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { createSong } from "../controller/admin.controller.js";

const router = Router();

router.use(protectRoute, requireAdmin,createSong);



export default router;