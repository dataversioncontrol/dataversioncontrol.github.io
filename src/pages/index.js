import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Tools from '../components/Tools'
import Video from '../components/Video'
import HowItWorks from '../components/HowItWorks'
import Flow from '../components/Flow'
import Subscribe from '../components/Subscribe'
import Socials from '../components/Socials'

export default ({
  data: {
    site: {
      siteMetadata: {
        githubUrl,
        downloadUrl,
        videoId,
        twitter,
        linkedin,
        facebook
      }
    }
  }
}) => (
  <Page>
    <Hero githubUrl={githubUrl} downloadUrl={downloadUrl} />
    <Tools />
    <Video id={videoId} />
    <HowItWorks />
    <Flow />
    <Subscribe />
    <Socials twitter={twitter} linkedin={linkedin} facebook={facebook} />
  </Page>
)

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        videoId
        githubUrl
        downloadUrl
        twitter
        linkedin
        facebook
      }
    }
  }
`

const Page = styled.div``
