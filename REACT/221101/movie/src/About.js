import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "./About.css";

const About =() => {
    const {id,} = useParams();
    const API_KEY = "a0b47ba8bb4bdef18b24274535321635";
    const URL =
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`;
    const POSTER_URL = "https://image.tmdb.org/t/p/original";
    const [detail,setDetail] = useState([]);
    console.log(detail);
    const getMovieAbout = async () => {
        const json = await(
            await fetch(URL)
            ).json();
            setDetail(json);
        }
        
        
        useEffect(()=>{
            getMovieAbout();
        },[])
        return (
        <div className="about-wrap">
            <h1 className="about-title"> {detail.title} </h1>
            <h4 className="about-tag"> {detail.tagline} </h4>
            {/* <p> select id : {detail.id} </p> */}
            <img className="about-img" src={POSTER_URL+detail.backdrop_path} />
            <p className="about-overview"> {detail.overview}</p>
        </div>
    )
}

export default About;