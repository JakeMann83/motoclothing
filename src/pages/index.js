import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import IndexBody from './components/index'
import Clients from './components/clients'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Hero />
    <IndexBody />
    <Clients />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
