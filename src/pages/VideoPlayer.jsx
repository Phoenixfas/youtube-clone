import "./VideoPlayer.css"
import VideoSide from "../components/VideoSide";
import RelatedVideoSide from "../components/RelatedVideoSide";

function VideoPlayer({videos}) {
  return (
    <div className="videoPlayer">
        <VideoSide />
        <RelatedVideoSide videos={videos} />
    </div>
  )
}

export default VideoPlayer