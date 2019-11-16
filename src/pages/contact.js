import React from "react"
// import { Link } from "gatsby"
// import { FaBeer } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactImg from '../images/bcg/contactBcg.jpeg'
import AboutPage from "./about"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" keywords={['gastby', 'application', 'react']} />
        <PageHeader img={contactImg}>
            <Banner title="eatery" subtitle="contact us">
            </Banner>
        </PageHeader>
    </Layout>
)

export default ContactPage
