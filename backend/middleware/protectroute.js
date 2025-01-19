import User from "../model/user.model.js";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVar.js";


export const protectroute = async (req, res, next) => {
    try {
        const token = req.cookies["jwt-netflix"];
        if (!token)
            return res.status(400).json({ success: false, message: "please login first" })
    
        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);
    if (!decoded) {
        return res.status(400).json({ success: false, message: "unathorized - invalid token" })

    }
    const user = await User.findById(decoded.userId).select("-password")
    if (!user) {
        return res.status(400).json({ success: false, message: "use not found" })
    }
    req.user = user;
    next();

}
catch (error) {
    console.log("error in protectRoute middleware", error.message)
    res.status(400).json({ success: false, message: "internal server error" })
}







}