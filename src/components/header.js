
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
    <div class="top-menu top-menu-primary">
        <div class="container">
            <p>
                <span class="social margin-fix left">
                    <a class="no-margin" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                </span>
                <span class="right">
                    <a href="#x" data-toggle="modal" data-target=".login-modal"><i class="fas fa-user mr-1"></i> <span>Login</span></a>
                    <a href="#x" data-toggle="modal" data-target=".register-modal"><i class="fas fa-lock mr-1"></i> <span>Register</span></a>
                </span>
            </p>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-white custom-menu split-menu">
        <div class="container">
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-toggle-1" aria-controls="navbar-toggle-1" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar top-bar"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar"></span>
                <span class="sr-only">Toggle navigation</span>
            </button>

            <a class="navbar-brand mobile-brand m-auto" href="#x"><img src={data.contentfulLogo.mcLogo.resize.src} alt="" /></a>

            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-toggle-2" aria-controls="navbar-toggle-2" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar top-bar"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar"></span>
                <span class="sr-only">Toggle navigation</span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-toggle-1">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link first-menu-item active dropdown-toggle" href="#x" id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                        <div class="dropdown-menu drop-to-right animated fadeIn fast" aria-labelledby="dropdown1">
                            <a class="dropdown-item active" href="index.html">Main Demo</a>
                            <a class="dropdown-item" href="index2.html">Full Width</a>
                            <a class="dropdown-item" href="index3.html">Full Screen</a>
                        </div>
                    </li>
                    <li class="nav-item after-dropdown">
                        <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#x" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                        <div class="dropdown-menu drop-to-right animated fadeIn fast" aria-labelledby="dropdown2">
                            <a class="dropdown-item" href="#x">Framed</a>
                            <a class="dropdown-item" href="#x">Print</a>
                            <a class="dropdown-item" href="#x">Digital</a>
                            <a class="dropdown-item" href="#x">Photography</a>
                        </div>
                    </li>
                </ul>
            </div>

            <a class="navbar-brand m-auto" href="#x"><img src={data.contentfulLogo.mcLogo.resize.src} alt="" /></a>

            <div class="collapse navbar-collapse" id="navbar-toggle-2">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link before-count" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item dropdown extra-dropdowns">
                        <a class="nav-link last-menu-item has-dropdown-toggle dropdown-toggle" href="#x" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shopping Cart<span class="count count-primary">2</span></a>
                        <div class="dropdown-menu animated fadeIn fast" aria-labelledby="dropdown3">
                            <div class="cart-small">
                                <img src="images/product-small1.jpg" alt="" />
                                <p><a href="#x" class="text-black">Amazing Framed Art</a> <span>1 x $29.99</span></p>
                                <a href="#x"> <i class="md-icon dp14 close-icon">close</i></a>
                            </div>
                            <div class="cart-small">
                                <img src="images/product-small2.jpg" alt="" />
                                <p><a href="#x" class="text-black">Printed Photography</a> <span>1 x $14.99</span></p>
                                <a href="#x"> <i class="md-icon dp14 close-icon">close</i></a>
                            </div>
                            <p class="text-left cart-small-total"><b>Subtotal: $44.98</b></p>
                            <div class="cart-small-footer text-center">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <a href="shopping-cart.html" class="mini-cart-btn"><i class="md-icon dp12 mr-1">shopping_cart</i> <span class="va-middle"><b>VIEW CART</b></span></a>
                                    </div>
                                    <div class="col-sm-6">
                                        <a href="checkout.html" class="mini-cart-btn mb-0"><i class="md-icon dp12 mr-1">exit_to_app</i> <span class="va-middle"><b>CHECKOUT</b></span></a>
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
