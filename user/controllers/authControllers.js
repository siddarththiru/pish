const { hashPassword, comparePassword } = require('../helpers/auth')
const User =require('../models/User')
const test=(req,res)=>{
    res.json('test is working')

}
//register page
const registerUser=async (req,res)=>{
    try{
        const{fname,lname,email,username,password}=req.body;
        if(!fname){
            return res.json({
                error:'name is required'
            })}
        if(!fname){
            return res.json({
            error:'name is required'
        })}
        if(!lname){
            return res.json({
            error:'lname is required'
        })}
        const eExist =await User.findOne({email});
        if(eExist){
            return res.json({
            error:'email already exist'
            })  
        }
        const uExist =await User.findOne({username});
        if(uExist){
            return res.json({
            error:'username already exist'
            })  
        }
        if(!email){
            return res.json({
            error:'name is required'
         })}
        if(!username){
            return res.json({
            error:'username is required'
        })}
        if(!password||password.length<6){
            return res.json({
            error:'Password is required and should be six letter long'
        })}
        const hashedPassword=await hashPassword(password)
        const user= await User.create({
            fname,lname,email,username,
            password:hashedPassword,
        })
        return res.json(user)
    }catch(error){
        console.log(error);
    }

}


//login page
const loginUser=async (req,res)=>{
    try{
    const{username,password}=req.body;

    const user=await User.findOne({username})
    if(!user){
        return res.json({
            error:'No user found'
        })
    }
    const match = await comparePassword(password,user.password)
    if(match){
        res.json('Passwords match')
    }

}catch(error){
    console.log(error)
}
}

module.exports={
    test,
    registerUser,
    loginUser
}