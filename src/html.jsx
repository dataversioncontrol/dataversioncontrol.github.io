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
          <link rel="shortcut icon" href="/favicon.ico" />
          <title >{title}</title>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content={keywords}
          />
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
          <meta prefix="og: http://ogp.me/ns#" property="og:image" content={preview} />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:url"
            content={siteUrl}
          />
          <meta
            property="og:title"
            content={title}
          />
          <meta
            property="og:description"
            content={description}
          />
          <meta property="og:url" content={title} />
          <meta
            property="og:image"
            content={preview}
          />
          <meta
            property="og:image:secure_url"
            content={preview}
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1900" />
          <meta property="og:image:height" content="885" />
          {this.props.headComponents}
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700"
            rel="stylesheet"
          />
          {css}
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
