import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info:siteMetadata {
        person {
          name
          age
        }
        author
        data
        description
        title
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>this is our {title}</h1>
    </div>
  )
}

export default Header
