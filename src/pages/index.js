import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <h3 style={{marginRight: '0.5rem'}}>
                  <Link id="blogLink" style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </div>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
    )
  }
}
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

export default BlogIndex
