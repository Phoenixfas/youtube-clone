import "./SearchPage.css";
import {TuneOutlined} from "@mui/icons-material";
// import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import moment from "moment"
import { useState, useEffect } from "react";

function SearchPage({query}) {
  const dateCon = (date) => {
    const dateObj = new Date(date)
    return moment(dateObj).fromNow()
  }

// 
const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyDSjpO42J6lBkm_IckY0tO0KXyY26SvTts`,
      {
        method: "GET",
        headers: {
          Authorization: "AIzaSyDSjpO42J6lBkm_IckY0tO0KXyY26SvTts",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setVideos(json.items));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='searchPage' >
        <div className="searchPage__filter">
            <TuneOutlined />
            <h2>FILTERS</h2>
        </div>
        <hr className="searchPage__hr"/>
        {/* <ChannelRow 
            image="https://yt3.ggpht.com/ytc/AKedOLTvqcaX1-5pAOkVSismn7kR4nj7hiPkikrDo2gtTg=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Teddy Afro"
            verified
            subs="749K"
            videos="322"
            description="Welcome to the official Teddy Afro YouTube channel. 

            Tewodros Kassahun, better known by his stage name of Teddy Afro, is an iconic Ethiopian pop star who has dominated the national music scene for the last decade and a half.
            
            Since signing with an Ethiopian record label in 2001, the Ethiopian music icon officially released albums are: Abugida (2001), Yasteseryal (2005), Yasteseryal Edition 2 (2005), Tikur Sew (2012) and Ethiopia (2017). His last album Ethiopia, became the most selling album of all times selling 600,000 copies on the day it was released. The album was also on top of billboard's world music chart, #1 on CDBaby and Itunes album sells, which made it the first album in the nations history."
        />
        <hr /> */}
        <h4>{"Latest from " + query}</h4>
        {videos.map((video, index) => (
            <VideoRow
                key={index}
                id={video.id.videoId}
                title={video.snippet.title}
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTvqcaX1-5pAOkVSismn7kR4nj7hiPkikrDo2gtTg=s176-c-k-c0x00ffffff-no-rj-mo"
                views={video.views}
                timestamp={dateCon(video.snippet.publishedAt)}
                channel={video.snippet.channelTitle}
                image={video.snippet.thumbnails.medium.url}
                date={video.snippet.publishedAt}
                description={video.snippet.description}
            />
        ))}
        
    </div>
  )
}

export default SearchPage