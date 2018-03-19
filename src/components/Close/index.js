import React from 'react'
import styled from 'styled-components'

export default ({ onClick = () => {} }) => (
  <Wrapper onClick={onClick}>
    <Inner>
      <ArrowLeft />
      <ArrowRight />
    </Inner>
  </Wrapper>
)

export const Wrapper = styled.button`
  width: 24px;
  height: 18px;
  outline: none;
  cursor: pointer;
  background: transparent;
  border: none;
`

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const ArrowLeft = styled.div`
  content: '';
  position: absolute;
  background: #6772e5;
  border-radius: 1px;
  left: 0px;
  right: 0px;
  top: 7px;
  height: 2px;
  transform: rotate(45deg);
  transition: background 0.1s;
`

const ArrowRight = ArrowLeft.extend`
  transform: rotate(-45deg);
`
