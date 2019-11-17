import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components'
import Footer from '../components/globals/Footer';


import "./bootstrap.min.css"
// import "./layout.css"
import Navbar from '../components/globals/navbar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
