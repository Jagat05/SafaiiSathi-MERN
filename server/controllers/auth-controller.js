const User =require("../models/user-model");
// const bcrypt = require('bcryptjs');



const home = async (req, res) => {
    try {
        res.status(200).send('Home Page..');
    } catch (error) {
        res.status(500).send(error.message);      
} };

const register = async (req, res) => {
    try {
      console.log(req.body);
    const {username, phone, address, email, password} =req.body;

    const userExist =await User.findOne({email:email});

    if(userExist){
        return res.status(400).json({msg :"email already Exists"});
    }

    //hashing the password
    // const saltRound=10;
    // const hash_password=await bcrypt.hash(password,saltRound);

    const userCreated =await User.create({username, phone, address, email, password, });

        res.status(201).json({msg:"Regristration Successfull",
            token:await userCreated.generateToken(), userId:userCreated._id.toString() });
    } catch (error) {
        // res.status(500).json("Error Error !" );   
        next(error);
} };

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const userExist = await User.findOne({ email });
  
      if (!userExist) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // const user = await bcrypt.compare(password, userExist.password);
      const isPasswordValid = await userExist.comparePassword(password);
  
      if (isPasswordValid) {
        res.status(200).json({
          message: "Login Successful",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(401).json({ message: "Invalid email or passord " });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      // next(error);
    }
  };
  




module.exports = {home,register,login};