import React from 'react'
import styled from 'styled-components'
import Section, { Inner as SectionInner } from '../../components/Section'

export default ({ }) => (
  <Wrapper>
    <Section title={`How DVC works?`}>
      <Flow src="/flow.svg" />
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
