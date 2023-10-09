import React from 'react'
import Button from '../UI/Button'
import img from "../../../public/Images/Group.png"
import img1 from "../../../public/Images/Group1.png"

function Tasks() {
  return (
    <div className="all-tasks">
        <div className="info">
            <img src = {img} alt="" />
            <div className="task-info">
            <h4>Perform Your All Tasks </h4>
            <h2>Perform Your All Tasks At One Place</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam </p>
            <div className="btns">
                <Button type = "submit" color = "blue">Get Started</Button>
            </div>
            </div>
        </div>
        <div className="info">
        <div className="task-info">
            <h4>Learn about Features  </h4>
            <h2>Boost Your Productivity And Management  </h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam </p>
            <div className="btns">
                <Button type = "submit" color = "blue">Get Started</Button>
            </div>
            </div>
            <img src = {img1} alt="" />
        </div>
    </div>
    )
}

export default Tasks