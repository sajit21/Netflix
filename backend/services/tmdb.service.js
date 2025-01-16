import axios from "axios";

export const getTMDBDATA= async(url)=>{
    const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + ENV_VARS.TMDB_API_KEY
      },
    }


      const response= await axios.get(url,options);
      if(response !== 200)
      {
        throw new Error("Error in fetching data from TMDB" + response.statusText);
      }



    }
    







}