import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import "./Topbar.css"
function Topbar() {
    return (
        <div className='topBar'>

            <div className="topbarContainer">

                <div className="topbarLeft">
                    <span className="logo">
                        lamasocial
                    </span>
                </div>
                <div className="topbarCentre">
                    <div className="searchbar">
                        <SearchIcon className="searchIcon" />
                        <input placeholder="Search for friend,post or video" className="searchInput" />
                    </div>

                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>

                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <PersonIcon />
                            <span className="topbarIconBadge">1</span>
                        </div>

                        <div className="topbarIconItem">
                            <NotificationsIcon />
                            <span className="topbarIconBadge">2</span>
                        </div>

                        <div className="topbarIconItem">
                            <ChatIcon />
                            <span className="topbarIconBadge">3</span>
                        </div>
                    </div>

                    <img src="/Assets/img1.jpg" alt="" className="topbarImg" />

                </div>




            </div>

        </div>
    )
}

export default Topbar
