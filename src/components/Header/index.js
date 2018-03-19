import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import TopMenu, { TopMenu as MenuWrapper } from '../TopMenu'
import { container } from '../../styles'

export default () => (
  <Header>
    <Inner>
      <Logo />
      <TopMenu />
    </Inner>
  </Header>
)

const Header = styled.div`
  background: #1b1b1b;

  ${MenuWrapper} {
  }
`

const Inner = styled.div`
  ${container} 
  padding-top: 10px;
  padding-bottom: 2px;
  display: flex;
  justify-content: space-between;
`
