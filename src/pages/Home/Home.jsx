import React from 'react'

import "./Home.css";

import Topbar from '../../componet/topbar/Topbar';

import Sidebar from '../../componet/sidebar/Sidebar';
import Rightbar from '../../componet/rightbar/Rightbar';
import Feed from '../../componet/Feed/feed';

function Home() {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </div>
    </div>
  )
}

export default Home;
