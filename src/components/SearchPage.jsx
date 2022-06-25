import "./SearchPage.css";
import {TuneOutlined} from "@mui/icons-material";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className='searchPage' >
        <div className="searchPage__filter">
            <TuneOutlined />
            <h2>FILTERS</h2>
        </div>
        <hr className="searchPage__hr"/>
        <ChannelRow 
            image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Clever Programmer"
            verified
            subs="1.4M"
            videos="685"
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
        />
        <hr />
        <h4>Latest from Clever Programmer</h4>
        <VideoRow
            title="Make money with coding.. WITHOUT a college degree!"
            channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
            views="23K"
            timestamp="3 weeks ago"
            channel="Clever Programmer"
            image="https://picsum.photos/600/301"
            subs="1.4M"
            description="In this video, I go over 6 ways on how to make money as a developer even if you don't have a college degree. A lot of people have problems with this, but I think it's a great way to start your career."
        />
    </div>
  )
}

export default SearchPage