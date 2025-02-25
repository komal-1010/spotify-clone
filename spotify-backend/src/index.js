import express from "express"
import dotenv from "dotenv";
import userRoute from "./router/user.route.js"
import authRoute from "./router/auth.route.js"
import adminRoute from "./router/admin.route.js"
import albumsRoute from "./router/albums.route.js"
import statsRoute from "./router/stats.route.js"
import songsRoute from "./router/songs.route.js"
import { connectionDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import path from "path";
import fileUpload from "express-fileupload";
dotenv.config()
const app=express();
const PORT=process.env.PORT
app.use(express.json()) //to parse req.body
app.use(clerkMiddleware)//this will add auth to require obj
const __dirname = path.resolve();
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: path.join(__dirname, "tmp"),
		createParentPath: true,
		limits: {
			fileSize: 10 * 1024 * 1024, // 10MB  max file size
		},
	})
);
app.use('api/users',userRoute)
app.use('api/auth',authRoute)
app.use('api/admin',adminRoute)
app.use('api/albums',albumsRoute)
app.use('api/songs',songsRoute)
app.use('api/stats',statsRoute)
// error handler
app.use((err, req, res, next) => {
	res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message });
});
app.listen(PORT,()=>{
    console.log("server is running on port "+PORT)
    connectionDB()
})