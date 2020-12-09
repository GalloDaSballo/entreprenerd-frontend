import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <h1>Posts</h1>
    <p>All my posts</p>
    {data.allStrapiPost.nodes
      .reverse()
      .map(({ title, strapiId, image, slug }) => (
        <div key={strapiId}>
          <Img fixed={image.childImageSharp.fixed} />
          <Link to={`/posts/${slug}`}>
            <h4>{title}</h4>
          </Link>
        </div>
      ))}
    <div className="grid"></div>
  </Layout>
)

export const pageQuery = graphql`
  query getPosts {
    allStrapiPost(sort: { order: DESC, fields: created_at }) {
      nodes {
        title
        slug
        strapiId
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
