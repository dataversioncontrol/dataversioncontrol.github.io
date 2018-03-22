import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const {
  siteMetadata: { title, description, keywords, preview, author, siteUrl }
} = require('../gatsby-config')

export default class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>{title}</title>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:title"
            content={title}
          />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:image"
            content={preview}
          />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:url"
            content={siteUrl}
          />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={title} />
          <meta property="og:image" content={preview} />
          <meta property="og:image:secure_url" content={preview} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1900" />
          <meta property="og:image:height" content="885" />
          {this.props.headComponents}
          {css}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.8/css/solid.css"
            integrity="sha384-v2Tw72dyUXeU3y4aM2Y0tBJQkGfplr39mxZqlTBDUZAb9BGoC40+rdFCG0m10lXk"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.8/css/fontawesome.css"
            integrity="sha384-q3jl8XQu1OpdLgGFvNRnPdj5VIlCvgsDQTQB6owSOHWlAurxul7f+JpUOVdAiJ5P"
            crossOrigin="anonymous"
          />
          <script src="/js/main.js" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
