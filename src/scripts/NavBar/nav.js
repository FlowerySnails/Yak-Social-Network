import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import '../../styles/NavBar/nav.css';
import SearchBar from './search.js';


class NavBar extends Component {
    render() {
        return (
            <nav className="mainNavigation shoNuff" id="myId">
                <Link to="/">Home</Link>
                <Link to="/">Profile</Link>
                <Link to="/">Notifications</Link>
                {/* <div className="search"> */}
                <SearchBar />   
                {/* </div> */}
                <Link to="/">Logout</Link>
            </nav>
        );
    }
}

export default NavBar;