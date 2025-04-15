const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
// const API_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) =>{
    const response =  await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
 );
 const data = await response.json();
 return data.results;
}





