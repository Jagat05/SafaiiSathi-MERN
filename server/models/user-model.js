const moongose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


const userSchema = new moongose.Schema({
  username :
  {
    type : String,
    required : true
  },
  phone:{
    type: Number,
    required:true
  },
  address:
  {
    type :String,
    required:true
  }
  ,
  email :
  {
    type : String,
    required : true
  },
  password :
  {
    type : String,
    required : true
  },
  isAdmin:
  {
    type:Boolean,
    default:false
  }

});
// securing password
userSchema.pre('save',async function(next){
const user =this;
if(!user.isModified("password")){
  next();
}
try {
    //hashing the password
      const saltRound=await bcrypt.genSalt(10);
      const hash_password=await bcrypt.hash(user.password,saltRound);
      user.password=hash_password;
} catch (error) {
  next(error);
}
});

// using json web token
userSchema.methods.generateToken=async function(){
  try {
    return jwt.sign({
      userId:this._id.toString(),
      email:this.email,
      isAdmin:this.isAdmin,

    },
  process.env.JWT_KEY,
  {
    expiresIn:"30d",
  }
);
  } catch (error) {
    console.error("Token Error: ", error);  
  }
};

const User=new moongose.model("User",userSchema);
module.exports=User;