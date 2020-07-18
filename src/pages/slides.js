import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from "../components/seo"

import ExternalLink from "../components/ExternalLink"

export default ({ data }) => (
    <Layout>
        <SEO title="Slides" />
        <h1>Slides</h1>
        <p>These are the Slides used for Lectures for The Complete Strapi Course</p>
        {console.log("data", data)}
        <div className="grid">
        {data.allStrapiLecture.nodes.map(({title, link, image}) => (
            <div>
                <Img fixed={image.childImageSharp.fixed}/>
                <h4>{title}</h4>
                <ExternalLink to={link} title="View Slides"/>
            </div>
        ))}
        </div>
    </Layout>

)

export const pageQuery = graphql`
query getLectures {
    allStrapiLecture {
      nodes {
        title
        link
        image {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
        }
      }
    }
}
`


  