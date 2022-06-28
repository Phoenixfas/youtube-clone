import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import VideoPlayer from "./pages/VideoPlayer";
// import { useEffect, useState } from "react";
import videos from "./sampleData/videos";

function App() {
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://youtube.googleapis.com/youtube/v3/search?part=snippet&contentDetails&statistics&channelId=UCydlocDyvRtFmMffKytKqgQ&maxResults=24&type=video&key=AIzaSyDSjpO42J6lBkm_IckY0tO0KXyY26SvTts",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: "AIzaSyDSjpO42J6lBkm_IckY0tO0KXyY26SvTts",
  //         Accept: "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((json) => setVideos(json.items));
  // }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home videos={videos} />} />
          <Route
            path="/watch/:key/:title"
            element={<VideoPlayer videos={videos} />}
          />
          <Route
            path="/search/:searchTerm"
            videos={videos}
            element={<Search />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
