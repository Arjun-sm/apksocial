import "./profile.css"
import Topbar from "../../../componet/topbar/Topbar";

import Sidebar from "../../../componet/sidebar/Sidebar";
import Rightbar from "../../../componet/rightbar/Rightbar";
import Feed from "../../../componet/Feed/feed";

export default function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRighr">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="Assets/img4.jpg" alt="" className="profileCoverImg" />
                            <img src="Assets/img4.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName"> Arjun Prajapt</h4>
                            <span className="profileInfoDesc">Hello my friends! </span>
                        </div>
                        
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </div>
    )
}
