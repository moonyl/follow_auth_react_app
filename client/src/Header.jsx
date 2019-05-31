import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <ul>
            <li>
                <Link to={"/"}>홈</Link>
            </li>
        </ul>
    </div>
);

export default Header