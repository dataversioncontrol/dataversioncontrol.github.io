import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default () => (
  <Logo to={'/'}>
    <img src="/logo.png" height="85" />
  </Logo>
)

const Logo = styled(Link)``
