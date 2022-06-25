import "./VideoPlayer.css"
import VideoSide from "../components/VideoSide";
import RelatedVideoSide from "../components/RelatedVideoSide";
import { useParams} from "react-router-dom"

function VideoPlayer({videos}) {
  const { key, title } = useParams()
  return (
    <div className="videoPlayer">
        <VideoSide id={key} title={title} />
        <RelatedVideoSide videos={videos} />
    </div>
  )
}

export default VideoPlayer