import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import path from "path";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";	
import { connectDB } from "./config/db.js";
import { protectroute } from "./middleware/protectroute.js";
import searchRoutes from "./routes/search.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/movies",protectroute, movieRoutes);
app.use("/api/tv",protectroute, tvRoutes);
app.use("/api/search",protectroute, searchRoutes);




// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// 	});
// }

app.listen(PORT, () => {
	console.log("Server is running on http://localhost:" + PORT);
	connectDB();
});