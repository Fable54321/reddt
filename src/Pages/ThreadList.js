import React, { useState } from "react";
import { Link } from "react-router-dom";

const ThreadList = ({ threads, search }) => {

  const [isUpvote, setIsUpvote] = useState(false)
  const [isDownvote, setIsDownvote] = useState(false)
  
  const upVote = () => {
    if(!isUpvote){
      setIsUpvote(true)
      setIsDownvote(false)
    }
    else{
      setIsUpvote(false)
    }
    console.log(isUpvote)
  }

  const downVote = () => {
    if(!isDownvote){
      setIsDownvote(true)
      setIsUpvote(false)
    }
    else{
      setIsDownvote(false)
    }
    console.log(isDownvote)
  }



  if (threads) {
    return (
      <div className="threadContainer">
        <h1 style={{ textAlign: "center", flexBasis: "100%" }}>Popular today</h1>
        {threads
        .filter((thread) => {
          return search.toLowerCase() === ''
          ?thread
          :thread.title.toLowerCase().includes(search.toLowerCase())
        })
        .map((thread) => (
          <>
          <div className="buttonsAndBox">
          <div className="buttons">
            <button className="upButton" onClick={upVote}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={isUpvote ? "upVote-active":"upVote"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <button className="downButton" onClick={downVote}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={isDownvote ? "downVote-active" :"downVote"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            </div>
            <Link className="threadClick">
              <div className="threadBox" key={thread.id}>
                <h1>{thread.title}</h1>
                <p>{thread.body}</p>
              </div>
            </Link>
            </div>
          </>
        ))}
      </div>
    );
  } else {
    return <h1>Nothing matches the following search terms : {search}</h1>;
  }
};

export default ThreadList;
