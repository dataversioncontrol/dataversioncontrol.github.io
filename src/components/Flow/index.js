import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Section, { Inner as SectionInner } from '../../components/Section'

// TODO: svg
export default ({ title, children }) => (
  <Wrapper>
    <Section title={`DVC Data File Transport Commands?`}>
      <Flow src="/flow.png" />
    </Section>
  </Wrapper>
)

const Wrapper = styled.div`
  ${SectionInner} {
    text-align: center;
  }
`

const Flow = styled.img`
  max-width: 906px;
`
