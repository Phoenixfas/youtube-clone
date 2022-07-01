import "./ChannelRow.css";
import {Avatar} from "@mui/material";
import { CheckCircleSharp, NotificationsOutlined } from "@mui/icons-material";
import { useState } from "react";

function ChannelRow({image, channel, verified, subs, videos, description}) {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <div className="channelRow">
        <Avatar className="channelRow__avatar" src={image} alt={channel} />
        <div className="channelRow__text">
            <div className="channelRow__textMain">
                <h4>{channel} {verified && <CheckCircleSharp className="channelRow__verified" />}</h4>
                <p className="channelRow__subs">{subs} subscribers • {videos} videos</p>
                <p className="channelRow__desc">{description.substr(0, 150) + "..."}</p>
            </div>
            <div className={`channelRow__Subscribe ${subscribed ? "subscribed" : ""}`}>
                <p onClick={() => setSubscribed(!subscribed)}>{subscribed ? "SUBSCRIBED" : "SUBSCRIBE"}</p>
                <span className="channelRow__notifications"><NotificationsOutlined /></span>
            </div>
        </div>
    </div>
  )
}

export default ChannelRow