import React from 'react'
import styled from 'styled-components'
import { container } from '../../styles'

const FACEBOOK_SHARE_URL = `https://www.facebook.com/sharer/sharer.php?u=https://dataversioncontrol.com&t=DVC`;
const TWITTER_SHARE_URL = `https://twitter.com/share?url=https://dataversioncontrol.com&via=DataVersionCtrl&text=DataVersionCtrl`;
const LINKEDIN_SHARE_URL = `https://www.linkedin.com/shareArticle?mini=true&url=https://dataversioncontrol.com&title=DVC&summary=summary&source=source`;

export default ({ twitter, linkedin, facebook }) => (
  <Wrapper>
    <Social href={TWITTER_SHARE_URL}>
      <img src="/twitter.png" alt="Twitter" />
    </Social>
    <Social href={LINKEDIN_SHARE_URL}>
      <img src="/linkedin.png" alt="Linkedin" />
    </Social>
    <Social href={FACEBOOK_SHARE_URL}>
      <img src="/facebook.png" alt="Facebook" />
    </Social>
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 370px;
  margin: 0px auto;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-device-width: 736px) {
    ${container};
    margin-top: 40px;
    justify-content: space-evenly;
  }
`

const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`
