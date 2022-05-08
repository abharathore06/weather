import React, { Component } from "react";
import PropTypes from "prop-types";
import './searchBox.css';

class SearchBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cityName : null,
    }
    this.handleInputSearch = this.handleInputSearch.bind(this);
  }


  cityNameUpdate(e) {
    this.setState({ cityName: e.target.value })
  }


  handleInputSearch() {
  console.log('handleInputSearch fired');
  this.props.citySearch(this.state.cityName);
  }


  render(){

    return(

      <div className="App-search">
        <input className='box' type="text" placeholder='Enter City Name...' value={this.state.cityName} onChange={e => this.cityNameUpdate(e)}/>
        <button onClick={this.handleInputSearch} className='searchBtn'>Search</button>
      </div>

    );
  }
} 


SearchBox.propTypes = {
  citySearch: PropTypes.func
};


export default SearchBox;