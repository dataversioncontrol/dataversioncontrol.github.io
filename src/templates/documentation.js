import React from 'react'
import styled from 'styled-components'
import { container } from '../styles'

export default ({ data: { markdownRemark: { frontmatter, html } } }) => (
  <Container>
    <Title>{frontmatter.title}</Title>
    <Content dangerouslySetInnerHTML={{ __html: html }} />
  </Container>
)

export const pageQuery = graphql`
  query DocumentationSectionContent($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

const Container = styled.div`
  ${container};
`

const Title = styled.h1`
  margin: 25px 0px 0px 0px;
`

const Content = styled.div`
  padding: 25px 0px;

  pre {
    margin: 40px 0px;
  }

  ul,
  ol {
    padding-left: 2em;
  }

  @media screen and (max-width: 768px) {
    pre,
    ul p,
    li p {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
`
