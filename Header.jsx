import React from "react"
import { Link } from "react-router-dom"
export default function Header(){
    return (
        <nav className="navbar">
        <Link to="/"> Counter</Link>
        <Link to="/form"> Form</Link>
        <Link to="/editor"> Text Editor</Link>
        </nav>
    )
}
