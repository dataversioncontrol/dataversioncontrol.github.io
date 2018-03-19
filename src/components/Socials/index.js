import React from 'react'
import styled from 'styled-components'

// const FACEBOOK_SHARE_URL = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl.baseUrl}&t=${shareUrl.facebook.title}`;
// const TWITTER_SHARE_URL = `https://twitter.com/share?url=${shareUrl.baseUrl}&via=${shareUrl.twitter.via}&text=${shareUrl.twitter.via}`;
// const LINKEDIN_SHARE_URL = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl.baseUrl}&title=${shareUrl.linkedin.title}&summary=${shareUrl.linkedin.summary}&source=${shareUrl.linkedin.source}`;

export default ({ twitter, linkedin, facebook }) => (
  <Wrapper>
    <Social href={twitter}>
      <img src="twitter.png" alt="Twitter" />
    </Social>
    <Social href={linkedin}>
      <img src="linkedin.png" alt="Linkedin" />
    </Social>
    <Social href={facebook}>
      <img src="facebook.png" alt="Facebook" />
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
`

const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`
