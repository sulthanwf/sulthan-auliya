import * as React from "react"
import CV from "../components/cvpage/CV"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CVPage = () => (
  <Layout>
    <SEO title="CV Page" />
    <CV />
  </Layout>
)

export default CVPage
