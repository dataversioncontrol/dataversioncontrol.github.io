import React from 'react'
import styled from 'styled-components'

const WIN = 'win'
const OSX = 'osx'
const LINUX_RPM = 'linux_rpm'
const LINUX = 'linux'
const PIP = 'pip'

const handleClick = () => {}

const Item = ({ id, link, icon, renderDownload, text, onClick }) => (
  <Os href={link} target="_blank" onClick={e => onClick(id)}>
    <Icon src={`/icons/${icon}.png`} type={id} />
    <Download>
      {renderDownload ? (
        renderDownload()
      ) : (
        <DownloadButton type={id}>{text}</DownloadButton>
      )}
    </Download>
  </Os>
)

export default ({
  downloadOSX,
  downloadLinux,
  downloadLinuxRPM,
  downloadWin
}) => (
  <Container>
    <Title>Please select your operating system</Title>

    <Oss>
      <Item
        onClick={handleClick}
        id={OSX}
        link={downloadOSX}
        icon={'osx'}
        text={`OS X`}
      />
      <Item
        onClick={handleClick}
        id={LINUX}
        link={downloadLinux}
        icon={'linux'}
        text={`Linux DEB`}
      />
      <Item
        onClick={handleClick}
        id={LINUX_RPM}
        link={downloadLinuxRPM}
        icon={'linux_rpm'}
        text={`Linux RPM`}
      />
      <Item
        onClick={handleClick}
        id={WIN}
        link={downloadWin}
        icon={'windows'}
        text={`Windows`}
      />
      <Item
        onClick={handleClick}
        id={PIP}
        link={'#'}
        icon={'pip'}
        renderDownload={() => <Text>$ pip install dvc</Text>}
      />
    </Oss>
  </Container>
)

const Container = styled.div``

const Title = styled.h3`
  text-align: center;
  font-size: 34px;
  font-weight: bold;
`

const Oss = styled.section`
  margin-top: 130px;
  min-height: 200px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;
`

const Os = styled.a`
  flex-basis: 200px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    border-radius: 12px;
    transform: scale(1.05);
    background: rgba(225, 241, 255, 0.3);
  }
`

const Icon = styled.div`
  height: 150px;
  width: 100%;

  background: url(${props => props.src}) no-repeat center center;

  ${props => props.type === WIN && `background-position-x: 40px;`} ${props =>
      props.type === OSX && ` background-position-x: 50px;`} ${props =>
      props.type === LINUX && `background-position-x: 50px;`} ${props =>
      props.type === LINUX_RPM && `background-position-x: 50px;`} ${props =>
      props.type === PIP && `background-position-x: 40px;`};
`

const Download = styled.div`
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DownloadButton = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none
  cursor: pointer;
  
  padding: 9px 35px 15px 30px;
  color: #fff;
  font-weight: bold;

  ${props =>
    props.type === WIN &&
    `
    text-shadow: 0px -1px 0px #008abf;
    background-image: url('/buttons/windows_button.png');
  `} ${props =>
  props.type === OSX &&
  `
    text-shadow: 0px -1px 0px #054086;
    background-image: url('/buttons/windows_button.png');
  `} ${props =>
  props.type === LINUX &&
  `
    color: #323232;
    text-shadow: 0px -1px 0px #ffffff;
    background-image: url('/buttons/linux_button.png');
  `} ${props =>
  props.type === LINUX_RPM &&
  `
    text-shadow: 0px -1px 0px #607a8b;
    background-image: url('/buttons/linux_rpm_button.png');
  `};
`

const Text = styled.p`
  margin: 0px;
  padding: 0px;
  color: #bfc6ce;
  font-weight: bold;
`
