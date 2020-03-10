import React from 'react';
import {Global, css} from '@emotion/core'
import Helmet from 'react-helmet'
import useSiteMetaData from "../hooks/use-sitemetadata"

const Layout = ({children}) => {
  const {title, description} = useSiteMetaData()
  return (
    <>
      <Helmet>
        <html lang="en"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Global
          styles={css`
            * {
              box-sizing: border-box;
              margin: 0;
            }
            * + * {
              margin-top: 1rem;
            }

            html,
            body {
              margin: 0;
              color: #555;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
              font-size: 18px;
              line-height: 1.4;
              > div {
                margin-top: 0;
              }
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          `}
      />
      <main css={css`
        margin: 0 auto;
        max-width: 80vw;
      `}>{children}</main>
    </>
  )
}
export default Layout