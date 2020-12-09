import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

export default function postTemplate({ data }) {
  console.log(data)
  const post = data.strapiPost
  return (
    <Layout>
      <SEO title={post.meta_title} description={post.meta_description} />
      <Img fixed={post.image.childImageSharp.fixed} />
      <ReactMarkdown children={post.content} />
    </Layout>
  )
}

export const query = graphql`
  query singlePost($slug: String!) {
    strapiPost(slug: { eq: $slug }) {
      title
      meta_title
      meta_description
      content
      image {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
