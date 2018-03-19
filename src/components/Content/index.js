import React from 'react'
import styled from 'styled-components'

export default ({ children }) => <Content>{children}</Content>

const Content = styled.div`
  max-width: 1700px;
  margin: 0px auto;
`
