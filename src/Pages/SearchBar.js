import React, { useState } from 'react'




const SearchBar = ({ search, setSearch, threads, setThreads }) => {

  
 const handleSubmit = (e) => {
  e.preventDefault();

  console.log(threads)

  setThreads((prev) => {
    return prev.filter((thread) => {
      return thread.title.toLowerCase().includes(search.toLowerCase());
    });
  });

  
  
  
 }

 
  return (
    <div className='searchBar'>
       <p>Search:</p> 
      <form onSubmit={handleSubmit} >
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search here' >
      </input>
      </form>
    </div>
  )
}

export default SearchBar
