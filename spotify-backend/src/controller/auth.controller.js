import { User } from "../lib/models/user.model.js";

export const authcallback=async (req,res)=>{
    try {
        const {id,firstName,lastName,imageUrl}=req.body;
        //check user already exist
        const existuser=await User.findOne({clerkId:id})
        if(!existuser){
            //signup
            await User.create({
                clerkId:id,
                fullName:`${firstName} ${lastName}`,
                imageUrl
            })
        }
        res.status(200).json({success:true})
    } catch (error) {
        console.log("error in auth callback",error);
        res.status(500).json({message:"Internal Server error",error})
    }
}