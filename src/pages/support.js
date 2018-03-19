import React from 'react'
import styled from 'styled-components'
import { container } from '../styles'

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
  <Container>
    <Page>
      <h1>Support</h1>
    </Page>

    <Hills>
      <Subscribe />
      <Socials twitter={twitter} linkedin={linkedin} facebook={facebook} />
    </Hills>
  </Container>
)

export const query = graphql`
  query SupportQuery {
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

const Container = styled.div``
const Page = styled.div`
  ${container};
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
