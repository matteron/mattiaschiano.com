import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

class ProjectsPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <h1>Projects</h1>
        <p>This is a colleciton of posts involving project I've been working on.</p>
        {posts.map(({node}) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <h3 style={{marginRight: '0.5rem'}}>
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
export const pageQuery = graphql`
  query tagByProject {
    allMarkdownRemark(
      filter: {
        frontmatter: { tags: {eq: "project"} }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
export default ProjectsPage