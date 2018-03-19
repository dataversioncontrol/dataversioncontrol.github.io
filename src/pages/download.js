import React from 'react'
import styled from 'styled-components'
import { container } from '../styles'

import DownloadPopupContent from '../components/DownloadPopupContent'
import Subscribe from '../components/Subscribe'
import Socials from '../components/Socials'

export default ({
  data: {
    site: {
      siteMetadata: {
        downloadOSX,
        downloadLinux,
        downloadLinuxRPM,
        downloadWin,
        twitter,
        linkedin,
        facebook
      }
    }
  }
}) => (
  <Container>
    <Page>
      <DownloadPopupContent
        downloadOSX={downloadOSX}
        downloadLinux={downloadLinux}
        downloadLinuxRPM={downloadLinuxRPM}
        downloadWin={downloadWin}
      />
    </Page>

    <Hills>
      <Subscribe />
      <Socials twitter={twitter} linkedin={linkedin} facebook={facebook} />
    </Hills>
  </Container>
)

export const query = graphql`
  query DownloadQuery {
    site {
      siteMetadata {
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

const Container = styled.div``
const Page = styled.div`
  ${container};
  margin-top: 40px;
  margin-bottom: 20px;
`

const Hills = styled.div`
  margin-top: -72px;
  padding-top: 132px;
  padding-bottom: 50px;
  background: url(/hills.png) top center no-repeat;

  @media screen and (max-width: 768px) {
    background-size: cover;
  }
`
