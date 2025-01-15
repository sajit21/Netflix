import express from "express"
const router=express.Router();
import {signup} from "../controller/auth.controller.js"

// router.post("/login", Login)
router.post("/signup", signup)

// router.post("/logout", logout)





export default router