import React from 'react'
import styled, { css } from 'styled-components'
import { container } from '../styles'

export default () => (
	<Container>
  <Page>
    <Box>
      <Code>404</Code>
      <Error>Houston, we have a problem!</Error>
    </Box>
  </Page>
	</Container>
)

const Container = styled.div`
	position: absolute;
	background: #e93c23 url('/error_bg.png') no-repeat;
	background-size: cover;
	
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	
  display: flex;
  align-items: center;
  justify-content: center;
`

const Page = styled.div`
  ${container};
`

const Box = styled.div`
  width: 350px;
  height: 120px;
  transform: translateY(-50%);
  color: #fff;
  text-shadow: 1px 1px 1px #b41e78;
`

const noMargin = css`
	padding: 0px;
	margin: 0px;
	text-align: center;
`

const Code = styled.h1`
	${noMargin}
	font-size: 100px;
	font-weight: normal;
`

const Error = styled.h2`
	${noMargin}
	font-size: 24px;
	font-weight: normal;
`
