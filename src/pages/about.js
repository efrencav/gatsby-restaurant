import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About" keywords={['gastby', 'application', 'react']} />
        <h3>This is the about page</h3>
    </Layout>
)

export default AboutPage
