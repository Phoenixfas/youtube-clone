import "./Home.css"
import RecommendedVideos from '../components/RecommendedVideos'
import Sidebar from '../components/Sidebar'


function Home({videos}) {

  return (
    <div className='home'>
        <Sidebar />
        <RecommendedVideos videos={videos} />
    </div>
  )
}

export default Home