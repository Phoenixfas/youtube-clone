import "./VideoSide.css"
import {ThumbUpOutlined, ThumbDownOutlined, Reply, ContentCut, LibraryAdd, MoreHoriz
} from "@mui/icons-material"
import {Avatar} from "@mui/material"

function VideoSide({id, title}) {
    // const video = () => {
    //     fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyDSjpO42J6lBkm_IckY0tO0KXyY26SvTts`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         return data.items[0]
    //     })
    // }
    
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
                    <p>2,398,584 views • Jun 21, 2022</p>
                    <div className="videoSide__icons">
                        <div className="videoSide_icon"><ThumbUpOutlined /> <span>LIKE</span></div>
                        <div className="videoSide_icon"><ThumbDownOutlined /> <span>DISLIKE</span></div>
                        <div className="videoSide_icon"><Reply /> <span>SHARE</span></div>
                        <div className="videoSide_icon"><ContentCut /> <span>CLIP</span></div>
                        <div className="videoSide_icon"><LibraryAdd /> <span>SAVE</span></div>
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
                <div className="videoSide__sub">
                    <p>SUBSCRIBE</p>
                </div>
            </div>
            <p>Enjoy! Subscribe!</p>
            <p>Connect with us for more.</p>
        </div>
    </div>
  )
}

export default VideoSide