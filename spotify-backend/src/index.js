import express from "express"
import dotenv from "dotenv";
import userRoute from "./router/user.route.js"
import authRoute from "./router/auth.route.js"
import adminRoute from "./router/admin.route.js"
import albumsRoute from "./router/albums.route.js"
import statsRoute from "./router/stats.route.js"
import songsRoute from "./router/songs.route.js"
dotenv.config()
const app=express();
const PORT=process.env.PORT
app.use('api/users',userRoute)
app.use('api/auth',authRoute)
app.use('api/admin',adminRoute)
app.use('api/albums',albumsRoute)
app.use('api/songs',songsRoute)
app.use('api/stats',statsRoute)
app.listen(PORT,()=>{
    console.log("server is running on port "+PORT)
})