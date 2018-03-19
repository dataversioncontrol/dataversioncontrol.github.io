import React from 'react'
import styled from 'styled-components'
import { container } from '../styles'

import Subscribe from '../components/Subscribe'
import Socials from '../components/Socials'

const discuss = 'http://discuss.dataversioncontrol.com'
const newsLetter =
  'http://sweedom.us10.list-manage.com/subscribe/post?u=a08bf93caae4063c4e6a351f6&id=24c0ecc49a'

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
      <Title>Support</Title>
      <Text>
        Stay up to date on development progress and get involved with the
        discussion.
      </Text>
      <Section>
        <SubTitle>Forums</SubTitle>
        <Description>
          Discuss implementations, research, anything DVC relatedetc.
        </Description>
        <ButtonLink href={discuss}>Discuss</ButtonLink>
      </Section>
      <Section>
        <SubTitle>GitHub Issues</SubTitle>
        <Description>
          Bug reports, feature requests, install issues, RFCs, thoughts, etc..
        </Description>
        <ButtonLink href={`${githubUrl}/issues`}>View on GitHub</ButtonLink>
      </Section>
      <Section>
        <SubTitle>Newsletter</SubTitle>
        <Description>
          No-noise, one-way email newsletter with important announcements about
          DVC.
        </Description>
        <ButtonLink href={newsLetter}>Subscribe</ButtonLink>
      </Section>
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

const Title = styled.h1`
  color: rgb(27, 27, 27);
`

const Section = styled.section`
  margin-top: 2em;
  margin-bottom: 2em;
`

const SubTitle = styled.h2`
  color: rgb(27, 27, 27);
`

const Text = styled.p`
  margin: 0px;
  padding: 0px;
`

const Description = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  color: #333;
`

const ButtonLink = styled.a`
  display: inline-block;
  padding: 10px 22px;
  cursor: pointer;
  margin-top: 10px;
  border-width: 2px;
  color: #1b1b1b;
  border-style: solid;
  border-color: #1b1b1b;
  border-image: initial;
  border-radius: 44px;
  text-decoration: none;
  outline: none;
  background: transparent;
  font-size: 12px;
  font-weight: bold;

  transition: all 0.3s;
  &:hover {
    background-color: #1b1b1b;
    color: #fff;
  }
`
