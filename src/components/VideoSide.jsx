import "./VideoSide.css"
import {ThumbUp, ThumbUpOutlined, ThumbDownOutlined, Reply, ContentCut, LibraryAdd, MoreHoriz
} from "@mui/icons-material"
import {Avatar} from "@mui/material"
import { useState } from "react";
import moment from "moment"
import { useParams } from "react-router-dom";

// const video = {
//     id: {
//       videoId: "x-IW5zscvsfdvdQQX_c",
//     },
//     snippet: {
//       title: "The Best of The Best",
//       channelTitle: "TheBestOfTheBest",
//       publishedAt: "2020-01-01T00:00:00Z",
//       thumbnails: {
//         medium: {
//           url: "https://picsum.photos/400/250",
//         },
//       },
//     },
//     statistics:{
//         viewCount: 1000000,
//         likeCount: 13000,
//     },
//     description: "The best of the best is the best of the best.",
//     likes: "1,000,000",
//     duration: "2:30",
//   };

function VideoSide() {
    const { id, title, view, like, date } = useParams();

    const dateCon = (date) => {
        const dateObj = new Date(date)
        return moment(dateObj).format("ll");
      }
      const shorten = (text, maxLength) => {
        return text.length > maxLength ? text.substr(0, maxLength) : text;
      }
      const toStr = (num) => {
        return num.toString()
      }

    const [liked, setLiked] = useState(false)
    const [subscribed, setSubscribed] = useState(false);
    
      const likes = () =>{
            return like > 1000000 ? shorten(toStr(like/1000000), 3) + "M" : like > 1000 ? shorten(toStr(like/1000), 3) + "K" : like;
        }
      
  return (
    <div className="videoSide">
        <div className="videoSide__videoHolder">
            <iframe 
                className="videoSide__video"
                id="existing-iframe-example"
                title="video"
                width="640" height="360"
                src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
                frameBorder="0"
                style={{backgroundColor: "#aaa"}}
                
            ></iframe>

            <div className="videoSide__textMain">
                <h4>{title}</h4>
                <div className="videoSide__text">
                    <p>{Intl.NumberFormat('en-US').format(view)} views • {dateCon(date)}</p>
                    <div className="videoSide__icons">
                        <div className="videoSide_icon" onClick={() => setLiked(!liked)}>{liked ? <ThumbUp className="videoSide_iconIcon" /> : <ThumbUpOutlined className="videoSide_iconIcon" />} <span>{likes()}</span></div>
                        <div className="videoSide_icon"><ThumbDownOutlined className="videoSide_iconIcon" /> <span>DISLIKE</span></div>
                        <div className="videoSide_icon"><Reply className="videoSide_iconIcon" /> <span>SHARE</span></div>
                        <div className="videoSide_icon"><ContentCut className="videoSide_iconIcon" /> <span>CLIP</span></div>
                        <div className="videoSide_icon"><LibraryAdd className="videoSide_iconIcon" /> <span>SAVE</span></div>
                        <MoreHoriz />
                    </div>
                </div>
            </div>
        </div>
        <div className="videoSide__channelRow">
            <div className="videoSide__channel">
                <div className="videoSide__detail">
                    <Avatar style={{width: "48px", height: "48px"}} alt="avatar" src="https://yt3.ggpht.com/ytc/AKedOLTvqcaX1-5pAOkVSismn7kR4nj7hiPkikrDo2gtTg=s48-c-k-c0x00ffffff-no-rj-mo" />
                    <div className="videoSide__info">
                        <h4>Teddy Afro</h4>
                        <p>706K subscribers</p>
                    </div>
                </div>
                <div className={`videoSide__sub ${subscribed ? "subscribed" : ""}`}>
                    <p onClick={() => setSubscribed(!subscribed)}>{subscribed ? "SUBSCRIBED" : "SUBSCRIBE"}</p>
                </div>
            </div>
            <p>Enjoy! Subscribe!</p>
            <p>Connect with us for more.</p>
        </div>
    </div>
  )
}

export default VideoSide