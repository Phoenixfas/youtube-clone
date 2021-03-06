import { Avatar } from '@mui/material'
import "./VideoCard.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function VideoCard({id, image, view, title, channel, timestamp, channelImage, date}) {

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
          setLikesCount(data.items[0].statistics.likeCount)
      })

      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


// 

  return (
    <>
      <Link to={`/watch/${id}/${title}/${viewsCount}/${likesCount}/${date}`}  className="videoCard__link" >
        <div className='videoCard'>
            <img className='videoCard__thumbnail' src={image} alt="" />
            <div className="videoCard__info">
                <Avatar 
                    className='videoCard__avatar'
                    src={channelImage} 
                    alt={channel}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{`${viewsCount > 1000000 ? shorten(toStr(viewsCount/1000000), 3) + "M" : viewsCount > 1000 ? shorten(toStr(viewsCount/1000), 3) + "K" : viewsCount } views`} • {timestamp}</p>
                </div>
            </div>
        </div>
      </Link>
    </>
  )
}

export default VideoCard