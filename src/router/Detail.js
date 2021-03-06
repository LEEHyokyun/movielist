import React from 'react'

class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props
        if(location.state===undefined){
            //redirect
            history.push("/")
        }
    }
    render(){
        const {location} = this.props // not global variable, needed to be declared.
        return(
        <div>
            <span>{location.state.title}</span>
        </div>
        )
    }
}

export default Detail