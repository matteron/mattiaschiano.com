import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import 'typeface-lato'
import 'typeface-karla'
import 'typeface-rubik'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: `Hi I'm Mattia Schiano, this is a website I made.` },
        { name: 'keywords', content: 'mattia, schiano, .com' },
        { name: 'author', content: 'Mattia Schiano'},
        { name: 'viewport', content: `width=device-width, initial-scale=1.0`},
        { name: "google-site-verification", content: 'WsjJk3Cz4KHAps8-DbcfkiB089OAaTmFb0Hm1-fDf8A'}
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 650,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
