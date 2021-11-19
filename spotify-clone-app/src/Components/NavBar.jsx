import React from "react"
import "../App.css";
// import {NavComponents} from './NavComponents'
// import { Link, useNavigate } from './react-router-dom'
// import HomeIcon from '@mui/icons-material/Home';
// import Spotify_Logo_RGB_White from './'

const NavBar = () => {
    // const navigate = useNavigate()
    return (
        // <div className="Sidebar">
        //     <ul>
        //     {
        //         NavComponents.map((comp, key) => {
        //             return (
        //                 <li key={key}
        //                 >
        //                     {/* <div>{comp.icon}</div> */}
        //                     <div>{comp.title}</div>
        //                 </li>
        //             )
        //         })
        //     }
        //     </ul>
        // </div>
        <div className="Sidebar">
            <ul className="list">
                {/* <li>{Spotify_Logo_RGB_White.png}</li> */}
                <li className="navItem">
                    {/* <div>{HomeIcon}</div> */}
                    <div>Home</div>
                </li>
                <li className="navItem">
                    {/* <div>{HomeIcon}</div> */}
                    <div>Search</div>
                </li>
                <li className="navItem">
                    {/* <div>{HomeIcon}</div> */}
                    <div>Your Library</div>
                </li>
                <li className="navItem">
                    {/* <div>{HomeIcon}</div> */}
                    <div>Create Playlist</div>
                </li>
                <li className="navItem">
                    {/* <div>{HomeIcon}</div> */}
                    <div>Liked Songs</div>
                </li>

                <li className="songNavItem">
                    {/* <div>{HomeIcon}</div> */}
                    <div>Songs</div>
                </li>
                <li className="songNavItem">
                    {/* <div>{HomeIcon}</div> */}
                    <div>Songs</div>
                </li>
                <li className="songNavItem">
                    {/* <div>{HomeIcon}</div> */}
                    <div>Songs</div>
                </li>
                <li className="songNavItem">
                    {/* <div>{HomeIcon}</div> */}
                    <div>Songs</div>
                </li>
                <li className="songNavItem">
                    {/* <div>{HomeIcon}</div> */}
                    <div>Songs</div>
                </li>
            </ul>
        </div>

    )
}
export default NavBar