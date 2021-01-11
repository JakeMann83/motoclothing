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
       <div class="footer-widgets">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 text-center">
                    <div class="widget">
                        <img src={logo} alt="logo" class="footer-logo" />
                        <p class="mb-3">Vivamus sodales eleifend sem eu malesuada nunc.</p>
                    </div>
                </div>

                <div class="col-lg-3 text-center">
                    <div class="widget">
                        <h3 class="widget-title">USEFUL LINKS</h3>
                        <ul class="footer-list pl-0 mb-0">
                            <li class="mb-3"><a href="#x">Privacy Policy</a></li>
                            <li class="mb-3"><a href="#x">Terms &amp; Conditions</a></li>
                            <li class="mb-3"><a href="#x">News &amp; Updates</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 text-center">
                    <div class="widget">
                        <h3 class="widget-title">CATEGORIES</h3>
                        <ul class="footer-list pl-0 mb-0">
                            <li class="mb-3"><a href="#x">Framed</a></li>
                            <li class="mb-3"><a href="#x">Print</a></li>
                            <li class="mb-3"><a href="#x">Digital</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 text-center">
                    <div class="widget">
                        <h3 class="widget-title">CONTACT US</h3>
                        <ul class="footer-list pl-0 mb-0">
                            <li class="mb-3"><a href="tel:01234567890"><i class="fas fa-phone mr-2"></i> 0123 456 7890</a></li>
                            <li class="mb-3"><a href="mailto:info@youriste.com"><i class="fas fa-envelope mr-2"></i> info@yoursite.com</a></li>
                            <li class="mb-3"><a href="#x"><i class="fab fa-twitter mr-2"></i> @GallerioTwitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </footer>
    <footer class="bg-white">
        <div class="container-fluid text-center">
            <p>© 2018 <b>Gallerio</b> by <a href="https://kingstudio.ro" target="_blank">KingStudio</a>. All Rights Reserved.</p>
        </div>
    </footer>
</>    
)

export default Footer
