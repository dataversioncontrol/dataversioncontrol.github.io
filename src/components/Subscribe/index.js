import React from 'react'
import styled from 'styled-components'
import Section from '../../components/Section'
import SubscribeForm from '../../components/SubscribeForm'

export default ({ title, children }) => (
  <Wrapper>
    <Section title={`Want to know more? Please subscribe`}>
      <SubscribeForm />
    </Section>
  </Wrapper>
)

const Wrapper = styled.div``
