import React from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import Section, { Inner as SectionInner } from '../../components/Section'

const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
}

export default ({ id }) => (
  <Wrapper>
    <Section>
      <Video>
        <YouTube videoId={id} opts={opts} />
      </Video>
    </Section>
  </Wrapper>
)

const Wrapper = styled.div`
  ${SectionInner} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Video = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  width: 978px;
  height: 561px;
  background: #000;

  @media (max-width: 768px) {
    width: 384px;
    height: 320px;
  }
`
