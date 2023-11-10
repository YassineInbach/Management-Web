import React from 'react';
import Button from "../../UI/Button";
import {MdEmail} from "react-icons/md";
import img from "../../../../public/Images/Path.png";
import img1 from "../../../../public/Images/Path1.png";

function Suscribe() {
    return (
        <div className="suscribe">
            <div className="suscribe-img">
                <div className="img">
                    <img src = {img1} alt="" />
                </div>
                <img src = {img} alt="" />
            </div>
            <div className="suscribe-info">
                <h5>Get Latest Updates </h5>
                <h2>Subscribe To Our Newsletter</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
                <form action="">
                    <div className="input">
                        <MdEmail style={{color : "white" , fontSize : "1.1em"}}/>
                        <input type="email" name="" id="" placeholder='email......' required/>
                    </div>
                    <Button type="submit" color='blue'>Subscribe Now</Button>
                </form>
            </div>
        </div>
    )
}

export default Suscribe