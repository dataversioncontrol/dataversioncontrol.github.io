import React from 'react'
import styled from 'styled-components'

export default ({ title, icon }) => (
  <Wrapper>
    <Icon>
      <img src={icon} alt="" />
    </Icon>
    <Title>{title}</Title>
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