import React from 'react'
import Helmet from 'react-helmet'
import { Document, Page } from 'react-pdf'
import resumeFile from '../resume/Resume-5-18.pdf';

const ResumePage = ({data}) => (
  <div>
    <Helmet title = {`resume | ${data.site.siteMetadata.title}`}/>
    <h1 style={{marginBottom: '0'}}>Resume</h1>
    <hr style = {{width: '76.5px', borderRightWidth: '76.5px'}}/>
    <Document file={resumeFile}>
      <Page pageNumber={1} />
    </Document>
  </div>
)

export default ResumePage

export const query = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`