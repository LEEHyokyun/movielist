import React from 'react'
import './Movie.css'

function Movie({year, title, summary, image}) {
    return (
    <div className="movie">
        <img src={image} alt={title} title={title}/>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>
)}

export default Movie