import React from 'react';
import './SearchBox.css';
import FetchData from './FetchData';
const SearchBox = () => {
  return (
    <div className='App-search'>
        <input 
        className='box' 
        type="text" 
        placeholder='Enter City Name...'/>
        <button className='searchBtn' onClick={FetchData}>Search</button>
    </div>
  )
}

export default SearchBox



// import React from "react";
// import ReactDOM from "react";

// class SearchBox extends React.Component{
//   render(){
//     return(
//       <div>
//           <input className='box' type="text" placeholder='Enter City Name...'/>
//           <button className='searchBtn'>Seadsrch</button>
//       </div>
//     );
//   }
// } 

// ReactDOM.render(<SearchBox />, document.getElementById('root'));