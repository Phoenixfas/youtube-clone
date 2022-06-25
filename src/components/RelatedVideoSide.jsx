import Categories from "./Categories"
import "./RelatedVideoSide.css"
import {Link, useParams} from "react-router-dom"


function RelatedVideoSide({videos}){
    const { key } = useParams()
    const videosArr = videos.filter(video => video.id.videoId !== key)
    return(
        <div className="relatedVideoSide">
            <div className="relatedVideoSide__category">
                <Categories />
                <p></p>
                {videosArr.map((video) => (
                    <Link to={`/watch/${video.id.videoId}/${video.snippet.title}`} key={video.id.videoId} className="relatedVideoSide__link" >
                        <div className="videoRow">
                            <div className="videoRow__video">
                                <img src={video.snippet.thumbnails.medium.url} alt="video" />
                            </div>
                            <div className="videoRow__text">
                                <h4>{video.snippet.title}</h4>
                                <p>{video.snippet.channelTitle}</p>
                                <p>2.9M views • 1 year ago</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default RelatedVideoSide