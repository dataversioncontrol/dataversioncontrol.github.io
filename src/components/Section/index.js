import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { container } from '../../styles'

export default ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Inner>{children}</Inner>
  </Wrapper>
)

export const Wrapper = styled.section`
  ${container} padding-top: 266px;
  padding-bottom: 100px;
`

const Title = styled.div`
  margin-bottom: 84px;
  text-align: center;
  font-size: 34px;
  font-weight: bold;
`

export const Inner = styled.div``
