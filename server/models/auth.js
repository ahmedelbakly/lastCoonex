const JWT = require("jsonwebtoken");
const { model } = require("mongoose");
// const funHelper =  require("../helper/functions")

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
 
  try {

    if (!authHeader){
     return  res.send("user not authorize")
      }else{
        const token = authHeader.split(" ")[1];
    if (!token) {
    return  res.json("no token");
    } else {
      const Verify = await JWT.verify(token, "MySEcretToken", (error, user) => {
        if (error) {
        return  res.json("token no valid");
        }
        req.user = user;
    
        next();
      });
    }
      }
    
  } catch (error) {
    res.json(error);
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports ={auth}
