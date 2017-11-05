import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => 
<nav className="navbar navbar-expand-lg navbar-light bg-light  navbar-expand-sm">
  <a className="navbar-brand" href="#">NYT Search</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " >
    <ul className="navbar-nav navbar-right">
      <li className="nav-item">
        <Link to="/">Search</Link>
      </li>
      <li className="nav-item">
        <Link to="/saved">Saved</Link>
      </li>
    </ul>
  </div>
</nav>

export default Nav