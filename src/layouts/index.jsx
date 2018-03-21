import React from 'react'
import styled from 'styled-components'
import normalize from 'styled-normalize'
import ReactGA from 'react-ga'

import { injectGlobal } from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

ReactGA.initialize('UA-97468780-1')

function logPageView() {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

injectGlobal`
  ${normalize}
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit; 
  }
  
  body {
    box-sizing: border-box; 
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    line-height: 1.7;
    font-size: 16px;
    color: #020202; 
  }
`

class Template extends React.Component {
  componentDidMount() {
    logPageView()
  }

  componentWillUpdate() {
    logPageView()
  }

  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Page>
        <Header />
        {children()}
        <Footer />
      </Page>
    )
  }
}

export default Template

const Page = styled.div`
  padding: 0px;
  margin: 0px;
`
