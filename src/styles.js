import styled, { css } from 'styled-components'

export const maxWidth = 1170

export const container = css`
  max-width: ${maxWidth}px;
  margin: 0px auto;

  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`
