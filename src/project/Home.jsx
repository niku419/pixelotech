import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './components/MainPage'
import CustomizedTheme from './components/CustomizedTheme'

export default function Home() {
  return (
    <Router>
      <Routes>
        <CustomizedTheme>
          <Route exact path="/" component={MainPage}/>
        </CustomizedTheme>
      </Routes>
    </Router>
  )
}