import React from 'react'

import NavBar from '../componets/NavBar'

function Layout (props) {
  // const children = props.children
  return (
  <React.Fragment>
    <NavBar />
    {props.children}
  </React.Fragment>
  )
}

export default Layout