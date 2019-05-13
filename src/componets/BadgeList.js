import React from 'react'

import twitterIMG from '../images/twitter.png'
import './styles/BadgeList.css'
class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.Badge.map((Badge) => {
          return (
            <li className="Badge_item mb-4" key={Badge.id}>
                <figure className="Avatar_container">
                  <img className="Badge_avatar" src={Badge.avatarUrl} alt="avatar"/>
                </figure>

                <div className="Badge_info">
                  <h4 className="mb-0">
                    {Badge.firstName} {Badge.lastName}
                  </h4>

                  <div className="Badge_twitter">
                    <img className="twitterIMG" src={twitterIMG} alt="twitter logo"/>
                    <p className="mb-1"> @{Badge.twitter} </p>
                  </div>

                  <small className="mb-0"> {Badge.jobTitle} </small>
                </div>

            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgeList

