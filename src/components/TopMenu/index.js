import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default ({ getStarted, tutorial, blog, support, docs, discuss }) => (
  <TopMenu>
    <Item to={getStarted}>
      <Label>Get Started</Label>
    </Item>
    <Item to={tutorial}>
      <Label>Tutorials</Label>
    </Item>
    <Item to={blog}>
      <Label>Blog</Label>
    </Item>
    <Item to={support}>
      <Label>Support</Label>
    </Item>
    <Item to={discuss}>
      <Label>Discuss</Label>
    </Item>
    <Item to={docs} docs={true}>
      <Label noline>Docs</Label>
    </Item>
  </TopMenu>
)

export const TopMenu = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 10px;
  
  @media (max-device-width: 736px) {
    position: absolute;
    flex-direction: column;
  }
`

const Label = styled.span`
  ${props =>
    !props.noline &&
    `
  border-bottom: 1px dashed #fff;
  `};
`

export const Item = styled(Link)`
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
`
