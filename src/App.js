import React from 'react'
import Axios from 'axios'
import axios from 'axios'

class App extends React.Component {

  state = {
    isLoading : true,
    //Bascially needed to be declared for data
    movies : []
  }

  getMovie = async () => {
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json')
  }

  componentDidMount(){
    this.getMovie()
}

  render(){
  const {isLoading} = this.state
  return (
    <div>{isLoading ? "Loading" : "Ready"}</div>
  );
}
}

export default App;
