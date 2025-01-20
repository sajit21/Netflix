import { fetchFromTMDB } from "../services/tmdb.service.js";
import User from "../model/user.model.js";


export const searchPerson = async(req ,res ) => {
    const {query}=req.params;

    try {
        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`)
        // console.log(data)
      if(data.results.length===0)
      {
      return  res.status(400).send(null)
      }
      res.status(200).json({success:true, content:data.results})

      await User.findByIdAndUpdate(req.user._id, { $push: { searchHistory: 
        {
            id:data.results[0].id,
            profile:data.results[0].profile_path,
            title:data.results[0].name,
            searchType: "person",
            createdAt :new Date()
        }
       }
     })
        
    } catch (error) {
        console.log("error in searchPerson controller:", error.message)
        res.status(500).json({success:false, message: "internal server error"})

        
    }
}


export const searchMovie= async(req ,res) => {

try{
    const {query}=req.params;
    const data = await fetchFromTMDB(  `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)
    if(data.results.length === 0)
    {
        return res.status(400).send(null)
    }
    res.status(200).json({success:true, content :data.results})

    await User.findByIdAndUpdate(req.user._id, { $push: { searchHistory: 
        {
            id:data.results[0].id,
            profile:data.results[0].profile_path,
            title:data.results[0].title,
            searchType: "Movie",
            createdAt :new Date()
        }
       }
     })
}
catch(error)
{
    console.log("error in searchMovie controller:", error.message)
    res.status(500).json({success:false, message: "internal server error"})
}

}


export const searchTv = async(req, res) => {
    try{
const {query} =req.params;
const data= await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`)
if(data.results.length===0)
{
   return res.status(400).send(null)

}
await User.findByIdAndUpdate(req.user._id, {$push: {searchHistory: 
    {
        id:data.results[0].id,
        profile:data.results[0].profile_path,
        title:data.results[0].title,
        searchType: "tv",
        createdAt :new Date()
    }
}
})
res.status(200).json({success:true, content:data.results})
}
catch(error)
{
    console.log("error in searchTv controller:", error.message)
    res.status(500).json({success:false, message: "internal server error"})
}


}

export const searchHistory = async(req, res) => {
try{
    res.status(200).json({success:true, content:req.user.searchHistory}) //req.user is the user object that we get from the middleware
   
}

catch(error){
res.status(500).json({success:false, message: "internal server error"})


}
}