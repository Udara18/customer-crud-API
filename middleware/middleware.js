const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const veryfyToken = (req,res,next)=>{
    const token = req.headers['authorization'];
    if (!token){
        return res.status(400).json({'message':'empty token'});
    }

    try{
        const decodeValue = jwt.verify(token,secret);
        req.user=decodeValue;
        next()
    }catch (e){
        return res.status(403).json({'message':'invalid token !!!'});
    }
}

module.exports = veryfyToken;