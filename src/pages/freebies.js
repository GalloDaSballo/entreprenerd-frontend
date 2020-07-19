import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from "../components/seo"
import ExternalLink from "../components/ExternalLink"

export default ({ data }) => (
    <Layout>
        <SEO title="Freebies" />
        <h1>Freebies</h1>
        <p>These are free downloads for my students</p>
        {console.log("data", data)}
        <div className="grid">
        {data.allStrapiFreebie.nodes.map(({image, name, file_url}) => (
            <div>
                <Img fixed={image.childImageSharp.fixed}/>
                <h4>{name}</h4>
                <ExternalLink to={file_url} title="Download" />
            </div>
        ))}
        </div>
    </Layout>

)

export const pageQuery = graphql`
query getFreebies {
    allStrapiFreebie {
      nodes {
        image {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        name
        file_url
      }
    }
}
`


  