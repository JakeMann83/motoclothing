
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
            <div class="container">
                <header class="home-header parallax">
                    <div class="header-content dark text-center">
                        <h1 class="header-title mb-0">{data.contentfulHero.heroTitle}</h1>
                        <p class="inner-space mb-0">{data.contentfulHero.heroSubtitle}</p>
                    </div>
                </header>
            </div>    
        </>
    )
}    

export default Hero
