import mongoose from "mongoose";

export const connectionDB=async () => {
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to MongoDB ${conn.connection.host}`)
    } catch (error) {
        console.log("Failed to connect to MongoDB",error)
        process.exit(1);
    }
}