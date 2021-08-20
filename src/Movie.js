import React from 'react'

function Movie({year, title, summary}) {
    return (
    <>
    <h4>{year}</h4>
    <h3>{title} : </h3>
    <h2>{summary}</h2>
    </>
)}

export default Movie