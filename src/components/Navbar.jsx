

import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
            </ul>
        </nav>
    )
}