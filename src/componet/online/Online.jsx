import "./online.css";


export default function Online({User}) {
  return (
    <div>
      
          <li className="righbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./Assets/img4.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>

            </div>
            <span className="rightbarUsername"> {User.username} </span> 
          </li>
        
    </div>
  )
}
