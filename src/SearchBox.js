import React from 'react'

const SearchBox = () => {
  return (
    <div className='App-search'>
        <input className='box' type="text" placeholder='Enter City Name...'/>
        <button className='searchBtn'>Search</button>
    </div>
  )
}

export default SearchBox