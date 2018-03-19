import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import TopMenu, { TopMenu as MenuWrapper } from '../TopMenu'
import { container } from '../../styles'

const links = {
  getStarted: '/getstarted',
  tutorial:
    'https://blog.dataversioncontrol.com/data-version-control-beta-release-iterative-machine-learning-a7faf7c8be67',
  blog: 'https://blog.dataversioncontrol.com/',
  support: '/support',
  docs: '/docs',
  discuss: 'http://discuss.dataversioncontrol.com/'
}

export default () => (
  <Header>
    <Inner>
      <Logo />
      <TopMenu {...links} />
    </Inner>
  </Header>
)

const Header = styled.div`
  background: #1b1b1b;

  ${MenuWrapper} {
  }
`

const Inner = styled.div`
  ${container} padding-top: 10px;
  padding-bottom: 2px;
  display: flex;
  justify-content: space-between;
`
