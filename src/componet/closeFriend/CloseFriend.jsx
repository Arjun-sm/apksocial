import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
                 <img src="/Assets/img2.jpg" alt="" className="sidebarFriendImg" />
                 <span className="sidebarFriendName">{user.username} </span>
            </li>
  );
}

