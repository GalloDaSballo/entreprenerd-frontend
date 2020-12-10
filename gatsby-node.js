const path = require(`path`)
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query getPosts {
      allStrapiPost {
        nodes {
          slug
        }
      }
    }
  `)

  data.allStrapiPost.nodes.forEach(post => {
    actions.createPage({
      path: `/posts/${post.slug}`,
      component: path.resolve("./src/templates/postTemplate.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}
