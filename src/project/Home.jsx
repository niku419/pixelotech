import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './components/MainPage'
import CustomizedTheme from './components/CustomizedTheme'

export default function Home() {
  return (
    <Router>
      <Switch>
        <CustomizedTheme>
          <Route exact path="/" component={MainPage}/>
        </CustomizedTheme>
      </Switch>
    </Router>
  )
}