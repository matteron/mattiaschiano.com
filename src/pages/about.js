import React from 'react'
import Helmet from 'react-helmet'

const AboutPage = ({data}) => (
  <div>
    <Helmet title = {`about | ${data.site.siteMetadata.title}`}/>
    <h1 style={{marginBottom: '0'}}>About</h1>
    <hr style = {{width: '58px', borderRightWidth: '58px'}}/>
    <p>I'm a pretty cool guy who doesn't afraid of anything</p>
  </div>
)

export default AboutPage

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`