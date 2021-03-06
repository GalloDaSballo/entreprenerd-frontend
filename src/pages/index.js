import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/ExternalLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>What's up I'm Alex the Entreprenerd, this is my site, basically a bunch of free stuff for you</h1>
    <h3><ExternalLink to="https://www.udemy.com/course/the-complete-strapi-course/" title="The Complete Strapi Course" /></h3>
    <h3><ExternalLink to="https://www.youtube.com/c/AlexTheEntreprenerd" title="Youtube" /></h3>
    <h3><ExternalLink to="https://github.com/GalloDaSballo" title="Github" /></h3>
    <h3><ExternalLink to="https://calendly.com/alex-entreprenerd/15min" title="Discuss Mentoring Options with me" /> </h3>
    <h3><ExternalLink to="https://www.codementor.io/@alex_entreprenerd" title="Codementor" /></h3>
  </Layout>
)

export default IndexPage
