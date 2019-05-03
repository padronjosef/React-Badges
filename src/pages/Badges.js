import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgeList from '../componets/BadgeList'

class Badge extends React.Component {
  state = {
    data: [
      {
        id: "63c0323ad-33a2-45pd-9pf1-354ad7becpaf",
        firstName: "Jose",
        lastName: "Padron",
        email: "josepadron.go@gmail.com",
        jobTitle: "Front-End Engineer",
        twitter: "padronjosef",
        avatarUrl: "https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-9/58379116_1482626721871762_8224097773172031488_n.jpg?_nc_cat=110&_nc_ht=scontent.fbog2-1.fna&oh=98e3183a77a4cc665021353a285ef8db&oe=5D6849C8"
      },
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        firstName: "Andy",
        lastName: "Cruz",
        email: "Leann_Berge@gmail.com",
        jobTitle: "Art Design Director",
        twitter: "borregarae",
        avatarUrl: "https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/53250649_10217456937672014_8978393991418478592_n.jpg?_nc_cat=105&_nc_ht=scontent.fbog2-2.fna&oh=dfa14362a9afa83c10ffd65b7b214994&oe=5D3613DB"
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        firstName: "Eric",
        lastName: "Rodriguez",
        email: "Ron61@hotmail.com",
        jobTitle: "Full-Stack Developer",
        twitter: "Ejra92",
        avatarUrl: "https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-9/16195401_10211311133595457_2720719501219060110_n.jpg?_nc_cat=100&_nc_ht=scontent.fbog2-1.fna&oh=e34a1225040258ffa7cedea141ca315e&oe=5D2E07B2"
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        firstName: "Alexander",
        lastName: "Fernandez",
        email: "Ilene66@hotmail.com",
        jobTitle: "Product Manager",
        twitter: "AlexFrnndZ",
        avatarUrl: "https://media.licdn.com/dms/image/C4D03AQFk-Av1Qy_DYg/profile-displayphoto-shrink_800_800/0?e=1562198400&v=beta&t=jUbbuSWaij8X3SzBhVwjVns5GOeFGAaxQZdesaeYixs"
      }
    ]
  }

  render() {
    return ( 
      <div>
        <div className="Badges">
          <div className="Badges_hero">
            <div className="Badges_container">
              <img className="Badges_conf-logo" src={confLogo} alt="conf logo"/>
            </div>
          </div>
        </div>

        <div className="Badges-container">
          <div className="Badges-buttons row">
            <Link className="offset-7 mb-3 btn btn-primary" to="/Badges/new"> New Badge </Link>
          </div>
        </div>

        <div className="Badges_list">
          <div className="Badges_container">
            <BadgeList Badge={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}

export default Badge