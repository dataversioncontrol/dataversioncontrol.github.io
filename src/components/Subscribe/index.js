import React from 'react'
import styled from 'styled-components'
import Section, { Inner as SectionInner } from '../../components/Section'
import SubscribeForm from '../../components/SubscribeForm'

export default ({ title, children }) => (
  <Wrapper>
    <Section title={`Want to know more? Please subscribe`}>
      <SubscribeForm />
    </Section>
  </Wrapper>
)

const Wrapper = styled.div`
  ${SectionInner} {
    max-width: 570px;
    margin: 0px auto;
  }
`
