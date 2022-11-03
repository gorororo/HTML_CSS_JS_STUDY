import "./Home.css";

import Movie from "./Movie";
import { useState,useEffect } from "react";



const Home =()=> {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const API_KEY = "a0b47ba8bb4bdef18b24274535321635";
    const URL =
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
    

    // const getMovieInfo = () => {
    //   fetch(URL).then((response)=> response
    //   .json()
    //   .then((data)=>console.log('data >> ', data)))
    // };

    const getMovieInfo = async() => {
      const response = await fetch(URL);
      const json = await response.json();
      setMovieList(json.results);
      setLoading(false);
    }

    useEffect(() => {
        getMovieInfo();
    },[]);
    return (
      <div className="App">
        {
          loading ? <h1>loading...test</h1> : 
          
          <div className="movie-list">
          {
            movieList.map((elem) => {
              return (<Movie 
              key={elem.id} 
              id={elem.id} 
              title={elem.title} 
              poster={elem.poster_path} 
              release={elem.release_date} 
              avg={elem.vote_average}
              />);
          })
          }
          </div>
        }
      </div>
    );
}

export default Home;
