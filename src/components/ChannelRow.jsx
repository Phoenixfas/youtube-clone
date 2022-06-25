import "./ChannelRow.css";
import {Avatar} from "@mui/material";
import { CheckCircleSharp, NotificationsOutlined } from "@mui/icons-material";

function ChannelRow({image, channel, verified, subs, videos, description}) {
  return (
    <div className="channelRow">
        <Avatar className="channelRow__avatar" src={image} alt={channel} />
        <div className="channelRow__text">
            <div className="channelRow__textMain">
                <h4>{channel} {verified && <CheckCircleSharp className="channelRow__verified" />}</h4>
                <p className="channelRow__subs">{subs} subscribers • {videos} videos</p>
                <p>{description}</p>
            </div>
            <div className="channelRow__Subscribe">
                <p>SUBSCRIBED</p>
                <span className="channelRow__notifications"><NotificationsOutlined /></span>
            </div>
        </div>
    </div>
  )
}

export default ChannelRow