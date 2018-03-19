import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default () => (
  <TopMenu>
    <Item href="/#">
      <Label>Get Started</Label>
    </Item>
    <Item href="/#">
      <Label>Tutorials</Label>
    </Item>
    <Item href="/#">
      <Label>Blog</Label>
    </Item>
    <Item href="/#">
      <Label>Support</Label>
    </Item>
    <Item href="/#">
      <Label>Discuss</Label>
    </Item>
    <Item href="/#" docs={true}>
      <Label noline>Docs</Label>
    </Item>
  </TopMenu>
)

export const TopMenu = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 10px;
`

const Label = styled.span`
  ${props => !props.noline &&
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
