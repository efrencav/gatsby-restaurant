import React from "react"
// import { Link } from "gatsby"
// import { FaBeer } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from "../utils"
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gastby', 'application', 'react']} />
    <HomeHeader img={img}>hello from home header</HomeHeader>
  </Layout>
)

export default IndexPage
