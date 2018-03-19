import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Logo from '../Logo'
import TopMenu, { TopMenu as MenuWrapper } from '../TopMenu'
import { container } from '../../styles'

export default ({ githubUrl, downloadUrl }) => (
  <Hero>
    <Background />
    <Fork href={githubUrl}>
      <img src="/fork.png" alt="Fork me at github" />
    </Fork>
    <Inner>
      <Heading>Data Version Control</Heading>
      <SubHeading>Best engineering practices for data scientists</SubHeading>
      <Buttons>
        <DowloadButton href={downloadUrl} primary>
          <Title>Download</Title>
          <SubTitle>Mac OS X, Linux Deb/RPM, Windows</SubTitle>
        </DowloadButton>
        <GithubButton href={githubUrl}>
          <Title>Github</Title>
          <SubTitle>Check repository</SubTitle>
        </GithubButton>
      </Buttons>
    </Inner>
  </Hero>
)

const Hero = styled.div`
  z-index: -1;
  position: relative;
  height: 360px;
  background-color: #e93c23;
  background: linear-gradient(
    45deg,
    #e93c23 0%,
    #922175 80%,
    #922175 90%,
    #922175 100%
  );
`

const Fork = styled(Link)`
  position: absolute;
  right: 0px;
  top: -78px;
`

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  background: transparent url('/hero.png') center center no-repeat;
  background-size: cover;
`

const Inner = styled.div`
  ${container} padding-top: 54px;
  z-index: 3;
`

const Heading = styled.h1`
  margin: 0px;
  padding: 0px;
  font-size: 60px;
  font-weight: bold;
  color: #fff;
`

const SubHeading = styled.h2`
  margin: 0px;
  padding: 0px;
  font-weight: normal;
  color: #fff;
`

const Buttons = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
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
`
