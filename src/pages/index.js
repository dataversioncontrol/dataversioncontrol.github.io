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

        videoId,
        twitter,
        linkedin,
        facebook,

        downloadOSX,
        downloadLinux,
        downloadLinuxRPM,
        downloadWin
      }
    }
  }
}) => (
  <Page>
    <Hero
      githubUrl={githubUrl}
      downloadOSX={downloadOSX}
      downloadLinux={downloadLinux}
      downloadLinuxRPM={downloadLinuxRPM}
      downloadWin={downloadWin}
    />
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
        twitter
        linkedin
        facebook
        downloadOSX
        downloadLinux
        downloadLinuxRPM
        downloadWin
      }
    }
  }
`

const Page = styled.div``

const VideoWave = styled.div`
  padding-top: 76px;
  padding-bottom: 134px;
  margin-top: 64px;
  background: url(/video_bg.png) top center no-repeat;
`

const Dots = styled.div`
  padding-top: 96px;
  background: url(/dots_bg.png) top center no-repeat;
`

const FlowWave = styled.div`
  margin-top: 152px;
  padding-top: 102px;
  padding-bottom: 148px;
  background: url(/flow_bg.png) top center no-repeat;
`

const Hills = styled.div`
  margin-top: -72px;
  padding-top: 132px;
  padding-bottom: 50px;
  background: url(/hills.png) top center no-repeat;

  @media (max-device-width: 736px) {
    background-size: cover;
  }
`
