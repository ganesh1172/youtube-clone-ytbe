import React, { useState } from 'react';
import '../Header/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <Link to="/">
                    <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="Youtube Logo" />
                </Link>
            </div>
            <div className="header_input">
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} type="text" placeholder="Search" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton" />
                </Link>
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
                <Avatar alt="Ganesh" src="https://avatars1.githubusercontent.com/u/42414423?v=4" />
            </div>
        </div>
    )
}

export default Header
