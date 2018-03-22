import React from 'react'
import styled from 'styled-components'
import Section, {
  Wrapper as SectionWrapper,
  Inner as SectionInner
} from '../../components/Section'
import Tool, { Wrapper as ToolWrapper } from '../../components/Tool'

export default ({ title, children }) => (
  <Wrapper>
    <Section>
      <Tool
        title={
          <div>
            Define<br />ML steps
          </div>
        }
        icon={`formula.png`}
      />
      <Tool
        title={
          <div>
            Iterate faster with<br />
            reproducibility
          </div>
        }
        icon={`formula_2.png`}
      />
      <Tool
        title={
          <div>
            Share code<br />
            and trained models
          </div>
        }
        icon={`formula_3.png`}
      />
    </Section>
  </Wrapper>
)

const Wrapper = styled.div`
 @media (max-width : 736px) {
    display: none;
 }

  ${SectionWrapper} {
    padding-top: 100px;
  }
  
  ${SectionInner} {
    display: flex;
    justify-content: space-between
    flex-direction: row;
    
    @media (max-width : 736px) {
      flex-direction: column;
     
    }
  }
  
  
 ${ToolWrapper} {
    flex-basis: 360px;
    
    @media (max-width : 768px) {
      flex-basis: 100%;
      margin-bottom: 5em;
    }  
  }

`
