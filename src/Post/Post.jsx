import  "./post.css"
import { MoreVert } from "@mui/icons-material"

import { Users } from "../dummyData"
import { useState } from "react"

// The user data is copy from dummy data
export default function Post({post}) {
  const [like, setlike] = useState(post.like)
  const [isliked, setIsLiked] = useState(false)

  const likeHandler  =() => {
    setlike(isliked ? like-1 : like+1) 
    setIsLiked(!isliked)
  }
  return (
    <div>
      <div className="post"> 
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/Assets/img5.jpg" alt="" />
                    <span className="PostUserName"> 
                    {Users.filter((u) => u.id === post?.userId)[0].username} </span>
                    <span   className="postDate">{post.date} </span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div> 
            </div>
            <div className="postCentre">
              <span className="postText">{post?.desc} </span>
              <img src="/Assets/img5.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img src="/Assets/like.jpg" alt="" onClick={likeHandler} className="likeIcon" />
                <img src="/Assets/heart.jpeg" alt="" onClick={likeHandler} className="likeIcon" />
                <span className="postImageCounter"> {like} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText"> {post.comment} comments</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
