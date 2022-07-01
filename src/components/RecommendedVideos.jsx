import moment from "moment";
import Categories from "./Categories";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos({videos}) {
  
  const dateCon = (date) => {
    const dateObj = new Date(date)
    return moment(dateObj).fromNow()
  }

  // console.log(videos)
  return (
    <div className="recommendedVideos">
        <Categories border />
        <div className="recommendedVideos__videos">
          {videos.map((video) => (
            
              <VideoCard 
                  key={video.id.videoId}
                  id={video.id.videoId}
                  title={video.snippet.title}
                  channel={video.snippet.channelTitle}
                  timestamp={dateCon(video.snippet.publishedAt)}
                  image={video.snippet.thumbnails.medium.url}
                  channelImage="https://yt3.ggpht.com/ytc/AKedOLTvqcaX1-5pAOkVSismn7kR4nj7hiPkikrDo2gtTg=s176-c-k-c0x00ffffff-no-rj-mo"
                  date={video.snippet.publishedAt}
              />
            ))}
        </div>
    </div>
  )
}

export default RecommendedVideos