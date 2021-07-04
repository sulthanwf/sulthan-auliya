import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThankYou from "../components/thankyoupage/ThankYou"

const ThankYouPage = () => (
  <Layout>
    <SEO title="thanks for your message" />
    <ThankYou />
  </Layout>
)

export default ThankYouPage
