import React from "react"
// import { Link } from "gatsby"
// import { FaBeer } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuImg from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
    <Layout>
        <SEO title="Menu" keywords={['gastby', 'application', 'react']} />
        <PageHeader img={menuImg}>
            <Banner title="eatery" subtitle="menu">
            </Banner>
        </PageHeader>
    </Layout>
)

export default MenuPage
