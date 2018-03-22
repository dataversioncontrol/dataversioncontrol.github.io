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
        <Container>
          <Fork href={githubUrl}>
            <img src="/fork.png" alt="Fork me at github" />
          </Fork>
          <Inner>
            <Heading>Data Version Control</Heading>
            <SubHeading>
              Git extension for data scientists – manage your code and data
              together
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
        </Container>
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
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAmCAIAAAAdowPPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBDNDBBQTc5MjVBQjExRTg4QjQ4OUY2OTVDQUQwMzY5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBDNDBBQTdBMjVBQjExRTg4QjQ4OUY2OTVDQUQwMzY5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEM0MEFBNzcyNUFCMTFFODhCNDg5RjY5NUNBRDAzNjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEM0MEFBNzgyNUFCMTFFODhCNDg5RjY5NUNBRDAzNjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5cDNjWAAApuElEQVR42rx8V3ck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');
  backdrop-filter: blur(5px);
`

const Container = styled.div`
  overflow: hidden;
  transform: translate3d(0,0,0);
  
  position: relative;
  min-height: 360px;
  
  background: linear-gradient(
    45deg,
    #e93c23 0%,
    #922175 80%,
    #922175 90%,
    #922175 100%
  );
  background-image: url('/img/hero.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    line-height: 64px;
  }
`

const SubHeading = styled.h2`
  margin: 0px;
  padding: 0px;
  font-weight: normal;
  color: #fff;

  @media (max-width: 768px) {
    margin-top: 25px;
    margin-bottom: 4px;
  }
`

const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 15px;
  }
`
