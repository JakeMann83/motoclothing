import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../css/style.css'
import '../css/bootstrap.min.css'
import '../css/animate.css'
import logo from '../images/logo-icon.png'

const Footer = () => (
<>    
    <footer>
       <div className="footer-widgets">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 text-center">
                    <div className="widget">
                        <img src={logo} alt="logo" className="footer-logo" />
                        <p className="mb-3">Vivamus sodales eleifend sem eu malesuada nunc.</p>
                    </div>
                </div>

                <div className="col-lg-3 text-center">
                    <div className="widget">
                        <h3 className="widget-title">USEFUL LINKS</h3>
                        <ul className="footer-list pl-0 mb-0">
                            <li className="mb-3"><a href="#x">Privacy Policy</a></li>
                            <li className="mb-3"><a href="#x">Terms &amp; Conditions</a></li>
                            <li className="mb-3"><a href="#x">News &amp; Updates</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 text-center">
                    <div className="widget">
                        <h3 className="widget-title">CATEGORIES</h3>
                        <ul className="footer-list pl-0 mb-0">
                            <li className="mb-3"><a href="#x">Framed</a></li>
                            <li className="mb-3"><a href="#x">Print</a></li>
                            <li className="mb-3"><a href="#x">Digital</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 text-center">
                    <div className="widget">
                        <h3 className="widget-title">CONTACT US</h3>
                        <ul className="footer-list pl-0 mb-0">
                            <li className="mb-3"><a href="tel:01234567890"><i className="fas fa-phone mr-2"></i> 0123 456 7890</a></li>
                            <li className="mb-3"><a href="mailto:info@youriste.com"><i className="fas fa-envelope mr-2"></i> info@yoursite.com</a></li>
                            <li className="mb-3"><a href="#x"><i className="fab fa-twitter mr-2"></i> @GallerioTwitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </footer>
    <footer className="bg-white">
        <div className="container-fluid text-center">
            <p>© 2018 <b>Gallerio</b> by <a href="https://kingstudio.ro" target="_blank">KingStudio</a>. All Rights Reserved.</p>
        </div>
    </footer>
</>    
)

export default Footer
