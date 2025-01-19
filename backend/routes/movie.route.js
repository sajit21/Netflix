import express from 'express';
import { getTrendingMovie, getCategoryMovies,getMovieTrailers ,getMovieDetails, getSimilarMovies} from '../controller/movie.controller.js';
const router=express.Router();  


router.get("/trending",getTrendingMovie)
router.get("/:id/trailers",getMovieTrailers)
router.get("/:id/details",getMovieDetails)
router.get("/:id/similars",getSimilarMovies)
router.get("/:category",getCategoryMovies)



export  default router; 