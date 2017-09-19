import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from './components/Home'
import List from './components/List'
import Login from './components/Login'
import {LayoutHome, LayoutLogin} from './components/Layouts'


class App extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <Router>
        <div>
          <Route exact path="/"      render={() => <LayoutHome><Home/></LayoutHome> } />
          <Route exact path="/list"  render={() => <LayoutHome><List/></LayoutHome> } />
          <Route exact path="/login" render={() => <LayoutLogin><Login/></LayoutLogin> } />
        </div>
      </Router>
    )
  }
}
export default App
