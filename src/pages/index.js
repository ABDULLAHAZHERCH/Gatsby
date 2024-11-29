// import React from "react"
// import { graphql } from "gatsby"

// const HomePage = ({ data }) => (
//   <main>
//     <h1>{data.site.siteMetadata.title}</h1>
//     <p>{data.site.siteMetadata.description}</p>
//   </main>
// )
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `
// export default HomePage
import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => (
  <Helmet>
    <title>My Gatsby Site</title>
    <meta
      name="description"
      content="This is a Gatsby site optimized for SEO"
    />
  </Helmet>
)

export default SEO
