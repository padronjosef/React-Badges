import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'
import ConfLogo from '../images/logo.png'
import Astronauts from '../images/avatar.png'

class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <div>
          <img className="Logo_home" src={ConfLogo} alt=""/>
          <h1>Badge <br/> Management <br/> System</h1>
          <Link className="mb-2 btn btn-primary" to="/Badges"> Start </Link>
        </div>

        <figure>
          <img className="Avatar_home" src={Astronauts} alt=""/>
        </figure>
      </div>
    )
  }
}

export default Home