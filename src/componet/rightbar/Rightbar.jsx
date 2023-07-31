import React from 'react'
import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdaContainer">
          <img className='birthdayImg' src="./Assets/cake.png" alt="" />
          <div className="birthdayText">
            <b>Arjun </b> and  <b>3 other friends</b> have a birthday today
          </div>

        </div>

        <img src="./Assets/img3.webp" alt="" className="righbarAd" />
        <h4 className="rightbarTitle"> Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} User={u} />
          ))}
        </ul>

      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User information title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">Udaipur</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">Jaipur</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle"> User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="./Assets/feed4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="righbarFollowingName"> Tushar kumar</span>
          </div>

          <div className="rightbarFollowing">
            <img src="./Assets/feed4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="righbarFollowingName"> Tushar kumar</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./Assets/feed4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="righbarFollowingName"> Tushar kumar</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./Assets/feed4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="righbarFollowingName"> Tushar kumar</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./Assets/feed4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="righbarFollowingName"> Tushar kumar</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./Assets/feed4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="righbarFollowingName"> Tushar kumar</span>
          </div>
          
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}

      </div>
    </div>
  )
}

export default Rightbar
