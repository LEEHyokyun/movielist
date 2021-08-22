import React from 'react'
import './Movie.css'
import {Link} from 'react-router-dom'

function Movie({year, title, summary, image, genres}) {
    return (
    <Link to={{
        pathname: "/moviedetail",
        state:{
            year, title, summary, image, genres
        }
    }}>
    <div className="movie">
        <img src={image} alt={title} title={title}/>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">{genres.map((genre,index) => <li className="genres_genre" key={index}>{genre}</li>)}</ul>
            <p className="movie_summary">{summary.slice(0,50)}</p>
        </div>
    </div>
    </Link>
)}

export default Movie