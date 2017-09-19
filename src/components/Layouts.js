import React from 'react'
import {Link} from 'react-router-dom'

export const LayoutHome = (props) => (
  <div id="container">
    <ul id="menu">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">List</Link></li>
    </ul>
    <div id="wrapper">
      {props.children}
    </div>
  </div>
)

export const LayoutLogin = (props) => (
  <div id="container">
    <div id="wrapper">
      {props.children}
    </div>
  </div>
)
