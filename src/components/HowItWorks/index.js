import React from 'react'
import styled, { css } from 'styled-components'
import Section from '../../components/Section'

const Item = ({ title, command, index = 0, lines = [] }) => (
  <Step odd={index % 2 === 0}>
    <Title>{title}</Title>
    <In>
      <Commands>
        {lines.map((line, i) => (
          <Line key={i}>
            {'$ '}
            {line}
          </Line>
        ))}
      </Commands>
      <Index light={index % 2 === 0}>{index}</Index>
    </In>
  </Step>
)

export default ({ title, children }) => (
  <Wrapper>
    <Section title={`How DVC works?`}>
      <Item
        title={`Track large data file, outside of in Git repository`}
        index={1}
        lines={[`add images.zip`]}
      />
      <Item
        title={`Define ML steps`}
        index={2}
        lines={[
          `dvc run -d images.zip -o images/ unzip -q images.zip`,
          `dvc run -d images/ -o model.p python train.py`
        ]}
      />
      <Item
        title={`Make changes and regenerate affected steps`}
        index={3}
        lines={[`vi train.py`, `dvc repro`]}
      />
      <Item
        title={`Share code and DVC metadata`}
        index={4}
        lines={[`git add .`, `git commit -m 'The baseline model'`, `git push`]}
      />
      <Item
        title={`Share data and models`}
        index={5}
        lines={[`dvc config AWS.StoragePath mybucket/image_cnn`, `dvc push`]}
      />
    </Section>
  </Wrapper>
)

const verticalCentered = css`
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  overflow: hidden;
`

const Title = styled.div`
  ${verticalCentered} padding-left: 100px;
  padding-right: 20px;
  width: 290px;
  font-weight: bold;

  @media (max-width: 768px) {
    width: auto;
    padding-right: 0px;
    padding-left: 0px;
  }
`

const Commands = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 130px;

  background: url('/flow_arrow.png') left center no-repeat transparent;

  @media (max-width: 768px) {
    padding-left: 0px;
    background: transparent;
  }
`

const Line = styled.div`
  font-family: monospace, monospace;
`

const Index = styled.div`
  ${verticalCentered} padding-right: 70px;
  font-size: 90px;
  line-height: 100px;
  color: #ffffff;

  ${props =>
    props.light &&
    `
    color: #e5f1ff;
  `};

  @media (max-width: 768px) {
    position: absolute;
    left: 0px;
    top: 0px;
    padding-right: 0px;
    justify-content: center;
    width: 84px;
  }
`

const Step = styled.div`
  display: flex;
  margin-bottom: 4px;
  background-color: #e5f1ff;
  min-height: 100px;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 84px;
    position: relative;

    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;

    margin-bottom: 24px;
  }

  ${props =>
    props.odd &&
    `
    background-color: #f4f9ff;
  `};
`

const In = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
