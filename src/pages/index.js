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
    <VideoWave>
      <Video id={videoId} />
    </VideoWave>
    <Dots>
      <HowItWorks />
    </Dots>
    <FlowWave>
      <Flow />
    </FlowWave>
    <Hills>
      <Subscribe />
      <Socials twitter={twitter} linkedin={linkedin} facebook={facebook} />
    </Hills>
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

const VideoWave = styled.div`
  padding-top: 153px;
  padding-bottom: 48px;
  background: url(/video_bg.png) top center no-repeat;
  background-size: cover;
`

const Dots = styled.div`
  padding-top: 153px;
  padding-bottom: 48px;
  background: url(/dots_bg.png) top center no-repeat;
  background-size: cover;
`

const FlowWave = styled.div`
  padding-top: 153px;
  padding-bottom: 48px;
  background: url(/flow_bg.png) top center no-repeat;
  background-size: cover;
`

const Hills = styled.div`
  padding-top: 153px;
  padding-bottom: 48px;
  background: url(/hills.png) top center no-repeat;
  background-size: cover;
`
