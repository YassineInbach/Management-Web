import React from 'react'
import "../../Styles/Globals.css"
import Cards from "./Cards/Cards"
import CardData from './Cards/CardData'
function AboutUs() {
    return (
        <div className="box">
            <div className="info">
                <h4>Testimonials</h4>
                <h2>Check What Our Clients Think About Us</h2>
            </div>
            <Cards cards={CardData} />
        </div>
    )
}

export default AboutUs