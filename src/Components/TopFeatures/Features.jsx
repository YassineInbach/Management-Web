import React from 'react'
import Button from '../UI/Button'
import "../../Styles/Globals.css"
import card1 from "../../../public/Images/card1.png"
import card2 from "../../../public/Images/card2.png"
import card3 from "../../../public/Images/card3.png"
import card4 from "../../../public/Images/card4.png"
function Features() {
  return (
    <div className="fatures">
        <div className="info">
            <h4>Learn about Features </h4>
            <h2>Our Top Features</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam </p>
            <div className='btns'>
            <Button type = "submit" color = "blue">Get Started</Button>
            </div>
        </div>
        <div className="groups">
            
            <div className="group">
                <div className="img">
                    <img src = {card1} alt="" />
                </div>
                <div className="group_info">
                    <h4>Tasks </h4>
                    <p>Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy d cs eirmod dummy text here.</p>
                </div>
            </div>

            <div className="group">
                <div className="img">
                    <img src = {card2} alt="" />
                </div>
                <div className="group_info">
                    <h4>Onboarding </h4>
                    <p>Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy d cs eirmod dummy text here.</p>
                </div>
            </div>

            <div className="group">
                <div className="img">
                    <img src = {card3} alt="" />
                </div>
                <div className="group_info">
                    <h4>Time Slots </h4>
                    <p>Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy d cs eirmod dummy text here.</p>
                </div>
            </div>

            <div className="group">
                <div className="img">
                    <img src = {card4} alt="" />
                </div>
                <div className="group_info">
                    <h4>Collaboration </h4>
                    <p>Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy d cs eirmod dummy text here.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Features