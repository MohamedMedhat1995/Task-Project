import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/" >Page1</Link>
        </li>
        <li>
            <Link to="/Page2" >Page2</Link>
        </li>
        <li>
            <Link to="/Page3" >Page3</Link>
        </li>
        <li>
            <Link to="/Page4" >Page4</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
