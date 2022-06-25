import Categories from "./Categories";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import {Link} from "react-router-dom"

function RecommendedVideos({videos}) {
  // const shorten = (text, maxLength) => {
  //   return text.length > maxLength ? text.substr(0, maxLength) : text;
  // }
  // const toStr = (num) => {
  //   return num.toString()
  // }
  const dateCon = (date) => {
    const dateObj = new Date(date)
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    return year - new Date().getFullYear() === 0 ? `${12 - month} months ago`: year - new Date().getFullYear() > 0 ? `${year - new Date().getFullYear()} years ago` : `${30 - day} days ago`
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
                  title={video.snippet.title}
                  channel={video.snippet.channelTitle}
                  // views={`${video.statistics.viewCount > 1000000 ? shorten(toStr(video.statistics.viewCount/1000000), 4) + "M" : video.statistics.viewCount > 1000 ? shorten(toStr(video.statistics.viewCount/1000), 4) + "K" : video.statistics.viewCount } views`}
                  timestamp={dateCon(video.snippet.publishedAt)}
                  image={video.snippet.thumbnails.medium.url}
                  channelImage={video.snippet.thumbnails.medium.url}
              />
            </Link>
            ))}
        </div>
    </div>
  )
}

export default RecommendedVideos