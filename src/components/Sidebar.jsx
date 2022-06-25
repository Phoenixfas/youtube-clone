import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import {Home, Whatshot, ExploreOutlined, SubscriptionsOutlined, VideoLibraryOutlined, History , OndemandVideo, WatchLaterOutlined, ThumbUpAltOutlined, ExpandMoreOutlined} from "@mui/icons-material"

function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow selected Icon={Home} title="Home" />
        <SidebarRow Icon={ExploreOutlined} title="Explore" />
        <SidebarRow Icon={Whatshot} title="Trending" />
        <SidebarRow Icon={SubscriptionsOutlined} title="Subscription" />
        <hr />
        <SidebarRow Icon={VideoLibraryOutlined} title="Library" />
        <SidebarRow Icon={History} title="History" />
        <SidebarRow Icon={OndemandVideo} title="Your Videos" />
        <SidebarRow Icon={WatchLaterOutlined} title="Watch later" />
        <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
    </div>
  )
}

export default Sidebar