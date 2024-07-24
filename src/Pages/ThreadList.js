import React from 'react'
import { Link } from 'react-router-dom'



const ThreadList = ({ threads, search }) => {

    
      
if(threads.length > 1){
  return (
    <div className='threadContainer'> 
    <h1 style={{textAlign:'center'}}>Popular today</h1>
      {threads.map((thread) => (
        <Link className='threadClick'>
        <div className='threadBox' key={thread.id}>
            <h1>{thread.title}</h1>
            <p>{thread.body}</p>
        </div>
        </Link>
      ))}
    </div>
  )
 }
 else{
    return (
        <h1>Nothing matches the following search terms : {search}</h1>
    )
 }
}


export default ThreadList
