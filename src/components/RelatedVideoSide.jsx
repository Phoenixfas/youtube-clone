import Categories from "./Categories"
import "./RelatedVideoSide.css"
import {Link, useParams} from "react-router-dom"
import moment from "moment"


function RelatedVideoSide({videos}){
    const dateCon = (date) => {
        const dateObj = new Date(date)
        return moment(dateObj).fromNow()
      }

    const { id } = useParams()
    const videosArr = videos.filter(video => video.id.videoId !== id)
    return(
        <div className="relatedVideoSide">
            <div className="relatedVideoSide__category">
                <Categories />
                <p></p>
                {videosArr.map((video) => {
                    return (
                        <Link to={`/watch/${video.id.videoId}/${video.snippet.title}/4857631/120783/${video.snippet.publishedAt}`} key={video.id.videoId} className="relatedVideoSide__link" >
                            <div className="relatedVideoSide__videoRow">
                                <div className="relatedVideoSide__videoRow__video">
                                    <img src={video.snippet.thumbnails.medium.url} alt="video" />
                                </div>
                                <div className="relatedVideoSide__videoRow__text">
                                    <h4>{video.snippet.title}</h4>
                                    <p>{video.snippet.channelTitle}</p>
                                    <p>4.9M views • {dateCon(video.snippet.publishedAt)}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default RelatedVideoSide