import React from "react"
import "../App.css";
import { NavComponents } from './NavComponents'
// import { Link, useNavigate } from './react-router-dom'

const NavBar = () => {
    // const navigate = useNavigate()
    return (
        <div className="Sidebar">
            <ul>
            {
                NavComponents.map((comp, key) => {
                    return (
                        <li key={key}
                        onClick={() => {window.location.pathname = comp.Link} }
                        >
                            <div>{comp.icon}</div>
                            <div>{comp.title}</div>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}
export default NavBar