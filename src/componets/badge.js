import React from 'react';

import "./styles/badge.css"
import hero from '../images/badge-header.svg'
// import avatar from '../images/avatar.png'

class Badge extends React.Component {
  render() {

    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={hero} alt="hero"></img>
        </div>

        <div className="Badge_section-name">
          <img className="Badge_avatar" src={this.props.avatarUrl} alt="avatar"></img>
          <h1> {this.props.firstName} <br/> {this.props.lastName} </h1>
        </div>

        <div className="Badge_section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge_footer">
          {this.props.webPage}
        </div>
      </div>
    )
  }
}

export default Badge;