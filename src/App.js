import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export class App extends Component {
  apiKey =process.env.REACT_APP_API_KEY
  render() {
    return (
      <Router>
      <Navbar />
      <News apiKey={this.apiKey}/>
        <Routes>
      <Route exact path = "/" element={<News category={'general'} key="general" apiKey={this.apiKey}/> }/>
      <Route exact path = "/health" element={<News category={'health'} key="health" apiKey={this.apiKey}/> }/>
      <Route exact path = "/science" element={<News category={'science'} key="science" apiKey={this.apiKey}/> }/>
      <Route exact path = "/technology" element={<News category={'technology'} key="technology" apiKey={this.apiKey}/> }/>
      <Route exact path = "/sports" element={<News category={'sports'} key="sports" apiKey={this.apiKey}/> }/>
      <Route exact path = "/business" element={<News category={'business'} key="buisness" apiKey={this.apiKey}/> }/>
        </Routes>
      </Router>
    )
  }
}

export default App