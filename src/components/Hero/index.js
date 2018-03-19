import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import DownloadPopup from '../DownloadPopup'
import { container } from '../../styles'

const isMobile = () => window.outerWidth <= 736

export default class Hero extends Component {
  state = {
    downloadPopup: false
  }

  toggleDownloadPopup = () =>
    this.setState(prevState => ({
      downloadPopup: !prevState.downloadPopup
    }))

  download = () => {
    if (isMobile()) {
      window.location.href = '/download'
    } else {
      this.toggleDownloadPopup()
    }
  }

  render() {
    const { downloadPopup } = this.state
    const { githubUrl } = this.props
    const {
      downloadOSX,
      downloadLinux,
      downloadLinuxRPM,
      downloadWin
    } = this.props

    return (
      <Wrapper>
        <Fork href={githubUrl}>
          <img src="/fork.png" alt="Fork me at github" />
        </Fork>
        <Inner>
          <Heading>Data Version Control</Heading>
          <SubHeading>
            Best engineering practices for data scientists
          </SubHeading>
          <Buttons>
            <DownloadButton onClick={this.download} primary>
              <Title>Download</Title>
              <SubTitle>Mac OS X, Linux Deb/RPM, Windows</SubTitle>
            </DownloadButton>
            <GithubButton onClick={() => (window.location = githubUrl)}>
              <Title>Github</Title>
              <SubTitle>Check repository</SubTitle>
            </GithubButton>
          </Buttons>
        </Inner>
        {downloadPopup && (
          <DownloadPopup
            downloadOSX={downloadOSX}
            downloadLinux={downloadLinux}
            downloadLinuxRPM={downloadLinuxRPM}
            downloadWin={downloadWin}
            onClose={this.toggleDownloadPopup}
          />
        )}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
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

 @media screen and (max-width: 768px) {
    padding-top: 15px;
    height: 90vh;
    min-height: 600px;
    align-items: center;
    display: flex;
    padding-bottom: 20px;
  }
`

const Fork = styled.a`
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
 @media screen and (max-width: 768px) {
    line-height: 64px;
  }
`

const SubHeading = styled.h2`
  margin: 0px;
  padding: 0px;
  font-weight: normal;
  color: #fff;

 @media screen and (max-width: 768px) {
    margin-top: 25px;
    margin-bottom: 4px;
  }
`

const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;

 @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Button = styled.button`
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
  outline: none;
  cursor: pointer;

  ${props =>
    props.primary &&
    `
    background-color: #003965;
  `};

 @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  margin-top: 4px;
`

const SubTitle = styled.div`
  margin-top: 2px;
  font-size: 12px;
`

const DownloadButton = Button.extend``

const GithubButton = Button.extend`
  background: transparent;
  margin-left: 30px;

 @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 15px;
  }
`
