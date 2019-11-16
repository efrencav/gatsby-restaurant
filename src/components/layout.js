import React from "react"
import PropTypes from "prop-types"

// import "./bootstrap.min.css"
// import "./layout.css"
import Navbar from '../components/globals/navbar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
