import React from 'react'
import axios from 'axios'
import Movie from './Movie'

import './App.css'

class App extends React.Component {

  state = {
    isLoading : true,
    //Bascially needed to be declared for data
    movies : []
  }

  getMovie = async () => {
    //const movies = await axios.get('https://yts.mx/api/v2/list_movies.json')
    const {data : 
      {data : 
        {movies}
      }} 
      = await axios.get('https://yts.mx/api/v2/list_movies.json')
      this.setState({movies, isLoading : false}) 
      //axios data is adapted to state array, "movies" (movies : movies)
      // isLoading will be false
  }

  componentDidMount(){
    this.getMovie()
}

  render(){
  const {isLoading, movies} = this.state
  return (
    <section className="container">
    {isLoading ? (
      <div className="loader">
        <span className="loader_text">Now Loading</span>
      </div>
    ) : (
      <div className="movies">
      {movies.map((movie_list) => {
      return <Movie key={movie_list.id} year={movie_list.year} title={movie_list.title} summary={movie_list.summary} image={movie_list.medium_cover_image} /> 
    })}
    </div>
    )}
    </section>
  );
}
}

export default App;
