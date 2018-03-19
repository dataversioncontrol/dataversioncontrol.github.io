import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Section, { Wrapper as SectionWrapper } from '../../components/Section'

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

  font-size: 22px;
  line-height: 24px;
`

const Line = styled.div``
