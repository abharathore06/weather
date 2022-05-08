import React, { Component } from 'react'


class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div>
        <header className="App-header">
            <h1>Weather App</h1>
        </header>
      </div>
    );
  }
}


export default Header