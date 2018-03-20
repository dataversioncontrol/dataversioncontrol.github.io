import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Section, { Inner as SectionInner } from '../../components/Section'

// TODO: svg
export default ({ title, children }) => (
  <Wrapper>
    <Section title={`How DVC works`}>
      <Flow src="/flow.png" />
    </Section>
  </Wrapper>
)

const Wrapper = styled.div`
  ${SectionInner} {
    text-align: center;
    max-width: 916px;
    margin: 0px auto;
  }
`

const Flow = styled.img`
  width: 98%;
  margin: 0px auto;
`
