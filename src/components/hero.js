
import React from "react"
import '../css/style.css'
import '../css/bootstrap.min.css'
import '../css/animate.css'
import { graphql, useStaticQuery } from 'gatsby'


const Hero = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulHero {
                heroTitle
                heroSubtitle
                heroBanner {
                    resize {
                        src
                    }
                }
            }
        }
    `)

    return (
        <>
            <div className="container">
                <header className="home-header parallax">
                    <div className="header-content dark text-center">
                        <h1 className="header-title mb-0">{data.contentfulHero.heroTitle}</h1>
                        <p className="inner-space mb-0">{data.contentfulHero.heroSubtitle}</p>
                    </div>
                </header>
            </div>    
        </>
    )
}    

export default Hero