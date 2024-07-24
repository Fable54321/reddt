import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = ({ search, setSearch, threads, setThreads }) => {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <p>Reddit</p>
          <img
            src="https://www.redditinc.com/assets/images/site/Reddit_Icon_FullColor-1_2023-11-29-161416_munx.jpg"
            alt="the reddit logo"
          />
        </div>
        <SearchBar search={search} setSearch={setSearch} threads={threads} setThreads={setThreads} />
        <Link className="logoLink" to="">
        <img className="user" src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png" alt="the user's logo"/>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
