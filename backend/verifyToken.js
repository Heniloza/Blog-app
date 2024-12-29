import jwt from 'jsonwebtoken';

const verifyToken = (req,res,next)=>{
    // console.log("Cookies:",req.cookies);
    const token = req.cookies.Token;
    if(!token) return res.status(401).json("You are not authenticated");
    jwt.verify(token,process.env.SECRET,async (err,data)=>{
        if(err){
            res.status(403).json("Token is not valid");
        }
        req.userId = data._id;
        console.log("verify Token Passed");
        next();
    })
}
export default verifyToken;