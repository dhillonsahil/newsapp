import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"> Bulletin Insights</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/technology">technology</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/business">Buisness</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link active" to="/health">Health</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link active" to="/science">Science</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
  }
}

export default Navbar