import { graphql, useStaticQuery, Link } from 'gatsby'
import React from "react"
import '../../css/style.css'
import '../../css/bootstrap.min.css'
import '../../css/animate.css'

const IndexBody = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulGallery {
                edges {
                    node {
                        galleryTitle
                        gallerySubtitle
                        galleryImage {
                            resize(width: 800, height: 800) {
                                src
                            }  
                        }
                    }
                }
            }
        }
    `)
    
    
    return (
        <section id="gallery" className="p-0 line-effect">
            <div className="container">
                
                <ul className="gallery-filter list-inline text-center">
                    <li><Link to="#" data-group="all" className="active ml-2">SEE ALL</Link></li>
                    <li><Link to="#" data-group="framed">FRAMED</Link></li>
                    <li><Link to="#" data-group="print">PRINT</Link></li>
                    <li><Link to="#" data-group="digital">DIGITAL</Link></li>
                    <li><Link to="#" data-group="photography">PHOTOGRAPHY</Link></li>
                </ul>
                
            </div>
            <div className="container full-width">
                <h3 className="section-title hidden">GALLERY</h3>
                <ul className="row gallery line-effect list-unstyled mb-0" id="grid">
                    {data.allContentfulGallery.edges.map((edge) => {
                        return (
                            <li className="col-md-6 col-lg-4 gallery" data-groups='["framed"]'>
                                <figure className="gallery-item effect-bubba">
                                    <img src={edge.node.galleryImage.resize.src} alt={edge.node.galleryTitle} />
                                    <figcaption>
                                        <div className="hover-content">
                                            <h2 className="hover-title text-center text-white">{edge.node.galleryTitle}</h2>
                                            <p className="gallery-info text-center text-white">{edge.node.gallerySubtitle}
                                                <span className="gallery-icons">
                                                    <Link to="#x" className="gallery-button" data-toggle="modal" data-target=".framed-product"><i className="fas fa-plus"></i></Link>
                                                    <Link to="shopping-cart.html" className="gallery-button"><i className="fas fa-shopping-cart"></i></Link>
                                                </span>
                                            </p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                        )
                    })}        
                </ul>
            </div>
        </section>
    )
}
        

export default IndexBody