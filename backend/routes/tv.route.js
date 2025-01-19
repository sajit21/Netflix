import express from 'express';
import { getTrendingTv, getCategoryTv,getTvTrailers ,getTvDetails, getSimilarTv} from '../controller/tv.controller.js';
const router=express.Router();


router.get("/trending",getTrendingTv)
router.get("/:id/trailers",getTvTrailers)
router.get("/:id/details",getTvDetails)
router.get("/:id/similars",getSimilarTv)
router.get("/:category",getCategoryTv)



export default router;