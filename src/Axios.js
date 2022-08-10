import axios from "axios";
const instance = axios.create({
   baseURL: "https://api.themoviedb.org/3"
})

instance.get("/movie/top_rated");

//https://api.themoviedb.org/3/movie/top_rated"

//https://api.themoviedb.org/3/trending/all/week?api_key=96a306e8e5746a7f8ce5c8acde287c26&language=en-US


 export default instance;