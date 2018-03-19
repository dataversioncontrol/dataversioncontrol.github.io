import React from 'react'
import styled from 'styled-components'
import Section, {
  Wrapper as SectionWrapper,
  Inner as SectionInner
} from '../../components/Section'
import Tool, { Wrapper as ToolWrapper } from '../../components/Tool'

export default ({ title, children }) => (
  <Wrapper>
    <Section title={`Open source tool for machine learning`}>
      <Tool
        title={
          <div>
            Define<br /> ML steps
          </div>
        }
        icon={`formula.png`}
        lines={[`$ dvc run -d images\\`, `          python train.py`]}
      />
      <Tool
        title={
          <div>
            Iterate faster with<br />
            reproducibility
          </div>
        }
        icon={`formula_2.png`}
        lines={[`$ vi train.ру`, `$ dvc repro`]}
      />
      <Tool
        title={
          <div>
            Share code<br />
            and trained models
          </div>
        }
        icon={`formula_3.png`}
        lines={[`$ git push`, `$ dvc push`]}
      />
    </Section>
  </Wrapper>
)

const Wrapper = styled.div`
  ${SectionWrapper} {
    padding-top: 100px;
   
  }
  
  ${SectionInner} {
    display: flex;
    justify-content: space-between
    flex-direction: row;
    
    
    ${ToolWrapper} {
      flex-basis: 360px;
    }
    
    @media (max-device-width : 736px) {
      flex-direction: column;
     
      ${ToolWrapper} {
        flex-basis: 100%;
        margin-bottom: 5em;
      }  
    }
  }
`
