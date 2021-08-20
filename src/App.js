import React from 'react'
import axios from 'axios'
import Movie from './Movie'

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
    <div>{isLoading ? "Loading" : movies.map((movie_list) => {
      return <Movie key={movie_list.id} year={movie_list.year} title={movie_list.title} summary={movie_list.summary} /> 
    })}</div>
  );
}
}

export default App;
