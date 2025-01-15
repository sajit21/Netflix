import User  from "../model/user.model.js";
import bcryptjs from "bcryptjs";
// import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signup= async(req, res) =>{
	try {
		const { email, password, username } = req.body;

		if (!email || !password || !username) {
			return res.status(400).json({ success: false, message: "All fields are required" });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			return res.status(400).json({ success: false, message: "Invalid email" });
		}

		if (password.length < 6) {
			return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
		}

		const existingUserByEmail = await User.findOne({ email: email });

		if (existingUserByEmail) {
			return res.status(400).json({ success: false, message: "Email already exists" });
		}

		const existingUserByUsername = await User.findOne({ username: username });

		if (existingUserByUsername) {
			return res.status(400).json({ success: false, message: "Username already exists" });
		}

		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

		const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];
     //paila chai math.random le 0 to 1 ko value dinxa ani teslai multiply garera 0 to 2 ko value dinxa 
     // ani math.floor le teslai 0 or 1 ma convert garcha
		const newUser = new User({
			email,
			password: hashedPassword,
			username,
			image,
		});

		// generateTokenAndSetCookie(newUser._id, res);
		await newUser.save();

		res.status(201).json({
			success: true,
			user: {
				...newUser._doc,
				password: "",
			},
		});
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}


    // export async function authCheck(req, res) {
    //     try {
    //         console.log("req.user:", req.user);
    //         res.status(200).json({ success: true, user: req.user });
    //     } catch (error) {
    //         console.log("Error in authCheck controller", error.message);
    //         res.status(500).json({ success: false, message: "Internal server error" });
    //     }
    // }


    export const login = async (req, res) => {
        try{
            const {email,password}=req.body;

            if(!email || !password){
                return res.status(400).json({success:false,message:"All fields are required"})
            }

            const user=await User.findone({email:email})

            if(!user){
                res.status(400).json({success:false,message:"invalid credentials"})
                //if use tries to login with invalid details
            }
            await user.save();
            res.status(200).json({success:true,user})

      }
      catch(error){
        console.log("error in login controoler", error.message)
        res.status(500).json({success:false,message:"server error"})

      }
    }

    
    export const logout= async(req,res)=>{
        try{
            res.clearcookie("")
            res.status(200).json({successLtrue,message:"logout success"})

        }
        catch(error){
            console.log("error in logout controlller", error.message)
            res.status(500).json({success:false,message:"server error"})
        }
    }
