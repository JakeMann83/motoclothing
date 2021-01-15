
import React from "react"
import '../css/style.css'
import '../css/bootstrap.min.css'
import '../css/animate.css'
import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulLogo {
            mcLogo {
                    resize (width:70) {
                        src
                    }
                }
            }
        }
    `)
return (    
    <>  
    <div className="top-menu top-menu-primary">
        <div className="container">
            <p>
                <span className="social margin-fix left">
                    <a className="no-margin" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                </span>
                <span className="right">
                    <a href="#x" data-toggle="modal" data-target=".login-modal"><i className="fas fa-user mr-1"></i> <span>Login</span></a>
                    <a href="#x" data-toggle="modal" data-target=".register-modal"><i className="fas fa-lock mr-1"></i> <span>Register</span></a>
                </span>
            </p>
        </div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-white custom-menu split-menu">
        <div className="container">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-toggle-1" aria-controls="navbar-toggle-1" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
                <span className="sr-only">Toggle navigation</span>
            </button>

            <a className="navbar-brand mobile-brand m-auto" href="#x"><img src={data.contentfulLogo.mcLogo.resize.src} alt="" /></a>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-toggle-2" aria-controls="navbar-toggle-2" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
                <span className="sr-only">Toggle navigation</span>
            </button>

            <div className="collapse navbar-collapse" id="navbar-toggle-1">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link first-menu-item active dropdown-toggle" href="#x" id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                        <div className="dropdown-menu drop-to-right animated fadeIn fast" aria-labelledby="dropdown1">
                            <a className="dropdown-item active" href="index.html">Main Demo</a>
                            <a className="dropdown-item" href="index2.html">Full Width</a>
                            <a className="dropdown-item" href="index3.html">Full Screen</a>
                        </div>
                    </li>
                    <li className="nav-item after-dropdown">
                        <a className="nav-link" href="about.html">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#x" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                        <div className="dropdown-menu drop-to-right animated fadeIn fast" aria-labelledby="dropdown2">
                            <a className="dropdown-item" href="#x">Framed</a>
                            <a className="dropdown-item" href="#x">Print</a>
                            <a className="dropdown-item" href="#x">Digital</a>
                            <a className="dropdown-item" href="#x">Photography</a>
                        </div>
                    </li>
                </ul>
            </div>

            <a className="navbar-brand m-auto" href="#x"><img src={data.contentfulLogo.mcLogo.resize.src} alt="" /></a>

            <div className="collapse navbar-collapse" id="navbar-toggle-2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link before-count" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item dropdown extra-dropdowns">
                        <a className="nav-link last-menu-item has-dropdown-toggle dropdown-toggle" href="#x" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shopping Cart<span className="count count-primary">2</span></a>
                        <div className="dropdown-menu animated fadeIn fast" aria-labelledby="dropdown3">
                            <div className="cart-small">
                                <img src="images/product-small1.jpg" alt="" />
                                <p><a href="#x" className="text-black">Amazing Framed Art</a> <span>1 x $29.99</span></p>
                                <a href="#x"> <i className="md-icon dp14 close-icon">close</i></a>
                            </div>
                            <div className="cart-small">
                                <img src="images/product-small2.jpg" alt="" />
                                <p><a href="#x" className="text-black">Printed Photography</a> <span>1 x $14.99</span></p>
                                <a href="#x"> <i className="md-icon dp14 close-icon">close</i></a>
                            </div>
                            <p className="text-left cart-small-total"><b>Subtotal: $44.98</b></p>
                            <div className="cart-small-footer text-center">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a href="shopping-cart.html" className="mini-cart-btn"><i className="md-icon dp12 mr-1">shopping_cart</i> <span className="va-middle"><b>VIEW CART</b></span></a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="checkout.html" className="mini-cart-btn mb-0"><i className="md-icon dp12 mr-1">exit_to_app</i> <span className="va-middle"><b>CHECKOUT</b></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  
    )
}    

export default Header