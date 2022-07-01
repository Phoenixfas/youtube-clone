import "./VideoRow.css"
import Avatar from "@mui/material/Avatar"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function VideoRow({id, title, timestamp, channel, image, description, channelImage, date}) {

  const [viewsCount, setViewsCount] = useState(0)
  const [likesCount, setLikesCount] = useState(0)

  const shorten = (text, maxLength) => {
    return text.length > maxLength ? text.substr(0, maxLength) : text;
  }
  const toStr = (num) => {
    return num.toString()
  }

  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyDSjpO42J6lBkm_IckY0tO0KXyY26SvTts`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then(res => res.json())
      .then(data => {
          setViewsCount(data.items[0].statistics.viewCount);
          setLikesCount(data.items[0].statistics.likeCount);
      })

      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <>
      <Link to={`/watch/${id}/${title}/${viewsCount}/${likesCount}/${date}`}  className="videoRow__link">
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h2 className="videoRow__title" >{title}</h2>
                <p className="videoRow__headline">{`${viewsCount > 1000000 ? shorten(toStr(viewsCount/1000000), 3) + "M" : viewsCount > 1000 ? shorten(toStr(viewsCount/1000), 3) + "K" : viewsCount } views`} • {timestamp}</p>

                <div className="videoRow__info">
                  <Avatar 
                      className='videoRow__avatar'
                      src={channelImage} 
                      alt={channel}
                  />
                  <div className="videoRow__name">
                      <p>{channel}</p>
                  </div>
                </div>

                <p className="videoRow__description">{description}</p>
            </div>
        </div>
      </Link>
    </>
  )
}

export default VideoRow