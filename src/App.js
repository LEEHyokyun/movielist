import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    isLoading : true,
    //Bascially needed to be declared for data
    movies : []
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false})
  },3000)
}

  render(){
  const {isLoading} = this.state
  return (
    <div>{isLoading ? "Loading" : "Ready"}</div>
  );
}
}

export default App;
