import React from "react"
// import { Link } from "gatsby"
import { FaBeer } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gastby', 'application', 'react']} />
    <h3>Hello World</h3>
    <h3>{' '}
      Lets go for a <FaBeer />? {' '}</h3>
    <div className="container">

    </div>
  </Layout>
)

export default IndexPage
