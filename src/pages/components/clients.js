import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../../css/style.css'
import '../../css/bootstrap.min.css'
import '../../css/animate.css'
import '../../css/owl.carousel.min.css'
import image1 from '../../images/client1.png'
import image2 from '../../images/client2.png'
import image3 from '../../images/client3.png'
import image4 from '../../images/client4.png'


const Clients = () => (
<>  
    
    <h4 class="text-center">HAPPY CLIENTS</h4>
    <div class="spacer spacer-line border-primary">&nbsp;</div>
    <div class="container">
        <div class="owl-carousel owl-theme">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
    </div>
    
</>
  
)

export default Clients