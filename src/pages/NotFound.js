import React from 'react'

import './styles/NotFound.css'
import nfimg from '../images/error.svg'

function NotFound() {
  return (
    <div className="Main-notfound">
      <figure>
        <img className="Notfound-img" src={nfimg} alt="404 img"/>
      </figure>
      <div>
        <h1>¿ Por que eres asi ?</h1>
        <p>Ya me rompiste la pagina :(</p>
      </div>
    </div>
  )
}

export default NotFound