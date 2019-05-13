import React from 'react'

import NavBar from '../componets/NavBar'
import Footer from '../componets/Footer'

function Layout (props) {
  // const children = props.children
  return (
  <React.Fragment>
    <NavBar />
    {props.children}
    <Footer />
  </React.Fragment>
  )
}

export default Layout