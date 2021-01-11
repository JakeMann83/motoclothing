/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"


const newLocal = <Helmet>
  <script src={withPrefix('bootstrap.min.js')} type="text/javascript" />
  <script src={withPrefix('bootstrap.min.js.map')} type="text/javascript" />
  <script src={withPrefix('contact-form-validator.min.js')} type="text/javascript" />
  <script src={withPrefix('contact-form.js')} type="text/javascript" />
  <script src={withPrefix('gallery.js')} type="text/javascript" />
  <script src={withPrefix('jquery.countTo.js')} type="text/javascript" />
  <script src={withPrefix('jquery.easing.min.js')} type="text/javascript" />
  <script src={withPrefix('jquery.min.js')} type="text/javascript" />
  <script src={withPrefix('jquery.shuffle.min.js')} type="text/javascript" />
  <script src={withPrefix('owl.carousel.js')} type="text/javascript" />
  <script src={withPrefix('preloader.js')} type="text/javascript" />
  <script src={withPrefix('smooth-scroll.js')} type="text/javascript" />

</Helmet>

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        newLocal
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> 
      <div>  
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
