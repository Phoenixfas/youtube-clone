import { useState } from "react"
import "./Header.css"
import { VideoCallOutlined, Menu, Search, AppsOutlined, NotificationsOutlined, Mic } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux"
import {toggler} from "../redux/sidebarToggler"

function Header() {

  const [inputSearch, setInputSearch] = useState("")
  const dispatch = useDispatch()

  return (
    <div className="header">
      <div className="header__left">
          <Menu className="header__sidebarToggle" onClick={() => dispatch(toggler())} />
        <Link to="/">
        <img 
            className="header__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
            alt="logo" 
        />
        </Link>
      </div>
      <div className="header__inputHolder">
        <div className="header__input">
          <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
          <Link to={`/search/${inputSearch}`} className="header__inputButton">
            <Search className="header__inputButton_icon" />
          </Link>
        </div>
        <div className="header__inputMic">
          <Mic className="header__inputMic_icon" />
        </div>
      </div>
      <div className="header__icons">
        <VideoCallOutlined className="header__icon" />
        <AppsOutlined className="header__icon" />
        <NotificationsOutlined className="header__icon" />
        <Avatar
            style={{width: "30px", height: "30px"}}
            alt="avatar"
            src="https://avatars.githubusercontent.com/u/72998972?v=4"
        />
      </div>
    </div>
  )
}

export default Header