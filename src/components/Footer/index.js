import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'
import Logo from '../Logo'
import { container } from '../../styles'

const formatTwitter = account => `http://twitter.com/${account}`

export default ({
  blog = 'https://blog.dataversioncontrol.com/',
  twitter = `FullStackML`
}) => (
  <Footer>
    <Inner>
      <Anchor>
        <Logo />
      </Anchor>
      <Copyright>
        <P>© 2018 Iterative, Inc.</P>
        <P>
          <StyledLink href="mailto:info@dataversioncontrol.com">
            info@dataversioncontrol.com
          </StyledLink>
        </P>
      </Copyright>
      <Links>
        <P>
          <StyledLink href={blog}>Blog</StyledLink>
        </P>
        <P>
          <StyledLink href={formatTwitter(twitter)}>
            <TwitterIcon src="twitter.png" />@FullStackML
          </StyledLink>
        </P>
      </Links>
    </Inner>
  </Footer>
)

const verticalCentered = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const P = styled.p`
  margin: 0px;
  padding: 0px;
`

const TwitterIcon = styled.img`
  vertical-align: -2px;
  width: 16px;
`

const Footer = styled.div`
  min-height: 96px;
  background: #1b1b1b;
  padding-top: 12px;
  padding-bottom: 16px;
  color: #fff;
`

const Inner = styled.div`
  ${container} display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Anchor = styled.div`
  img {
    height: 64px;
  }
`

const Copyright = styled.div`
  ${verticalCentered} flex-basis: 370px;
  text-align: center;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
    flex-basis: auto;
  }
`

const Links = styled.div`
  ${verticalCentered} flex-basis: 170px;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-basis: auto;
  }
`

const StyledLink = styled.a`
  color: #49b9f3;

  &:hover {
    color: #49b9f3;
  }
`
