import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import BadgeForm from '../componets/BadgeForm'
import Badge from '../componets/Badge'

class BadgeNew extends React.Component {
  state= {form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew_hero">
          <img className="img-fluid" src={header} alt="logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-9/58379116_1482626721871762_8224097773172031488_n.jpg?_nc_cat=110&_nc_ht=scontent.fbog2-1.fna&oh=98e3183a77a4cc665021353a285ef8db&oe=5D6849C8"
              />
            </div>
            
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew

