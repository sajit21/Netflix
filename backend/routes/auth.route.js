import express from "express";
import { login, logout, signup,authCheck } from "../controller/auth.controller.js";
import { protectroute } from "../middleware/protectroute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/authCheck",protectroute,authCheck)

// router.get("/authCheck", protectRoute, authCheck);

export default router;