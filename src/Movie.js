import React from 'react'
import './Movie.css'

function Movie({year, title, summary, image, genres}) {
    return (
    <div className="movie">
        <img src={image} alt={title} title={title}/>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">{genres.map((genre,index) => <li className="genres_genre" key={index}>{genre}</li>)}</ul>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>
)}

export default Movie