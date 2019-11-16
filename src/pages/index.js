import React from "react"
// import { Link } from "gatsby"
// import { FaBeer } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gastby', 'application', 'react']} />
    <h3>Hello World</h3>
  </Layout>
)

export default IndexPage
