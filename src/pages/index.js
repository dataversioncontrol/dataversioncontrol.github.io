import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Tools from '../components/Tools'
import Video from '../components/Video'
import HowItWorks from '../components/HowItWorks'
import Flow from '../components/Flow'
import Subscribe from '../components/Subscribe'

export default ({ data }) => (
  <Page>
    <Hero
      githubUrl={data.site.siteMetadata.githubUrl}
      downloadUrl={data.site.siteMetadata.downloadUrl}
    />
    <Tools />
    <Video id={data.site.siteMetadata.videoId} />
    <HowItWorks />
    <Flow />
    <Subscribe />
  </Page>
)

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        videoId
        githubUrl
        downloadUrl
      }
    }
  }
`

const Page = styled.div``
