import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutImg from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
    <Layout>
        <SEO title="About" keywords={['gastby', 'application', 'react']} />
        <PageHeader img={aboutImg}>
            <Banner title="eatery" subtitle="about us">
            </Banner>
        </PageHeader>

    </Layout>
)

export default AboutPage
