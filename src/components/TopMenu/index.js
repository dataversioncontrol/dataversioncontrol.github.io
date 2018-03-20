import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import Close from '../Close'

const Burger = () => (
  <svg
    height="24"
    viewBox="0 0 12 16"
    version="1.1"
    width="18"
    aria-hidden="true"
  >
    <path
      fill="rgb(255, 255, 255)"
      d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
    />
  </svg>
)

export default ({
  open,
  getStarted,
  blog,
  support,
  docs,
  discuss,
  onToggle = () => {}
}) => (
  <Wrapper>
    <MobileButton onClick={() => onToggle()}>
      {open ? <Close /> : <Burger />}
    </MobileButton>
    <TopMenu visible={open}>
      <ItemLocal to={'/'} onClick={() => onToggle()}>
        <Label>Home</Label>
      </ItemLocal>
      <Item href={getStarted} onClick={() => onToggle()}>
        <Label>Get Started</Label>
      </Item>
      <Item href={blog} onClick={() => onToggle()}>
        <Label>Blog</Label>
      </Item>
      <ItemLocal to={support} onClick={() => onToggle()}>
        <Label>Support</Label>
      </ItemLocal>
      <Item href={discuss} onClick={() => onToggle()}>
        <Label>Discuss</Label>
      </Item>
      <ItemLocal to={docs} docs={true} onClick={() => onToggle()}>
        <Label noline>Docs</Label>
      </ItemLocal>
    </TopMenu>
  </Wrapper>
)

const Wrapper = styled.div``

const MobileButton = styled.div`
  background: transparent;
  border: none;
  display: none;
  background: transparent;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 15px;
    top: 15px;

    z-index: 999999;
  }
`

export const TopMenu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  padding-bottom: 10px;

  @media (max-width: 768px) {
    position: absolute;
    right: 5px;
    top: 5px;
    flex-direction: column;

    background: #fff;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    flex-grow: 1;
    transform: scale(0.95);
    transform-origin: 100% 0;
    will-change: transform, opacity;
    transition-property: transform, opacity;
    transition-duration: 0.25s;

    z-index: -10;

    align-items: start;

    transform: scale(0.95);
    opacity: 0;

    ${props =>
      props.visible &&
      `
         z-index: 888888;
    transform: none;
    opacity: 1;
    pointer-events: auto;
    `};
  }
`

const Label = styled.span`
  ${props =>
    !props.noline &&
    `
  border-bottom: 1px dashed #fff;
  `};
`

const topNavLink = css`
  font-size: 18px;
  padding: 0px 25px;
  line-height: 38px;
  margin-left: 30px;
  color: #fff;
  text-decoration: none;

  ${props =>
    props.docs &&
    `
    border: 2px solid #fff;
    border-radius: 24px;
  `};

  @media (max-width: 768px) {
    color: #000;
    line-height: 60px;
    margin-left: 0px;
    padding-left: 30px;
    align-items: flex-start;
    width: 100%;
  }
`

export const Item = styled.a`
  ${topNavLink};
`
export const ItemLocal = styled(Link)`
  ${topNavLink};
`
