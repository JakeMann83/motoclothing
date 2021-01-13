/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../css/layout.css"
import useScript from '../hooks/useScript';

const Layout = ({ children }) => {
  useScript('/assets/js/jquery.min.js');
  useScript('/assets/js/bootstrap.min.js');
  useScript('/assets/js/contact-form-validator.min.js');
  useScript('/assets/js/contact-form.js');
  useScript('/assets/js/jquery.shuffle.min.js');
  useScript('/assets/js/owl.carousel.min.js');  
  useScript('/assets/js/jquery.countTo.js');
  useScript('/assets/js/jquery.easing.min.js');  
  useScript('/assets/js/gallery.js');
  useScript('/assets/js/preloader.js');
  useScript('/assets/js/smooth-scroll.js');
  
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
