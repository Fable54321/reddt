import React, { useState } from 'react'




const SearchBar = ({ search, setSearch, threads, setThreads }) => {

  


  
  
  
 

 
  return (
    <div className='searchBar'>
       <p>Search:</p> 
      <form>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search here' >
      </input>
      </form>
    </div>
  )
}

export default SearchBar
