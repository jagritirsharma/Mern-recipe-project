import {User} from '../Models/User.js'
 
 export const register =  async (req,res)=>{
    const {name, gmail, password} = req.body

    try{
    let user= await User.findOne({gmail})

    if(user) return res.json({message: "User Already exist"})

    user = await User.create({name,gmail,password})
    
    res.json({message:"User Register Successfully..!",user})

    } catch(error) {
    res.json({message:error})
    }
}