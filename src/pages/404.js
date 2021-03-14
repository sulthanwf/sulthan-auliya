import * as React from "react"
import Content404 from "../components/content404"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Content404 />
  </Layout>
)

export default NotFoundPage
