import React from 'react'

import './styles/Footer.css'

class NavBar extends React.Component {
  render() {
    return (
      <footer id="footer" className="pt-4">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-4 col-md pb-4"><a href="https://www.linkedin.com/in/josepaf/">Linkedin</a></div>
          <div className="col-4 col-md pb-4"><a href="https://www.facebook.com/padronjosef">Facebook</a></div>
          <div className="col-4 col-md pb-4"><a href="https://github.com/padronjosef">GitHub</a></div>
          <div className="col-4 col-md pb-4"><a href="https://www.instagram.com/padronjosef/">Instagram</a></div>
          <div className="col-4 col-md pb-4"><a href="https://twitter.com/padronjosef">Twitter</a></div>
        </div>
      </div>
    </footer>
    )
  }
}

export default NavBar