import React from 'react'
import './styles/NavBar.css'
import logo from '../images/logo.svg'

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar_brand" href="https://platzi.com">
            <img className="Navbar_brand-logo" src={logo} alt="logo"/>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    )
  }
}

export default NavBar

