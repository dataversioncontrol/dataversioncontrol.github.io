import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import TopMenu, { TopMenu as MenuWrapper } from '../TopMenu'
import { container } from '../../styles'

const links = {
  getStarted:
    'https://medium.com/m/global-identity?redirectUrl=https://blog.dataversioncontrol.com/data-version-control-tutorial-9146715eda46',
  blog: 'https://blog.dataversioncontrol.com/',
  support: '/support',
  docs: '/docs',
  discuss: 'http://discuss.dataversioncontrol.com/'
}

export default class Header extends Component {
  state = {
    open: false
  }

  toggleOpen = () =>
    this.setState(prevState => ({
      open: !prevState.open
    }))

  render() {
    const { open } = this.state
    return (
      <Wrapper>
        <Inner>
          <Logo />
          <TopMenu {...links} open={open} onToggle={this.toggleOpen} />
        </Inner>
      </Wrapper>
    )
  }
}
const Wrapper = styled.div`
  background: #1b1b1b;
  height: 105px;

  ${MenuWrapper} {
  }

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`

const Inner = styled.div`
  ${container} padding-top: 10px;
  padding-bottom: 2px;
  display: flex;
  justify-content: space-between;

  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`
