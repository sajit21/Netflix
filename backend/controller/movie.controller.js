import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}


export async function getMovieTrailers(req, res) {
    const {id}= req.params;
    try {
        
        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
   res.status(200).json({success:true,trailer:data.results})
        
    } catch (error) {
        if(error.message.includes("404"))
        {
            res.status(404).json({success:false,message:"No trailer found"})
        }
        else{
            res.status(500).json({success:false,message:"Internal server error"})
        }
        
    }
}

export async function getMovieDetails(req, res) {
    const {id}=req.params;
    try {
        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
        res.status(200).json({success:true,content:data})
        
    } catch (error) {
        if(error.message.includes("404"))
        {
            res.status(404).json({success:false,message:"No movie found"})
        }
        else{
            res.status(500).json({success:false,message:"Internal server error"})
        }
        
    }


}