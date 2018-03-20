import React from 'react'
import styled from 'styled-components'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { style as codeStyle } from 'react-syntax-highlighter/styles/prism'

const Code = ({ source }) => (
  <CodeBlock language="bash" style={codeStyle}>
    {source}
  </CodeBlock>
)

export default ({ title, icon, lines = [] }) => (
  <Wrapper>
    <Icon>
      <img src={icon} alt="" />
    </Icon>
    <Title>{title}</Title>
    <Command>{lines.map((line, i) => <Line key={i}>{line}</Line>)}</Command>
  </Wrapper>
)

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`

const Icon = styled.div`
  width: 216px;
  height: 216px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  box-shadow: 0px 0px 40px #cae0fa;
`

const Title = styled.div`
  margin-top: 46px;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
`

const Command = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 40px;
  font-weight: normal;
  white-space: pre;
  text-align: left;

  font-size: 22px;
  line-height: 24px;

  border-radius: 12px;
  padding: 0em;
  overflow: hidden;
`

const Line = styled(SyntaxHighlighter)`
  font-family: monospace, monospace;
  white-space: pre-wrap;
  word-wrap: break-word;

  background: rgba(240, 240, 240, 0.48) !important;
  code {
    font-family: Space Mono, SFMono-Regular, Menlo, Monaco, Consolas,
      Liberation Mono, Courier New, monospace;
    padding: 0;
    font-size: 80%;
    font-variant: none;
    -webkit-font-feature-settings: 'clig' 0, 'calt' 0;
    font-feature-settings: 'clig' 0, 'calt' 0;
  }
`
