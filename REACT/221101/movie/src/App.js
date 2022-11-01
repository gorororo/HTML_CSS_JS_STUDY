import "./App.css";
import { useState,useEffect } from "react";

const Movie = (props) =>{
  const POSTER_URL = "https://image.tmdb.org/t/p/original";
  let {title,poster} = props;
  
  return (
    <div className="movie">
      <img className="poster" src={POSTER_URL+poster} alt={title}/>
      <h2>{title}</h2>
    </div>
    )
};

function App() {
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
              return (<Movie key={elem.id} title={elem.title} poster={elem.poster_path}/>);
          })
          }
          </div>
        }
      </div>
    );
}

export default App;
