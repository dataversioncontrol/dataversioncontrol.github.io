import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Logo from '../Logo'
import TopMenu, { TopMenu as MenuWrapper } from '../TopMenu'
import { container } from '../../styles'

export default ({ githubUrl, downloadUrl }) => (
  <Hero>
    <Fork to={githubUrl}>
      <img src="/fork.png" alt="Fork me at github" />
    </Fork>
    <Inner>
      <Heading>Data Version Control</Heading>
      <SubHeading>Best engineering practices for data scientists</SubHeading>
      <Buttons>
        <DowloadButton to={downloadUrl} primary>
          <Title>Download</Title>
          <SubTitle>Mac OS X, Linux Deb/RPM, Windows</SubTitle>
        </DowloadButton>
        <GithubButton to={githubUrl}>
          <Title>Github</Title>
          <SubTitle>Check repository</SubTitle>
        </GithubButton>
      </Buttons>
    </Inner>
  </Hero>
)

const Hero = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 360px;
  background: linear-gradient(
    45deg,
    #e93c23 0%,
    #922175 80%,
    #922175 90%,
    #922175 100%
  );
  background: #e93c23 url('/hero.png') center center no-repeat;
  background-size: cover;

  @media (max-device-width: 736px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`

const Fork = styled(Link)`
  position: absolute;
  right: 0px;
  top: -78px;
`

const Inner = styled.div`
  ${container} padding-top: 54px;
`

const Heading = styled.h1`
  margin: 0px;
  padding: 0px;
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  @media (max-device-width: 736px) {
    line-height: 64px;
  }
`

const SubHeading = styled.h2`
  margin: 0px;
  padding: 0px;
  font-weight: normal;
  color: #fff;

  @media (max-device-width: 736px) {
    margin-top: 25px;
    margin-bottom: 4px;
  }
`

const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;

  @media (max-device-width: 736px) {
    flex-direction: column;
  }
`

const Button = styled(Link)`
  width: 270px;
  height: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 44px;
  text-decoration: none;

  ${props =>
    props.primary &&
    `
    background-color: #003965;
  `};

  @media (max-device-width: 736px) {
    width: 100%;
  }
`

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  margin-top: 10px;
`

const SubTitle = styled.div`
  margin-top: 2px;
  font-size: 12px;
`

const DowloadButton = Button.extend``
const GithubButton = Button.extend`
  margin-left: 30px;

  @media (max-device-width: 736px) {
    margin-left: 0px;
    margin-top: 15px;
  }
`
