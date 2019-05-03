import React from 'react'

import twitterIMG from '../images/twitter.png'
import './styles/BadgeList.css'
class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.Badge.map((Badge) => {
          return (
            <li className="Badge_item" key={Badge.id}>
              <div className="row mb-3">
                <div className="col-2">
                  <img className="Badge_avatar" src={Badge.avatarUrl} alt="avatar"/>
                </div>

                <div className="col-10 Badge_info">
                  <h4 className="mb-0">
                    {Badge.firstName} {Badge.lastName}
                  </h4>

                  <div className="row">
                    <div className="twitterIMG_container col pr-0 pr-0">
                      <img className="twitterIMG" src={twitterIMG} alt="twitter logo"/>
                    </div>
                    <p className="col-11 mb-1 pl-1">
                      @{Badge.twitter}
                    </p>
                  </div>

                  <small className="mb-0">
                    {Badge.jobTitle}
                  </small>
                </div>

              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgeList

