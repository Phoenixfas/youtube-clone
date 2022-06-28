import moment from "moment";
import Categories from "./Categories";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import {Link} from "react-router-dom"

function RecommendedVideos({videos}) {
  
  const dateCon = (date) => {
    const dateObj = new Date(date)
    return moment(dateObj).fromNow()
  }

  // const view = (id) => {
  //     fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyDSjpO42J6lBkm_IckY0tO0KXyY26SvTts`, {
  //         method: "GET",
  //         headers: {
  //             "Content-Type": "application/json"
  //         }
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //         return data.items[0].statistics.viewCount
  //     })
  // }
  // console.log(videos)
  return (
    <div className="recommendedVideos">
        <Categories border />
        <div className="recommendedVideos__videos">
          {videos.map((video) => (
            <Link to={`/watch/${video.id.videoId}/${video.snippet.title}`} key={video.id.videoId} className="recommendedVideos__link" >
              <VideoCard 
                  id={video.id.videoId}
                  title={video.snippet.title}
                  channel={video.snippet.channelTitle}
                  timestamp={dateCon(video.snippet.publishedAt)}
                  image={video.snippet.thumbnails.medium.url}
                  channelImage={video.snippet.thumbnails.medium.url}
                  view={video.views}
              />
            </Link>
            ))}
        </div>
    </div>
  )
}

export default RecommendedVideos