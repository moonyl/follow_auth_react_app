import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={"/"}>홈</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header