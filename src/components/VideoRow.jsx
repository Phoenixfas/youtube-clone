import "./VideoRow.css"
import Avatar from "@mui/material/Avatar"

function VideoRow({title, views, timestamp, channel, image, description, channelImage}) {
  return (
    <div className="videoRow">
        <img src={image} alt="" />
        <div className="videoRow__text">
            <h4>{title}</h4>
            <p className="videoRow__headline">{views} views • {timestamp}</p>

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
  )
}

export default VideoRow