import React from "react"
// import { Link } from "gatsby"
// import { FaBeer } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, Button, BannerButton } from "../utils"
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/Quickinfo'
import Gallery from '../components/HomePageComponents/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gastby', 'application', 'react']} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="14714 main street, Cypress, Texas">
        <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
