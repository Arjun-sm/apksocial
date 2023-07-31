
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';

import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
export default function Share() {
  return (
    <div>
      <div className="share">

        <div className="shareUpper">

          <div className="shareProfile">
            <img src="\Assets\feed4.jpg" alt="" className="shareImg" />

            <input
              placeholder="Whats in your mind" type="string" />

          </div>
          <div className="line"><hr /></div>



          <div className="Material">
            <div className="MaterialIcon">
              <PermMediaIcon htmlColor="blue" ></PermMediaIcon>
              <div className="IconName">
                Photo or Video
              </div>
            </div>

            <div className="MaterialIcon">
              <LabelIcon htmlColor="green"></LabelIcon>
              <div className="IconName">
                Tag
              </div>
            </div>

            <div className="MaterialIcon">
              <LocationOnIcon htmlColor="golden"></LocationOnIcon>
              <div className="IconName">
                Location
              </div>
            </div>



            <div className="MaterialIcon">
              <SentimentSatisfiedSharpIcon htmlColor="tomato"></SentimentSatisfiedSharpIcon>
              <div className="IconName">
                Feeling
              </div>
            </div>

            <button className="shareButton">share</button>

          </div>


        </div>

      </div>


      


    </div>
  )
}
